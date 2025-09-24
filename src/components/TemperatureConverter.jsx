import { useState } from "react"

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("")
  const [kelvin, setKelvin] = useState(null)
  const [fahrenheit, setFahrenheit] = useState(null)
  const [error, setError] = useState("")

  const convertTemperatures = () => {
    const value = parseFloat(celsius)

    if (isNaN(value)) {
      setError("Por favor, ingresa un número válido ❌")
      setKelvin(null)
      setFahrenheit(null)
      return
    }

    const kelvinResult = value + 273.15
    const fahrenheitResult = (value * 9) / 5 + 32

    setKelvin(kelvinResult.toFixed(2))
    setFahrenheit(fahrenheitResult.toFixed(2))
    setError("")
  }

  return (
   <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg text-center w-full max-w-md border border-white/20 mx-4">

     <h1 className="text-xl md:text-2xl font-bold text-white mb-4">
  Conversor de Temperatura 🌡️
</h1>


      <input
        type="text"
        placeholder="Ingresa grados Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        className="w-full p-2 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

<button
  onClick={convertTemperatures}
  className="mt-4 w-full py-2 text-sm md:text-base rounded text-white font-bold bg-gradient-to-r from-red-500 via-yellow-300 to-blue-500 bg-[length:200%_200%] animate-gradient-x hover:brightness-110 transition duration-300"
>
  🔥❄️ Convertir
</button>



      {error && <p className="text-red-400 mt-4">{error}</p>}

      {kelvin && fahrenheit && (
        <div className="mt-6 text-white space-y-2">
          <p>🔥 Fahrenheit: <strong>{fahrenheit}°F</strong></p>
          <p>❄️ Kelvin: <strong>{kelvin}K</strong></p>
        </div>
      )}
    </div>
  )
}
