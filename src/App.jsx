import resumePDF from "./assets/resume.pdf"

function App() {

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = resumePDF
    link.download = "Lokesh_Kari_Resume.pdf"
    link.click()
  }

  return (
    <div className="bg-black text-white min-h-screen p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Lokesh Kari
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Full Stack Developer • AI Projects
        </p>

        <div className="flex flex-wrap gap-4 mb-16">

          <button
            onClick={downloadResume}
            className="bg-blue-600 px-6 py-3 rounded-xl"
          >
            Download Resume
          </button>

          <a
            href="https://www.linkedin.com/in/lokesh-kari-400b59227/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-3 rounded-xl"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ironfistloki45"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-3 rounded-xl"
          >
            GitHub
          </a>

        </div>

        <div className="bg-[#111827] p-8 rounded-2xl mb-10">

          <h2 className="text-3xl font-bold mb-4">
            ClaimSense AI
          </h2>

          <p className="text-gray-400 mb-6">
            AI-powered insurance eligibility platform using React and FastAPI.
          </p>

          <a
            href="https://portfolio-website-wkkmjxwf6-ironfistloki45s-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black px-6 py-3 rounded-xl inline-block"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  )
}

export default App