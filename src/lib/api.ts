import axios from "axios"

//Definir tipos para Typescript
export interface BaseApiT {
  name: string
  url: string
}
interface PokemonType {
  type: BaseApiT
}
interface PokemonSprites {
  back_default: string
  back_female: string | null
  back_shiny: string
  back_shiny_female: string | null
  front_default: string
  front_female: string | null
  front_shiny: string
  front_shiny_female: string | null
}

export interface PokemonT {
  name: string
  types: PokemonType[]
  weight: number
  height: number
  sprites: PokemonSprites
  abilities: BaseApiT[]
}

//Definir los colores para los tipos
export const typeColors: Record<string, string> = {
  normal: "bg-gray-400/50",
  fire: "bg-red-500/50",
  water: "bg-blue-500/50",
  electric: "bg-yellow-400/50",
  grass: "bg-green-500/50",
  ice: "bg-cyan-400/50",
  fighting: "bg-orange-600/50",
  poison: "bg-purple-500/50",
  ground: "bg-yellow-700/50",
  flying: "bg-indigo-400/50",
  psychic: "bg-pink-500/50",
  bug: "bg-lime-600/50",
  rock: "bg-yellow-600/50",
  ghost: "bg-purple-700/50",
  dragon: "bg-indigo-700/50",
  dark: "bg-gray-800/50",
  steel: "bg-gray-500/50",
  fairy: "bg-pink-300/50",
}

//Funciones principales de llamado a Pokeapi
export const getPokemonList = async (page: number = 0): Promise<BaseApiT[]> => {
  const miData = await axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: {
      limit: 10, // Cantidad de Pokémon
      offset: 10 * page, // Desde qué número empezar
    },
  })
  return miData.data.results
}

export const getPokemon = async (name: string): Promise<PokemonT> => {
  const miData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return miData.data
}
