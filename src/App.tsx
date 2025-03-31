import { useEffect, useState } from "react"
import "./App.css"
import { getPokemonList } from "@/lib/api"
function App() {
  useEffect(() => {
    try {
      getPokemonList()
    } catch (error) {
      console.warn("upsie")
    }
  }, [])

  return (
    <main>
      <h2 className="text-blue-700">hola</h2>
    </main>
  )
}

export default App
