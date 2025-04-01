type Props = {}

function Header({}: Props) {
  return (
    <header className="flex h-24 items-center bg-blue-700 px-12 text-2xl">
      <img
        className="size-20"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        alt=""
      />
      <h1 className="relative w-full font-semibold text-slate-200">
        Test PokeApi{" "}
        <span className="text-md absolute ml-2 block text-xs font-light text-slate-300">
          Hecho por John Rodriguez
        </span>
      </h1>
    </header>
  )
}

export default Header
