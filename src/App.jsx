import TemperatureConverter from "./components/TemperatureConverter"
import bgImage from "./assets/fire-cold.svg"

export default function App() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Blur dinámico */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/50 z-0"></div>

      {/* Contenido principal */}
      <div className="z-10 flex flex-col items-center w-full px-4">
        <TemperatureConverter />

        {/* Footer con tu GitHub */}
 <footer className="mt-10 text-white text-center text-sm md:text-base font-light z-10">
  <p className="mb-1">
    Made with<span className="text-red-400">❤️</span> by{" "}
    <span className="text-lg font-semibold tracking-wide">
      <span className="text-red-500">Jacov</span>{" "}
      <span className="text-sky-400">Covarrubias</span>
    </span>
  </p>
  <div className="space-x-4 mt-1">
    <a
      href="https://github.com/jakoobo90"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-pink-300 transition"
    >
      GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/jacovrom"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-sky-300 transition"
    >
      LinkedIn
    </a>
  </div>
</footer>


      </div>
    </div>
  )
}
