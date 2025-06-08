import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* EcoPower */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">EcoPower</h3>
              <p className="text-gray-400 mb-4">
              <strong>1st Place Boeing 2024 AI / ML Innovation Challenge </strong>
              Trained and presented ML models—including Random Forest, XGBoost, and Ridge Regression—to Boeing engineers to optimize aircraft APU usage, projecting a 10% reduction in ground operations fuel consumption.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ML", "AI", "Python", "Competition"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center gap-6 my-4">
                <a
                  href="https://aryanpalave.github.io/ecopower-ml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
                <a
                  href="https://drive.google.com/file/d/1zS3AXVCiNf9riTWFRwousRTuz1KAc8i4/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Report →
                </a>
              </div>

            </div>

            {/* JewelTalk */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">JewelTalk (Gemini Powered Chatbot)</h3>
              <p className="text-gray-400 mb-4">
                Interactive Python GenAI chatbot for mother’s jewelry store using the Gemini API 
                (Vertex AI) to translate natural language questions into executable SQL queries for
                 Google BigQuery and summarize the results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Gemini API", "BigQuery", "Vertex AI"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://sql-talk-181946355304.us-central1.run.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* SubletCentral */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">SubletCentral</h3>
              <p className="text-gray-400 mb-4">
                A central housing marketplace that allows America’s 21M college students to sublease apartments they aren’t using for the summer created using React, HTML, CSS, JavaScript and FireBase Realtime DB.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "HTML", "CSS", "JavaScript", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://subletcentral.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* TownSquare */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">TownSquare</h3>
              <p className="text-gray-400 mb-4">
                <strong>Winner of Best Impact Award at WINFO Club’s 12th Annual Hackathon</strong> (80+ teams).
                Designed app that provides details on relevant bills, upcoming voting sessions, and 
                volunteer opportunities according to user interests. 
                
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Civic Tech", "Hackathon", "Design", "React Native"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://www.figma.com/design/dSJVvkKD3uFfBedq4wxNw4/TownSquare?node-id=226-2351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
          <a
            href="mailto:aryanpalave108@gmail.com"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
