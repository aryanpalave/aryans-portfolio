import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "CSS",
    "UI/UX",
    "Figma",
    "HTML"
  ];

  const backendSkills = ["Python", "AWS", "MongoDB", "Java", "R", "PHP", "C++"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-6">
            <p className="text-gray-300 mb-6">
              An ambitious, hands-on, project-driven Informatics – Software Engineering student at the University of Washington-Seattle, deeply immersed in app development, data science, and machine learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-6">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <p className="text-gray-300 mb-6">
              <strong>B.S. in Informatics – Data Science / Software Engineering</strong>
              <p>University of Washington</p>
            </p>

            <p className="text-gray-300 mb-6">
              <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Machine Learning, Linear Algebra, Artificial Intelligence, Advanced Python, Database Systems, Statistical Methods, Computing and Systems, Computer Programming (I, II), Bash/C/C++
            </p>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

            {/* Deloitte – Most Recent */}
            <div>
              <h4 className="font-semibold text-lg">Deloitte</h4>
              <div className="flex justify-between">
                <h4 className="font-semibold">Software Engineer Intern</h4>
                <h4 className="text-sm">(Jun 2025 – Aug 2025)</h4>
              </div>

              <ul className="list-disc ml-6 text-gray-300">
                <li>
                  Built and deployed a Retrieval-Augmented Generation (RAG) assistant for U.S. Bank’s financial advisory teams using Python, LangChain, Azure OpenAI, and Pinecone; cut policy/product lookup time by 40% and increased response accuracy by 22%.
                </li>
                <li>
                  Developed a real-time fraud detection pipeline trained on 5M+ transactions in Python, achieving 94% precision and reducing false positives by 18% using supervised models (XGBoost, Random Forest) and unsupervised algorithms (Autoencoders, Isolation Forest).
                </li>
              </ul>
            </div>

            <br />

            {/* AWS */}
            <div>
              <h4 className="font-semibold text-lg">Amazon Web Services</h4>
              <div className="flex justify-between">
                <h4 className="font-semibold">Cloud Engineer Intern</h4>
                <h4 className="text-sm">(Jun 2024 – Aug 2024)</h4>
              </div>

              <ul className="list-disc ml-6 text-gray-300">
                <li>
                  Developed an AI chatbot tool using JavaScript, React, Python, and the Claude 3 Sonnet API to ingest log files and generate failure summaries for AWS EC2 instances, reducing diagnosis time by 14%.
                </li>
                <li>
                  Architected and presented 4 cloud solutions using AWS S3, Lambda, Athena, and QuickSight (stress-tested for 10M+ records & &lt;1s latency).
                </li>
              </ul>
            </div>

            <br />

            {/* ASUW */}
            <div>
              <h4 className="font-semibold text-lg">Associated Students of the University of Washington</h4>
              <div className="flex justify-between">
                <h4 className="font-semibold">Front End Web Developer (Part Time)</h4>
                <h4 className="text-sm">(Apr 2024 – Apr 2025)</h4>
              </div>

              <ul className="list-disc ml-6 text-gray-300">
                <li>
                  Prototyped and built the website and SQL-backed database infrastructure using Figma, React, HTML, JavaScript, and CSS to support the organization’s $1.5M annual event operations budget.
                </li>
              </ul>
            </div>

            <br />

            {/* Quantum ML Research */}
            <div>
              <h4 className="font-semibold text-lg">University of Washington</h4>
              <div className="flex justify-between">
                <h4 className="font-semibold">Quantum Machine Learning Research Assistant</h4>
                <h4 className="text-sm">(Jan 2023 – Jan 2024)</h4>
              </div>

              <ul className="list-disc ml-6 text-gray-300">
                <li>
                  Compiled 40+ quantum circuits using Qiskit for the Scaled QUantum IDentifier (SQUID), reducing MNIST classification time by 17%; results included in a research paper under Professor Hsu.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
