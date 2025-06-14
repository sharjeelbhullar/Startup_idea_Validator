import React, { useState } from 'react';

const FundingAdvisor = () => {
  const [idea, setIdea] = useState('');
  const [advice, setAdvice] = useState(null);
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
      // TODO: Integrate with backend for RAG-based funding advice
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAdvice({
        investors: [
          { name: 'Sequoia Capital', type: 'VC', focus: 'Technology, Healthcare' },
          { name: 'Y Combinator', type: 'Accelerator', focus: 'Early-stage startups' },
          { name: 'Andreessen Horowitz', type: 'VC', focus: 'Software, Fintech' }
        ],
        emailDraft: `Dear Investor,

I am reaching out to share my startup idea that aims to revolutionize the way we approach [industry/space]. Our solution addresses a critical pain point in the market and has shown promising early traction.

Key Highlights:
- [Key feature/benefit 1]
- [Key feature/benefit 2]
- [Key feature/benefit 3]

We are seeking [amount] in funding to accelerate our growth and expand our team. I would love to schedule a call to discuss this opportunity in more detail.

Best regards,
[Your name]`,
        fundingStages: [
          { stage: 'Pre-seed', amount: '$50K - $500K', focus: 'MVP Development' },
          { stage: 'Seed', amount: '$500K - $2M', focus: 'Product-Market Fit' },
          { stage: 'Series A', amount: '$2M - $10M', focus: 'Scaling Operations' }
        ],
        pitchDeckOutline: [
          'Problem Statement',
          'Solution Overview',
          'Market Opportunity',
          'Business Model',
          'Traction & Metrics',
          'Team',
          'Financial Projections',
          'Funding Ask'
        ]
      });
    } catch (err) {
      setError('Failed to generate funding advice. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Funding Advisor
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Get personalized funding advice and investor recommendations for your startup
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
                  'Get Funding Advice'
                )}
              </button>
            </div>
          </form>
        </div>

        {advice && (
          <div className="mt-8 space-y-8">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Investors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advice.investors.map((investor, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900">{investor.name}</h3>
                      <p className="text-gray-600">Type: {investor.type}</p>
                      <p className="text-gray-600">Focus: {investor.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Funding Stages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {advice.fundingStages.map((stage, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900">{stage.stage}</h3>
                      <p className="text-gray-600">Amount: {stage.amount}</p>
                      <p className="text-gray-600">Focus: {stage.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pitch Deck Outline</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-decimal list-inside space-y-2">
                    {advice.pitchDeckOutline.map((section, index) => (
                      <li key={index} className="text-gray-600">{section}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Investor Email Template</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-gray-600 font-mono text-sm">
                    {advice.emailDraft}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FundingAdvisor; 