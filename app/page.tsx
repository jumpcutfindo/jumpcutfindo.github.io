import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="flex min-h-screen px-72">
      <div className="flex flex-col min-w-[40%] min-h-full my-32">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold text-blue-500">Daniel Hoe</h1>
          <p className="text-lg my-2 font-medium">Software Engineer at Visa</p>
          <p className="text-lg my-4 me-32 opacity-60 font-light">I develop applications and other interactive experiences for users worldwide.</p>
        </div>
        <div className="flex flex-row space-x-6 my-4">
          <a href="https://github.com/jumpcutfindo/" target="_blank" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
          <a href="https://www.linkedin.com/in/daniel-h-8892a3199" target="_blank" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-blue-600 min-w-[60%] min-h-full"></div>
    </main>
  )
}
