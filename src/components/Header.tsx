type Props = {}

function Header({}: Props) {
  return (
    <header className="flex h-24 items-center bg-blue-700 px-12 text-2xl">
      <img
        className="size-20"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        alt=""
      />
      <h1 className="font-semibold text-slate-200">Test PokeApi</h1>
    </header>
  )
}

export default Header
