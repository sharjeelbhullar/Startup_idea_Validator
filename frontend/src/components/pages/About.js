import React from 'react';

const About = () => {
  const features = [
    {
      title: 'AI-Powered Validation',
      description: 'Our advanced AI algorithms analyze market trends, competition, and potential to validate your startup idea.',
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Business Plan Generation',
      description: 'Get a comprehensive business plan tailored to your startup idea, including market analysis and financial projections.',
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'MVP Development Guide',
      description: 'Step-by-step guidance for building your Minimum Viable Product with technical specifications and best practices.',
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Funding Strategy',
      description: 'Personalized funding advice and investor recommendations to help you secure the right investment.',
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Startup Idea Validator
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We help entrepreneurs validate their startup ideas and build successful businesses using AI-powered tools and expert guidance.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We believe that every great startup begins with a validated idea. Our mission is to empower entrepreneurs with the tools and insights they need to turn their ideas into successful businesses.
          </p>
          <p className="text-gray-600">
            By combining artificial intelligence with industry expertise, we provide comprehensive validation and guidance throughout your startup journey, from idea conception to market launch.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-indigo-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600">10+ years of experience in startup consulting and AI development.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-indigo-600 mb-2">Head of Product</p>
              <p className="text-gray-600">Expert in product development and market analysis.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Mike Johnson</h3>
              <p className="text-indigo-600 mb-2">Lead Developer</p>
              <p className="text-gray-600">Full-stack developer with expertise in AI and machine learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 