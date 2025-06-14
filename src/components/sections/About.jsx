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
            An ambitious, hands-on, project-driven Informatics- Software Engineering student at the University of Washington-Seattle, 
            deeply immersed in app development, data science, and machine learning. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-6">
          <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <p className="text-gray-300 mb-6">
            <strong> B.S. in Informatics- Data Science / Software Engineering </strong> 
            <p>University of Washington (2022-2026)</p>
            </p>
            <p className="text-gray-300 mb-6">
            <strong> Relevant Coursework: </strong>  Data Structures and Algorithms, Machine Learning, Linear Algebra, Artificial Intelligence, Advanced Python, Database Systems, Statistical Methods, Computing and Systems, Computer Programming (I, II), Bash/C/C++
            </p>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
          <p className="text-gray-300 mb-6">
            </p>
            
            <div>
            <h4 className="font-semibold text-lg">Amazon Web Services</h4>
            <div className="flex justify-between">
              <h4 className="font-semibold">Cloud Engineer Intern</h4>
              <h4 className="text-sm">(Jun – Aug 2024)</h4>
            </div>

            <ul className="list-disc ml-6 text-gray-300">
              <li>
                Developed AI chatbot tool using JavaScript, React, Python, and the Claude 3 Sonnet API to take log files as input and diagnose bugs for EC2 instance failures based on internal product documentation, reducing diagnosis time by 7%.
              </li>
              <li>
                Architected 4 HAWA cloud solutions using AWS products such as S3, EC2, Lambda, Athena, and QuickSight.
              </li>
            </ul>
          </div>

          <br></br>

          <div>
            <h4 className="font-semibold text-lg">Associated Students of the University of Washington</h4>
            <div className="flex justify-between">
              <h4 className="font-semibold">Front End Web Developer (Part Time)</h4>
              <h4 className="text-sm">(Apr 2024 – Apr 2025)</h4>
            </div>

            <ul className="list-disc ml-6 text-gray-300">
              <li>
                Prototyped and built the website and database infrastructure using Figma, React, HTML, JavaScript, and CSS with a SQL database to support the organization’s $1.5M annual budget for event operations.
              </li>
            </ul>
          </div>


          <br></br>
          <div>
            <h4 className="font-semibold text-lg">QuickSell</h4>
            <div className="flex justify-between">
              <h4 className="font-semibold">Software Engineer Intern</h4>
              <h4 className="text-sm">(Jun – Aug 2023)</h4>
            </div>

            <ul className="list-disc ml-6 text-gray-300">
              <li>
                Produced a key performance indicators (KPI) dashboard using Python, highlighting 30+ business analytics metrics, including growth, vendor churn rate, and average customer lifespan for app with 1M+ users. 
              </li>
              <li>
              Developed a multiclass text classification model to identify the correct product to add to cart based on natural language descriptions, achieving 97\% accuracy across N classes using Scikit-learn and Python              </li>
            </ul>
          </div>

            <br />
          
          <div>
            <h4 className="font-semibold text-lg">University of Washington</h4>
            <div className="flex justify-between">
              <h4 className="font-semibold">Quantum Machine Learning Research Assistant</h4>
              <h4 className="text-sm">(Jan 2023 – Jan 2024)</h4>
            </div>

            <ul className="list-disc ml-6 text-gray-300">
              <li>
                Designed and compiled 40+ quantum circuits using Qiskit for the Scaled QUantum IDentifier (SQUID), an open-source framework for exploring hybrid Quantum-Classical algorithms for classification problems under Professor Hsu.
              </li>
            </ul>
          </div>

          <br />

          <div>
            <h4 className="font-semibold text-lg">Bloomz</h4>
            <div className="flex justify-between">
              <h4 className="font-semibold">Software Engineer Intern</h4>
              <h4 className="text-sm">(Jun 2022 – Aug 2022)</h4>
            </div>

            <ul className="list-disc ml-6 text-gray-300">
              <li>
              Collaborated with company leadership at a startup (1M+ users) to build functional prototypes of client dashboard,
              parent-teacher communication feature, and internal admin portal using Python, React.js, MySQL, and AWS
              </li>
            </ul>
          </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
