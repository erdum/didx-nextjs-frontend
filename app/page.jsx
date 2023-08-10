import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faEarthAmerica, faPhone, faMoneyBill, faNetworkWired, faDollar, faMessage } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return(
    <main className="w-full">
      <section
        className="w-full h-56 bg-top flex items-start justify-center bg-cover bg-no-repeat sm:h-72 lg:h-[36.64vw]"
        style={{ backgroundImage: "url('/homepage-banner.webp')" }}
      >
        <section className="w-full flex flex-col justify-between items-center gap-y-2 pl-12 pt-12 text-white text-center sm:pl-40 lg:pt-32 lg:gap-y-8 2xl:pt-52 2xl:gap-y-10">
          <h1 className="w-full text-xl font-bold tracking-wider sm:text-3xl lg:text-5xl 2xl:text-7xl">WELCOME TO DIDX</h1>
          <h2 className="w-full text-xs font-medium sm:text-lg lg:text-xl 2xl:text-2xl">Connecting the world, one country at a time!</h2>
          <div className="flex flex-col gap-6 mt-6 xl:flex-row">
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-xl rounded font-semibold transition-all hover:bg-zinc-200 hover:text-neutral-600 hover:scale-110 sm:text-2xl sm:px-6 sm:py-3 lg:rounded-lg"
            >
              Sign Up
            </Link>
            <Link
              href="/signup"
              className="hidden px-4 py-2 bg-white text-blue-600 text-xl rounded font-semibold transition-all hover:bg-zinc-200 hover:text-neutral-600 hover:scale-110 sm:text-2xl sm:px-6 sm:py-3 lg:rounded-lg xl:block"
            >
              Talk to an Expert
            </Link>
          </div>
        </section>
      </section>

      <section>
        <ul className="flex flex-col items-start justify-evenly gap-y-10 py-16 px-6 text-xl font-semibold text-neutral-700 xl:flex-row xl:flex-wrap xl:gap-20 xl:justify-around xl:px-12">
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8 xl:mx-0" icon={faUsers} /> 25,000 Members</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8 xl:mx-0" icon={faEarthAmerica} /> 90+ Nations</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8 xl:mx-0" icon={faPhone} /> 17+ Million Numbers</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8 xl:mx-0" icon={faMoneyBill} /> No Membership Fee</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:text-3xl sm:mx-8 xl:mx-0" icon={faNetworkWired} /> Free API</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-6 sm:text-3xl sm:mx-10 xl:mx-0" icon={faDollar} /> Low Monthly Rates</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-5 sm:text-3xl sm:mx-9 xl:mx-0" icon={faMessage} /> Inbound Short Code</p></li>
        </ul>
      </section>
    </main>
  )
}
