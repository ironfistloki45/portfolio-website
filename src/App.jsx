import React from "react"

function App() {

  const openGithub = () => {
    window.open("https://github.com/ironfistloki45", "_blank")
  }

  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/lokesh-kari-400b59227/",
      "_blank"
    )
  }

  const openProject = () => {
  window.open(
   "https://insurance-eligibility-ai.vercel.app/"
  )
}

  const downloadResume = () => {

    const link = document.createElement("a")

    link.href = "/resume.pdf"

    link.setAttribute(
      "download",
      "Lokesh_Kari_Resume.pdf"
    )

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
  }
  const scrollProjects = () => {

  const section = document.getElementById("projects")

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    })
  }

}
  return (

    <div className="bg-[#020617] text-white min-h-screen">

      {/* HERO SECTION */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-blue-400 mb-4 text-lg">
              Full Stack Developer • AI Projects
            </p>

            <h1 className="text-6xl font-bold mb-6">
              Lokesh <span className="text-blue-500">Kari</span>
            </h1>

            <p className="text-gray-400 text-lg leading-9 mb-8">
              Passionate developer focused on building modern full-stack web
              applications, AI-powered systems, and responsive user experiences
              using React, FastAPI, JavaScript, Python, and cloud technologies.
            </p>

            <div className="flex gap-4 flex-wrap">

              <button
                onClick={scrollProjects}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                View Projects
              </button>

              <button
                onClick={downloadResume}
                className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                Download Resume
              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-7xl font-bold shadow-2xl">
              LK
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="border-t border-gray-800">

        <div className="max-w-6xl mx-auto px-8 py-24">

          <h2 className="text-5xl font-bold mb-12">
            About Me
          </h2>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-10">

            <p className="text-gray-300 text-lg leading-10">
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

        <div className="max-w-6xl mx-auto px-8 py-24">

          <h2 className="text-5xl font-bold mb-12">
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
                className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 text-center font-semibold hover:border-blue-500 hover:-translate-y-1 transition duration-300"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects">

        <div className="max-w-6xl mx-auto px-8 py-24">

          <h2 className="text-5xl font-bold mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* PROJECT 1 */}

            <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300">

              <div className="flex justify-between items-center mb-6">

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

                {["React", "FastAPI", "Python", "Tailwind", "OCR"].map((tech) => (

                  <span
                    key={tech}
                    className="bg-[#1e293b] px-4 py-2 rounded-xl text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-4">

                <button
                  onClick={openProject}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition duration-300"
                >
                  Live Demo
                </button>

                <button
                  onClick={openGithub}
                  className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-xl transition duration-300"
                >
                  GitHub
                </button>

              </div>

            </div>

            {/* PROJECT 2 */}

            <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">

              <div className="flex justify-between items-center mb-6">

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
                    className="bg-[#1e293b] px-4 py-2 rounded-xl text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-4">

                <button
                  onClick={openProject}
                  className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl transition duration-300"
                >
                  Live Demo
                </button>

                <button
                  onClick={openGithub}
                  className="border border-gray-700 hover:border-cyan-500 px-6 py-3 rounded-xl transition duration-300"
                >
                  GitHub
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="border-t border-gray-800">

        <div className="max-w-4xl mx-auto px-8 py-24 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Open to internships, collaborations, and software engineering opportunities.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <button
              onClick={() =>
                window.location.href = "mailto:karilokesh09692@email.com"
              }
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition duration-300"
            >
              Email Me
            </button>

            <button
              onClick={openLinkedin}
              className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl transition duration-300"
            >
              LinkedIn
            </button>

            <button
              onClick={openGithub}
              className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl transition duration-300"
            >
              GitHub
            </button>

          </div>

        </div>

      </section>

    </div>

  )

}

export default App