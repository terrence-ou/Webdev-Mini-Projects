export default function Header(){

  const headerButtonClasses = "md:mx-12 sm:mx-6 text-zinc-600 hover:text-zinc-950"

  return (
    <div className="max-w-1280">
      <header className="relative w-full h-12 px-44 z-10">
        <div className="relative h-32 my-20 mix-blend-overlay">
          <div id="intro" className="relative flex flex-col justify-between">
            <h1 className="text-2xl font-bold">
              Figure Toy Expert Since 1980
            </h1>
            <p className="w-1/2 my-4 pr-10 text-sm font-light">
              Step into our store and journey back to a simpler time. Our carefully curated selection of vintage and retro-inspired toys captivates both collectors and new fans.
            </p>
            <p className="flex content-start mt-4 mix-blend-overlay">
              <button className="h-7 w-28 bg-zinc-600 hover:bg-zinc-800 text-zinc-50 rounded-full">Shop All</button>
              <button className="w-24 text-zinc-500 hover:text-zinc-800">Visit Us</button>
            </p>
          </div>
        </div>
      </header>
      <section className="absolute -top-5 left-1/2 w-[32rem] h-[32rem] bg-white rounded-full bg-shop bg-center bg-cover z-0">
      </section>
    </div>
  )
}
