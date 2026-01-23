export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF0DD] px-6 py-10 relative overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#E2A16F]">HomeLab</h1>
        <button className="px-4 py-2 bg-[#86B0BD] text-white rounded-lg shadow hover:bg-[#7299A6] transition">
          Login
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="mt-20 text-center max-w-4xl mx-auto">
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#E2A16F] animate-title">
          Explore Science With  
          <span className="block mt-2 text-[#86B0BD] animate-fade-up">
            Virtual Experiments
          </span>
        </h1>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-5 animate-fade-up">
          A friendly and interactive virtual science lab built for students. 
          Perform safe chemistry & physics experiments right from your browser.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-6 animate-fade-up">
          <button className="px-7 py-3 bg-[#86B0BD] text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-[#7299A6] transition">
            Start Exploring
          </button>

          <button className="px-7 py-3 border border-[#E2A16F] text-[#E2A16F] rounded-xl text-lg font-semibold hover:bg-[#E2A16F] hover:text-white transition">
            View Experiments
          </button>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition animate-card">
          <div className="w-14 h-14 bg-[#E2A16F] bg-opacity-30 rounded-full mx-auto flex items-center justify-center mb-4">
            ⚗️
          </div>
          <h3 className="text-xl font-bold text-[#E2A16F] mb-2">Chemistry Labs</h3>
          <p className="text-gray-600 text-sm">
            Mix solutions, perform titrations, and learn safely with interactive simulations.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition animate-card delay-2">
          <div className="w-14 h-14 bg-[#86B0BD] bg-opacity-30 rounded-full mx-auto flex items-center justify-center mb-4">
            🔬
          </div>
          <h3 className="text-xl font-bold text-[#86B0BD] mb-2">Physics Experiments</h3>
          <p className="text-gray-600 text-sm">
            Explore motion, energy, optics, and more using real-time demos and tools.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition animate-card delay-4">
          <div className="w-14 h-14 bg-[#D1D3D4] bg-opacity-50 rounded-full mx-auto flex items-center justify-center mb-4">
            📚
          </div>
          <h3 className="text-xl font-bold text-[#D1D3D4] mb-2">Step-by-Step Learning</h3>
          <p className="text-gray-600 text-sm">
            Each experiment includes theory, steps, observations, and results.
          </p>
        </div>

      </section>

      {/* FLOATING COLOR SHAPES */}
      <div className="shape bg-[#E2A16F] opacity-20 w-32 h-32 top-20 left-10"></div>
      <div className="shape bg-[#86B0BD] opacity-20 w-40 h-40 bottom-24 right-10"></div>
      <div className="shape bg-[#D1D3D4] opacity-20 w-28 h-28 top-1/2 right-1/4"></div>

    </div>
  );
}
