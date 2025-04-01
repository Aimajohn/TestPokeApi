import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaArrowCircleLeft } from "react-icons/fa"
import { PokemonT } from "@/lib/api"
import { GiBodyHeight } from "react-icons/gi"
import { FaWeightHanging } from "react-icons/fa6"
type Props = { detailedPokemon: PokemonT | null; isLoading: boolean }
import { typeColors } from "@/lib/api"
import { Badge } from "./ui/badge"
import { Skeleton } from "./ui/skeleton"
import SkeletonCard from "./SkeletonCard"
import { useState } from "react"

function PokemonCard({ detailedPokemon, isLoading }: Props) {
  const [isImgLoading, SetisImgLoading] = useState(false)

  if (!detailedPokemon || !detailedPokemon.name) {
    return (
      <div className="flex aspect-[3/4] h-auto w-[350px] items-center justify-center gap-2 rounded-md border-2 border-slate-300 bg-slate-50/30 px-6 py-4 shadow-sm">
        <b className="text-2xl text-blue-400">
          <FaArrowCircleLeft />
        </b>
        <span>
          {!detailedPokemon
            ? "Selecciona un Pokemon de la Lista"
            : "Lo siento hubo un error al cargar la información del Pokemon, intenta seleccionar otro."}{" "}
        </span>
      </div>
    )
  }
  return (
    <Card className="aspect-[3/4] h-auto w-[350px] border-2 border-slate-300 bg-slate-50/30">
      <SkeletonCard isLoading={isLoading} />
      {!isLoading && detailedPokemon.name && (
        <>
          <CardHeader>
            <CardTitle>{detailedPokemon.name.toUpperCase()}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2">
            <div className="relative col-span-2 mx-auto mb-4 size-44 overflow-hidden rounded-sm">
              {isImgLoading && (
                <Skeleton className={`absolute size-40 bg-slate-200`} />
              )}
              <img
                className={`size-44 drop-shadow-lg ${isImgLoading ? "opacity-0" : ""}`}
                src={detailedPokemon.sprites.front_default}
                onLoad={() => SetisImgLoading(false)}
              />
            </div>
            <p className="mx-auto flex min-w-[115px] items-center rounded-md bg-slate-200 px-3 py-2">
              <GiBodyHeight /> <b> Altura: </b> {detailedPokemon.height}
            </p>
            <p className="mx-auto flex min-w-[115px] items-center rounded-md bg-slate-200 px-3 py-2">
              <FaWeightHanging /> <b> Peso: </b> {detailedPokemon.weight}
            </p>
            <div className="col-span-2 px-3">
              <h4 className="mt-3 mb-2 font-semibold">Tipos:</h4>
              <div className="flex gap-2">
                {detailedPokemon.types.map(({ type }) => (
                  <Badge
                    key={type.name}
                    className={`${typeColors[type.name] || "bg-gray-400 text-slate-900"} `}
                    id={type.name}
                  >
                    {type.name.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  )
}

export default PokemonCard
