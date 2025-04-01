import { BaseApiT } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { getPokemon, PokemonT } from "@/lib/api"

type Props = {
  listaPokemon: BaseApiT[] | null
  setDetailedPokemon: React.Dispatch<React.SetStateAction<PokemonT | null>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function PokemonList({
  listaPokemon,
  setDetailedPokemon,
  setIsLoading,
}: Props) {
  const handlePokemonSelect = async (enlace: string) => {
    setIsLoading(true)
    const pokemonInfo = await getPokemon(enlace)
    setDetailedPokemon(pokemonInfo)
    setIsLoading(false)
    //Por si quieren probar el skeleton con calma

    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 500)
  }

  return (
    <div>
      {/* Caso Error */}
      {!listaPokemon && (
        <span>
          Lo siento, hubo un error. No pudimos obtener la lista de Pokémons.
        </span>
      )}
      {/* Caso Exito */}
      {listaPokemon && (
        <ul>
          {listaPokemon.map((pokemon) => (
            <li key={pokemon.name}>
              <Button
                onClick={() => handlePokemonSelect(pokemon.name)}
                variant="link"
                className="cursor-pointer"
              >
                {pokemon.name.toLocaleUpperCase()}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PokemonList
