import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BusinessPlan = () => {
  const [idea, setIdea] = useState('');
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) {
      setError('Please enter your startup idea');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Integrate with backend (LLM) to generate business plan
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPlan({
        problem: 'Problem statement here.',
        solution: 'Solution description here.',
        market: 'Market size and opportunity.',
        monetization: 'Monetization strategy.',
        targetMarket: 'Primary target market segments.',
        competitiveAdvantage: 'Key competitive advantages.',
        revenueModel: 'Detailed revenue model.',
        marketingStrategy: 'Marketing and growth strategy.',
        team: 'Key team members and roles.',
        financialProjections: '3-year financial projections.'
      });
    } catch (err) {
      setError('Failed to generate business plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = (type) => {
    // TODO: Implement export to PPT or PDF
    alert(`Exporting as ${type} (to be implemented)`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Business Plan Generator
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Create a comprehensive business plan for your startup idea using AI
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label htmlFor="idea" className="block text-sm font-medium text-gray-700">
                Describe your startup idea
              </label>
              <div className="mt-1">
                <textarea
                  id="idea"
                  name="idea"
                  rows="6"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your startup idea in detail..."
                  value={idea}
                  onChange={e => setIdea(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white 
                  ${loading 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  'Generate Business Plan'
                )}
              </button>
            </div>
          </form>
        </div>

        {plan && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className="px-6 py-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Business Plan</h2>
                <div className="space-x-2">
                  <button
                    onClick={() => handleExport('PPT')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Export as PPT
                  </button>
                  <button
                    onClick={() => handleExport('PDF')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Export as PDF
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Problem & Solution</h3>
                  <p className="text-gray-600"><span className="font-semibold">Problem:</span> {plan.problem}</p>
                  <p className="text-gray-600"><span className="font-semibold">Solution:</span> {plan.solution}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Market & Monetization</h3>
                  <p className="text-gray-600"><span className="font-semibold">Market:</span> {plan.market}</p>
                  <p className="text-gray-600"><span className="font-semibold">Monetization:</span> {plan.monetization}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Target Market & Competition</h3>
                  <p className="text-gray-600"><span className="font-semibold">Target Market:</span> {plan.targetMarket}</p>
                  <p className="text-gray-600"><span className="font-semibold">Competitive Advantage:</span> {plan.competitiveAdvantage}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Revenue & Marketing</h3>
                  <p className="text-gray-600"><span className="font-semibold">Revenue Model:</span> {plan.revenueModel}</p>
                  <p className="text-gray-600"><span className="font-semibold">Marketing Strategy:</span> {plan.marketingStrategy}</p>
                </div>

                <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Team & Financials</h3>
                  <p className="text-gray-600"><span className="font-semibold">Team:</span> {plan.team}</p>
                  <p className="text-gray-600"><span className="font-semibold">Financial Projections:</span> {plan.financialProjections}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BusinessPlan; 