export default function Header(){

  const headerButtonClasses = "md:mx-12 sm:mx-6 text-zinc-600 hover:text-zinc-950"

  return (
    <div className="max-w-1280 box-border h-80 py-20">
      <header className="relative w-full h-12 px-44 my-auto z-10">
        <div id="intro" className="relative flex flex-col justify-between">
          <h1 className="text-2xl font-bold">
            Figure Toy Expert Since 1980
          </h1>
          <p className="w-1/2 my-4 pr-10 text-sm font-light">
            Step into our store and journey back to a simpler time. Our carefully curated selection of vintage and retro-inspired toys captivates both collectors and new fans.
          </p>
          <p className="flex content-start mt-4 mix-blend-overlay">
            <button className="h-7 w-28 bg-zinc-600 hover:bg-zinc-800 text-zinc-50 rounded-full duration-100">Shop All</button>
            <button className="w-24 text-zinc-500 hover:text-zinc-800 duration-100">Visit Us</button>
          </p>
        </div>
      </header>
      <section className="absolute -top-5 left-1/2 w-[32rem] h-[32rem] bg-white rounded-full bg-shop bg-center bg-cover z-0">
      </section>
    </div>
  )
}
