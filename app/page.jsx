import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faEarthAmerica, faPhone, faMoneyBill, faNetworkWired, faDollar } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return(
    <main className="w-full">
      <article
        className="w-full h-56 bg-top flex items-start justify-center bg-cover bg-no-repeat sm:h-72 lg:h-[36.64vw]"
        style={{ backgroundImage: "url('/homepage-banner.webp')" }}
      >
        <section className="w-full flex flex-col justify-between items-center gap-y-2 pl-12 pt-12 text-white text-center sm:pl-40 lg:pt-32 lg:gap-y-8 2xl:pt-52 2xl:gap-y-10">
          <h1 className="w-full text-xl font-bold tracking-wider sm:text-3xl lg:text-5xl 2xl:text-7xl">WELCOME TO DIDX</h1>
          <h2 className="w-full text-xs font-medium sm:text-lg lg:text-xl 2xl:text-2xl">Connecting the world, one country at a time!</h2>
          <Link
            href="/signup"
            className="self-center mt-6 px-4 py-2 bg-blue-600 text-xl rounded font-semibold transition-all hover:bg-white hover:text-blue-600 hover:scale-110 sm:text-2xl sm:px-6 sm:py-3 sm:mt-8 lg:rounded-lg"
          >
            Sign Up
          </Link>
        </section>
      </article>

      <section>
        <ul className="flex flex-col items-start justify-evenly gap-y-10 py-16 px-6 text-xl font-semibold text-neutral-700 xl:flex-row xl:flex-wrap xl:gap-20 xl:justify-around">
          <li><p><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8" icon={faUsers} /> 25,000 Members</p></li>
          <li><p><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8" icon={faEarthAmerica} /> 90+ Nations</p></li>
          <li><p><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8" icon={faPhone} /> 17+ Million Numbers</p></li>
          <li><p><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8" icon={faMoneyBill} /> No Membership Fee</p></li>
          <li><p><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8" icon={faNetworkWired} /> Free API</p></li>
          <li><p><FontAwesomeIcon className="text-blue-500 text-2xl mx-6 sm:text-3xl sm:mx-10" icon={faDollar} /> Low Monthly Rates</p></li>
        </ul>
      </section>
    </main>
  )
}
