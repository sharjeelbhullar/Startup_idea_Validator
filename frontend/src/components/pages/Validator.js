import React, { useState } from 'react';

const Validator = () => {
  const [idea, setIdea] = useState('');
  const [report, setReport] = useState(null);
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
      // TODO: Integrate with backend (Django) for RAG-based market research
      await new Promise(resolve => setTimeout(resolve, 2000));
      setReport({
        competitors: ['Competitor A', 'Competitor B'],
        marketNeed: 'High demand in the market.',
        uniqueAngle: 'Your idea is unique in X way.',
        marketSize: '$500M',
        growthPotential: 'High',
        riskFactors: ['Market competition', 'Regulatory challenges']
      });
    } catch (err) {
      setError('Failed to validate idea. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Startup Idea Validator
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Get instant feedback on your startup idea using AI-powered market research
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
                    Validating...
                  </>
                ) : (
                  'Validate Idea'
                )}
              </button>
            </div>
          </form>
        </div>

        {report && (
          <div className="mt-8 bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Validation Report</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Market Analysis</h3>
                  <p className="text-gray-600"><span className="font-semibold">Market Size:</span> {report.marketSize}</p>
                  <p className="text-gray-600"><span className="font-semibold">Growth Potential:</span> {report.growthPotential}</p>
                  <p className="text-gray-600"><span className="font-semibold">Market Need:</span> {report.marketNeed}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Competitive Analysis</h3>
                  <p className="text-gray-600"><span className="font-semibold">Competitors:</span> {report.competitors.join(', ')}</p>
                  <p className="text-gray-600"><span className="font-semibold">Unique Angle:</span> {report.uniqueAngle}</p>
                </div>
                <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Risk Assessment</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {report.riskFactors.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Validator; 