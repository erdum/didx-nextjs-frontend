import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsers,
  faEarthAmerica,
  faPhone,
  faMoneyBill,
  faNetworkWired,
  faDollar,
  faMessage,
  faCircleCheck,
  faTrophy,
  faThumbsUp,
  faCalendar,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

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
              className="px-4 py-2 bg-blue-600 text-xl rounded font-medium transition-all hover:bg-zinc-200 hover:text-neutral-600 hover:scale-110 sm:text-2xl sm:px-6 sm:py-3 lg:rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </section>

      <section>
        <ul className="flex flex-col items-start justify-evenly gap-y-10 py-10 px-6 text-base font-semibold text-neutral-700 xl:flex-row xl:flex-wrap xl:gap-20 xl:justify-around xl:px-12">
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:mx-8 xl:mx-0" icon={faUsers} /> 25,000 Members</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:mx-8 xl:mx-0" icon={faEarthAmerica} /> 90+ Nations</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:mx-8 xl:mx-0" icon={faPhone} /> 17+ Million Numbers</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:mx-8 xl:mx-0" icon={faMoneyBill} /> No Membership Fee</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-4 sm:mx-8 xl:mx-0" icon={faNetworkWired} /> Free API</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-6 sm:mx-10 xl:mx-0" icon={faDollar} /> Low Monthly Rates</p></li>
          <li><p className="flex items-center xl:gap-x-4"><FontAwesomeIcon className="text-blue-500 text-2xl mx-5 sm:mx-9 xl:mx-0" icon={faMessage} /> Short Code Inbound</p></li>
        </ul>
      </section>

      <hr className="w-11/12 mx-auto h-px bg-neutral-300 border-0"/>

      <section className="flex flex-col gap-y-8 py-4 px-6 mt-6 sm:px-16 xl:px-0 xl:flex-row xl:gap-x-20 xl:justify-center">
        <iframe src="https://www.youtube.com/embed/SuhXEqRFZIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="w-full aspect-video xl:w-5/12 2xl:w-4/12"></iframe>
        <section className="xl:w-5/12">
          <h2 className="text-2xl font-medium mb-6 sm:mb-12 sm:text-3xl">Features for DID Buyers</h2>
          <section className="text-neutral-700 flex flex-col gap-y-2 sm:flex-wrap sm:h-56">
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Free API</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> No membership fee</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Money back gurantee</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Money back gurantee</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Low monthly rates</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Buy numbers for your VoIP service</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Be a global service provider instantly</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Automatic DID provisioning</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> 36 hours free DID trial</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Phone numbers from 1000s of cities worlwide</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Regulatory managment</p>
          </section>
        </section>
      </section>

      <hr className="w-11/12 mx-auto h-px bg-neutral-300 border-0"/>

      <section className="flex flex-col gap-y-8 py-4 px-6 mt-6 sm:px-16 xl:px-0 xl:flex-row xl:gap-x-20 xl:justify-center">
        <section className="xl:w-5/12">
          <h2 className="text-2xl font-medium mb-6 sm:mb-12 sm:text-3xl">Features for DID Sellers</h2>
          <section className="text-neutral-700 flex flex-col gap-y-2 sm:flex-wrap sm:h-56">
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Free API</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> No membership fee</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> No listing charges</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> We do your customer service</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> We do your provisioning</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Your payment guaranteed</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Only one interop</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> CLECs sell phone numbers</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Regulatory Management</p>
            <p className="w-full sm:w-1/2"><FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} /> Sell phone numbers to over 25,000 DIDX members</p>
          </section>
        </section>
        <iframe src="https://www.youtube.com/embed/Hxs8EZG8FMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="w-full aspect-video xl:w-5/12 2xl:w-4/12"></iframe>
      </section>

      <section className="w-full flex flex-wrap items-stretch justify-stretch text-white text-2xl sm:text-3xl">
        <div className="relative w-full bg-[#c4a420] h-52 overflow-hidden sm:w-1/2 xl:w-1/4">
          <FontAwesomeIcon icon={faTrophy} className="h-5/6 text-[#0000001a] absolute -right-10 top-1/2 -translate-y-1/2" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-left w-3/4">
            <p className="mb-8">DIDX Awards</p>
            <Link href="/awards" className="border-2 border-white px-4 py-1 rounded text-xl transition-colors sm:text-2xl sm:px-6 sm:py-2 sm:rounded-md hover:bg-white hover:text-neutral-700">view</Link>
          </div>
        </div>
        <div className="relative w-full bg-[#34495e] h-52 overflow-hidden sm:w-1/2 xl:w-1/4">
          <FontAwesomeIcon icon={faThumbsUp} className="h-5/6 text-[#0000001a] absolute -right-10 top-1/2 -translate-y-1/2" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-left w-3/4">
            <p className="mb-8">DIDX Partners</p>
            <Link href="/partners" className="border-2 border-white px-4 py-1 rounded text-xl transition-colors sm:text-2xl sm:px-6 sm:py-2 sm:rounded-md hover:bg-white hover:text-neutral-700">view</Link>
          </div>
        </div>
        <div className="relative w-full bg-[#e74c3c] h-52 overflow-hidden sm:w-1/2 xl:w-1/4">
          <FontAwesomeIcon icon={faUsers} className="h-5/6 text-[#0000001a] absolute -right-10 top-1/2 -translate-y-1/2" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-left w-3/4">
            <p className="mb-8">DIDX Members</p>
            <Link href="/login" className="border-2 border-white px-4 py-1 rounded text-xl transition-colors sm:text-2xl sm:px-6 sm:py-2 sm:rounded-md hover:bg-white hover:text-neutral-700">view</Link>
          </div>
        </div>
        <div className="relative w-full bg-[#1abc9c] h-52 overflow-hidden sm:w-1/2 xl:w-1/4">
          <FontAwesomeIcon icon={faCalendar} className="h-5/6 text-[#0000001a] absolute -right-10 top-1/2 -translate-y-1/2" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-left w-3/4">
            <p className="mb-8">DIDX Events</p>
            <Link href="/events" className="border-2 border-white px-4 py-1 rounded text-xl transition-colors sm:text-2xl sm:px-6 sm:py-2 sm:rounded-md hover:bg-white hover:text-neutral-700">view</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#2196F3] h-auto px-6 py-4 text-center text-white flex items-center justify-center gap-y-4 flex-wrap text-2xl xl:h-20">
        Download the DIDX Android App from
        <Link className="font-semibold underline underline-offset-2 ml-4" href="https://play.google.com/store/apps/details?id=net.didx">
          Google Play <FontAwesomeIcon icon={faCaretRight} />
        </Link>
      </section>

      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/592c7e654374a471e7c505bf/default"
      />
      <Script
        strategy="lazyOnload"
        src="https://widget.tochat.be/bundle.js?key=398074a8-0d76-41ab-a8ed-a01189257cf2"
      />
    </main>
  )
}
