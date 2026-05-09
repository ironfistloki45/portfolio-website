import resumePDF from "./assets/resume.pdf"

function App() {

  const scrollProjects = () => {
    const section = document.getElementById("projects")

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  const downloadResume = () => {
    const link = document.createElement("a")

    link.href = resumePDF
    link.download = "Lokesh_Kari_Resume.pdf"

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
  }

  return (
    <div className="bg-[#020817] text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="text-blue-400 mb-4 text-lg">
              Full Stack Developer • AI Projects
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Lokesh <span className="text-blue-500">Kari</span>
            </h1>

            <p className="text-gray-400 text-lg leading-9 mb-8">
              Passionate developer focused on building modern full-stack web
              applications, AI-powered systems, and responsive user experiences
              using React, FastAPI, JavaScript, Python, and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={scrollProjects}
                className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl font-semibold"
              >
                View Projects
              </button>

              <button
                onClick={downloadResume}
                className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition px-7 py-4 rounded-xl font-semibold"
              >
                Download Resume
              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-2xl">
              <span className="text-7xl font-bold">LK</span>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="border-t border-gray-800">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-5xl font-bold mb-12">
            About Me
          </h2>

          <div className="bg-[#0b1733] border border-gray-800 rounded-3xl p-10">

            <p className="text-gray-300 text-lg leading-9">
              I am a software developer passionate about building scalable web
              applications, AI-powered platforms, and user-focused interfaces.
              I enjoy solving real-world problems using modern technologies and
              continuously learning new tools in full-stack and AI development.
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section>

        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-5xl font-bold mb-14">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "React",
              "JavaScript",
              "Python",
              "FastAPI",
              "Tailwind CSS",
              "HTML/CSS",
              "Git & GitHub",
              "SQL",
            ].map((skill) => (

              <div
                key={skill}
                className="bg-[#0b1733] border border-gray-800 rounded-2xl p-8 text-center font-semibold hover:border-blue-500 hover:-translate-y-1 transition"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-gray-800"
      >

        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-5xl font-bold mb-14">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* PROJECT 1 */}
            <div className="bg-[#0b1733] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

              <div className="flex justify-between items-center mb-8">

                <h3 className="text-3xl font-bold">
                  ClaimSense AI
                </h3>

                <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
                  AI Project
                </span>

              </div>

              <p className="text-gray-400 leading-8 mb-8">
                Built a full-stack insurance eligibility platform using React
                and FastAPI. Features include OCR-based insurance card upload,
                authentication, dashboard analytics, and eligibility
                verification workflows.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {["React", "FastAPI", "Python", "Tailwind", "OCR"].map(
                  (tech) => (

                    <span
                      key={tech}
                      className="bg-gray-800 px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>

                  )
                )}

              </div>

              <div className="flex gap-4">

                <a
                  href="https://portfolio-website-8571gs1py-ironfistloki45s-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/ironfistloki45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-700 hover:border-blue-500 transition px-6 py-3 rounded-xl font-semibold"
                >
                  GitHub
                </a>

              </div>

            </div>

            {/* PROJECT 2 */}
            <div className="bg-[#0b1733] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

              <div className="flex justify-between items-center mb-8">

                <h3 className="text-3xl font-bold">
                  Smart Dashboard UI
                </h3>

                <span className="bg-cyan-500 px-4 py-2 rounded-full text-sm">
                  Frontend
                </span>

              </div>

              <p className="text-gray-400 leading-8 mb-8">
                Designed and developed responsive dashboard interfaces using
                modern UI/UX principles, reusable React components, Tailwind
                CSS, and API integrations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {["React", "Tailwind", "UI/UX", "API"].map((tech) => (

                  <span
                    key={tech}
                    className="bg-gray-800 px-4 py-2 rounded-xl text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href="https://portfolio-website-8571gs1py-ironfistloki45s-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-semibold"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/ironfistloki45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-700 hover:border-cyan-400 transition px-6 py-3 rounded-xl font-semibold"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="border-t border-gray-800">

        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Open to internships, collaborations, and software engineering opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="mailto:karilokesh09692@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/lokesh-kari-400b59227/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-blue-500 transition px-8 py-4 rounded-xl font-semibold"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ironfistloki45"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-blue-500 transition px-8 py-4 rounded-xl font-semibold"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App