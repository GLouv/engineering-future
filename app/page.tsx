import Timeline from './components/Timeline';
import NewsletterSignup from './components/NewsletterSignup';
import DesignChallenge from './components/DesignChallenge';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            The Future of Civil Engineering
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Exploring how automation will transform the civil engineering industry over the next two decades
          </p>
        </div>
      </section>

      {/* Future Predictions Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            The Next 20 Years in Civil Engineering
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">2024-2030</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Advanced AI-powered design optimization and validation, reducing design time by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Widespread adoption of autonomous construction equipment for earthwork and material handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Real-time project monitoring using IoT sensors and digital twins for predictive maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Automated quality control using computer vision and AI inspection systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">2030-2040</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Fully automated construction sites with 80% reduction in manual labor requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Self-repairing infrastructure using smart materials and nano-technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>AI-driven urban planning with real-time adaptation to population needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Complete integration of robotics in construction processes with human oversight</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Work Evolution Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Evolution of Civil Engineering Work
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Project Planning & Design</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Engineers will focus on creative problem-solving while AI handles repetitive calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Virtual reality design reviews become standard practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Automated code compliance and optimization</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Site Management</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Remote site management through digital twins and IoT</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>AI-powered resource allocation and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Drone and robot fleet management becomes key skill</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Skills & Expertise</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Hybrid roles combining engineering with data science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Focus shifts to systems integration and oversight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Increased emphasis on sustainable and smart materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Challenge Game Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Experience the Future of Engineering
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Try our interactive challenge where you can solve real engineering problems with AI assistance, just like future civil engineers will do!
            </p>
          </div>
          <DesignChallenge />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16">
        <Timeline />
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Civil Engineering Automation Insights. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
