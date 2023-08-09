import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return(
    <main className="w-full">
      <article
        className="w-full h-56 bg-top flex items-start justify-center bg-cover bg-no-repeat sm:h-72 lg:h-[36.64vw]"
        style={{ backgroundImage: "url('/homepage-banner.jpeg')" }}
      >
        <section className="w-full flex flex-col justify-between items-center gap-y-2 pl-12 pt-12 text-white text-center sm:pl-40 lg:pt-32 lg:gap-y-8 2xl:pt-52 2xl:gap-y-10">
          <h1 className="w-full text-xl font-bold tracking-wider sm:text-3xl lg:text-5xl 2xl:text-7xl">WELCOME TO DIDX</h1>
          <h2 className="w-full text-xs font-medium sm:text-lg lg:text-xl 2xl:text-2xl">Connecting the world, one country at a time!</h2>
          <Link
            href="/signup"
            className="self-center mt-6 px-4 py-2 bg-blue-600 text-xl rounded font-semibold transition-colors transition-transform hover:bg-white hover:text-blue-600 hover:scale-110 sm:text-2xl sm:px-6 sm:py-3 sm:mt-8 lg:rounded-lg"
          >
            Sign Up
          </Link>
        </section>
      </article>
    </main>
  )
}
