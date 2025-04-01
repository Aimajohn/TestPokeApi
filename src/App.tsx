import { useEffect, useState } from "react"
import "./App.css"
import { getPokemonList, PokemonT, BaseApiT } from "@/lib/api"

import PokemonCard from "@/components/PokemonCard"

import PokemonList from "./components/PokemonList"
import Header from "./components/Header"

function App() {
  const [listaPokemon, setListaPokemon] = useState<BaseApiT[] | null>(null)
  //Actualizar la carta de Pokemon seleccionado
  const [detailedPokemon, setDetailedPokemon] = useState<PokemonT | null>(null)
  //Para llevar el estado de carga de los llamados a api
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    //Aqui se llama para la obtener la lista principal
    try {
      const getInfo = async () => {
        const tempList = await getPokemonList()
        setListaPokemon(tempList)
      }
      getInfo()
    } catch (error) {
      setListaPokemon(null)
      console.warn("Hubo un error al obtener la Lista de Pokemons", error)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="mt-12 px-12">
        <h1 className="mx-[10%] my-6 text-4xl font-semibold text-slate-800">
          Lista 10 Pokemons
        </h1>
        <div className="mx-auto grid w-4/5 grid-cols-2">
          <PokemonList
            setIsLoading={setIsLoading}
            setDetailedPokemon={setDetailedPokemon}
            listaPokemon={listaPokemon}
          />
          <PokemonCard
            isLoading={isLoading}
            detailedPokemon={detailedPokemon}
          />
        </div>
      </main>
    </>
  )
}

export default App
