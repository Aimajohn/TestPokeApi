import axios from "axios"

export const getPokemonList = async (page: number = 0) => {
  const miData = await axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: {
      limit: 20, // Cantidad de Pokémon
      offset: 20 * page, // Desde qué número empezar
    },
  })
  console.log(miData.data)
}
