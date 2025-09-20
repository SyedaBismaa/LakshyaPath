import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <header className="bg-[#0a1a33] text-white px-8 py-10 rounded-b-2xl shadow-md">
        <h1 className="text-2xl font-semibold">
          Hi Nizam! Your Path to the Right Internship Starts Here 🚀
        </h1>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-white text-gray-800 px-5 py-4 rounded-xl shadow-md">
            <p className="text-sm font-medium">Readiness Score</p>
            <p className="text-2xl font-bold">72%</p>
          </div>
          <div className="bg-white text-gray-800 px-5 py-4 rounded-xl shadow-md">
            <p className="text-sm font-medium">Internship Matches</p>
            <p className="text-lg">SQL, Tableau</p>
          </div>
          <div className="bg-white text-gray-800 px-5 py-4 rounded-xl shadow-md">
            <span className="font-medium">💡 Need help? Ask me anything!</span>
          </div>
        </div>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white font-medium transition">
          View All Recommendations
        </button>
      </header>

      {/* Dashboard Cards */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {/* Internship Recommendations */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-4">Internship Recommendations</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>TCS</span> <span className="font-medium">92% Match</span>
            </li>
            <li className="flex justify-between">
              <span>Wipro</span> <span className="font-medium">88% Match</span>
            </li>
            <li className="flex justify-between">
              <span>Infosys</span> <span className="font-medium">85% Match</span>
            </li>
            <li className="flex justify-between">
              <span>InfyAce</span> <span className="font-medium">85% Match</span>
            </li>
          </ul>
        </div>

        {/* Readiness Score */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="font-semibold text-lg mb-4">Readiness Score & Skill Gap</h2>
          <div className="w-28 h-28 mx-auto rounded-full border-8 border-blue-500 flex items-center justify-center font-bold text-2xl">
            72%
          </div>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-white font-medium transition">
            Improve Skills
          </button>
        </div>

        {/* Roadmap & Courses */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-4">Roadmap & Courses</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {["SWAYAM", "Coursera", "YouTube", "Camosun"].map((c) => (
              <span
                key={c}
                className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
              >
                {c}
              </span>
            ))}
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition">
            Join More Groups
          </button>
        </div>

        {/* Community Groups */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-4">Community Groups</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Teknet Milaport</span>
            </li>
            <li className="flex justify-between">
              <span>CoBL Seafly</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-gray-500">7/5 roadmap steps completed ✅</p>
        </div>

        {/* AI Mentor Support */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-4">AI Mentor Support</h2>
          <p className="text-sm text-gray-600 mb-3">
            Lorem ipsum dummy text for mentor assistance. Get instant help and
            guidance on your learning path.
          </p>
          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium transition">
            Join More Groups
          </button>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-4">Progress Tracker (Gamified)</h2>
          <p className="text-sm mb-2">Beginner → Web Dev Wizard</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-yellow-500 h-3 rounded-full w-2/3"></div>
          </div>
          <div className="flex justify-between mt-3 text-xs text-gray-600">
            <span>Beginner</span>
            <span>Web Dev Wizard</span>
            <span>Achiever</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1a33] text-white px-6 py-4 flex justify-between items-center">
        <p className="text-sm">
          LakshyaPath – Guiding Students Towards Success with AI.
        </p>
        <p className="text-sm">© 2025 LakshyaPath</p>
      </footer>
    </div>
  );
};

export default HomePage;
