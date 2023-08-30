import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading } from '../layout-components/standardPage'
import Link from 'next/link'

export const metadata = {
	'title': 'DIDX Events | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full flex flex-col items-center sm:px-28 xl:px-8 2xl:px-32">

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/itexpo-green.jpeg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                ITEXPO
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 14 to 20 February, 2020/ <FontAwesomeIcon icon={faLocationDot}/> Broward County Convention Center, Ft. Lauderdale, FL
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: 1024. DIDx was a media partner.</p>
              <p>
              	ITEXPO attracts companies of all sizes and representing all sectors of the IP Communications industry, including Service Providers, Carriers, Enterprises, Government Agencies, Resellers, Manufacturers, Developers, and more.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/itw-small.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                INTERNATIONAL TELECOMS WEEK
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 23 to 26 June, 2019/ <FontAwesomeIcon icon={faLocationDot}/> Location: Hyatt Regency & Marriot Marquis, Atlanta, GA
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: Meet DIDX at its meeting table Marriott Marquis, Marquis Tower.</p>
              <p>
              	ITW (International Telecoms Week) is the annual meeting for the global wholesale telecoms industry, providing a platform for 6,743 delegates from 1,944 companies and more than 140 countries (the same countries that DIDX offers DID number business) to meet together and network.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/communasia-2019.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                COMMUNICASIA 2019
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 18 to 20 June, 2019/ <FontAwesomeIcon icon={faLocationDot}/> Location: Singapore
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: DIDX was a media partner.</p>
              <p>
              	Inspired by the radical changes in the ICT industry, the refreshed CommunicAsia continues to be Asia’s most established and relevant event for industry professionals in the telecommunications sector. It brings together thought-leaders, decision makers, influencers throughout the ecosystem to network, explore new technologies, share ideas and create valuable opportunities for all.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/itexpo.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                ITEXPO
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 29 January to 1 February, 2019/ <FontAwesomeIcon icon={faLocationDot}/> Location: Fort Lauderdale, FL
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: TBA. DIDX was a media partner.</p>
              <p>
              	ITEXPO attracts companies of all sizes and representing all sectors of the IP Communications industry, including Service Providers, Carriers, Enterprises, Government Agencies, Resellers, Manufacturers, Developers, and more.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/gitex-2017.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                GIGTEX TECHNOLOY WEEK 2018
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 14 to 18 October, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Dubai World Trade Center
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: TBA.</p>
              <p>
              	GITEX Technology Week is a game-changing, must-attend event located in Dubai – the world’s fastest growing technology hub
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/astricon.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                ASTRICON 2018
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 9 to 11 October, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Orlando, FL, USA
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: TBA. Meet our CEO Rehan Allahwala</p>
              <p>
              	AstriCon is celebrating its 15th year in Orlando! As the longest-running event devoted to all-things Asterisk, AstriCon celebrates one of the most influential open source telecommunication projects in history and also its future impact on the communications industry.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/cluecon.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                CLUECON DEVELOPERS CONFERENCE 2018
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 23 to 26 July, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Swissotel, Chicago, IL, USA
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: TBA. DIDX is media partner</p>
              <p>
              	ClueCon is a conference for developers by developers: an annual technology conference held every summer hosted by the team behind the FreeSWITCH open-source project. Our primary focus is to gather various open source projects to discuss Voice over IP, open-source software and hardware, Telecommunications, WebRTC, and IoT. We sit at the intersection of communication and technology and we love all things technical.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/communic-asia.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                COMMUNICASIA 2018
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 26 to 28 July, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Swissotel, Chicago, IL, USA
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: DIDX was a media partner / exhibitor # Bs5-12.</p>
              <p>
              	Inspired by the radical changes in the ICT industry, the refreshed CommunicAsia continues to be Asia’s most established and relevant event for industry professionals in the telecommunications sector. It brings together thought-leaders, decision makers, influencers throughout the ecosystem to network, explore new technologies, share ideas and create valuable opportunities for all.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/itw.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                INTERNATIONAL TELECOMS WEEK
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 6 to 9 May, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Hyatt Hotel Chicago, IL
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: Meet DIDX at its premium meeting table. We are an ITW Prime Sponsor.</p>
              <p>
              	ITW (International Telecoms Week) is the annual meeting for the global wholesale telecoms industry, providing a platform for 6,743 delegates from 1,944 companies and more than 140 countries (the same countries that DIDX offers DID number business) to meet together and network.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/telco-days.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                GLOBAL VOICE CONGRESS
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 6 May, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Chicago, IL
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: Visit our booth in the Swissotel. We are a Global Voice Congress sponsor.</p>
              <p>
              	Why DIDX and you will be there? #1 Connect with voice industry decisions-makers. #2 Network in a quiet, hassle-free environment. #3 Build long-lasting connections having more time for meetings. #4 Find new partners and make deals. #5 Learn industry trends, share experience and insights. # 6 Raise your company profile in the industry.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/opensips.jpeg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
                OPENSIPS SUMMIT, AMSTERDAM, NETHERLANDS
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 1 to 4 May, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Radisson Blue Hotel, Amsterdam, Netherland
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: DIDX was a sponsor.</p>
              <p>
              	Join us for four exciting days filled with VoIP and RTC communications presentations, workshops and design clinics bringing the latest updates from the OpenSIPS global community, to learn, discuss and share ideas and projects with like minds. Get ready for the fun, relaxed, informal and rewarding context, right in the city center of lovely Amsterdam.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/telcoms-worlds.gif" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	WORLD TELECOMS ASIA
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 18 March, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Bangkok, Thailand
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: TBA.</p>
              <p>
              	For 19 years, Telecoms World Asia has been an annual platform for leading international carriers, operators, authorities and suppliers to meet, learn and create fruitful business partnerships for the betterment of wholesale revenue and growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/download.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	TELCODAYS BARCELONA
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: TBA/ <FontAwesomeIcon icon={faLocationDot}/> Location: Barcelona, Spain
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a Exhibitor TBA.</p>
              <p>
              	TelcoDays Barcelona brings together wholesale voice, mobile, data carriers, SMS companies, MVNOs, solution vendors and other players of international telecom market, and provides favorable environment to network, discuss industry issues, do business and build long-lasting relationships with peers.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/mobile.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	MOBILE WORLD CONGRESS GSMA 2018
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 26 Feb to 1 March, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: N/A Press
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a Exhibitor TBA.</p>
              <p>
              	Mobile World Congress is the world’s largest gathering for the mobile industry, organised by the GSMA and held in the Mobile World Capital, Barcelona, 26 February – 1 March 2018.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/itexpo.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	ITEXPO
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 14 to 16 February, 2018/ <FontAwesomeIcon icon={faLocationDot}/> Location: Fort Lauderdale, FL
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: 126</p>
              <p>
              	ITEXPO attracts companies of all sizes and representing all sectors of the IP Communications industry, including Service Providers, Carriers, Enterprises, Government Agencies, Resellers, Manufacturers, Developers, and more.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/download.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	TELCO DAYS LAS VEGAS 2017
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 7 to 8 January, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: The Linq Hotel
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: DIDX was a media partner</p>
              <p>
              	TelcoDays Las Vegas is the North American chapter of the international telecom meetings. The event will be held on January 7-8, in the Linq Hotel, Las Vegas and will bring together 500+ decision makers of telecom industry from around the world. This is more than just another telecom industry event: a unique formula of 3TDs is applied to achieve an ultimate synthesis of learning, deal-making and building trusting long-lasting relations.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/gitex-2017.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	GITEX TECHNOLOY WEEK
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 8 to 12 October, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Dubai World Trade Center
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: TBA.</p>
              <p>
              	GITEX Technology Week is a game-changing, must-attend event located in Dubai – the world’s fastest growing technology hub.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/cluecon.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	CLUECON DEVELOPERS CONFERENCE
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 7 to 10 August, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Swissotel Chicago, IL
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	ClueCon is a conference for developers by developers: an annual technology conference held every summer hosted by the team behind the FreeSWITCH open-source project. Our primary focus is to gather various open source projects to discuss Voice over IP, open-source software and hardware, Telecommunications, WebRTC, and IoT.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/opensips.jpeg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	OPENSIPS SUMMIT, AMSTERDAM, NETHERLANDS
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 2 to 5 May, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Radisson Blue Hotel, Amsterdam, Netherland
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a key partner.</p>
              <p>
              	Join us for three exciting days filled with VoIP and RTC presentations, workshops and design clinics bringing the latest updates from the OpenSIPS community, to learn, discuss and share ideas with alike-minds in a fun, relaxed and informal context, right in the city center of lovely Amsterdam
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/itw.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	INTERNATIONAL TELECOMS WEEK
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 14 to 17 May, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Chicago, IL
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: Swiss Tower Bronze Level SB523, DIDX is a media partner.</p>
              <p>
              	ITW (International Telecoms Week) is the annual meeting for the global wholesale telecoms industry, providing a platform for 6771 delegates from 1989 companies and more than 140 countries to meet together and network.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/enterprise-it-2017.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	COMMUNICASIA, SINGAPORE
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 23 to 25 May, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Malaysia
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: 5D1-03, DIDX.net was a media partner.</p>
              <p>
              	The premier sourcing and knowledge ICT platform in Asia, CommunicAsia2017 will bring together a comprehensive display of cutting-edge technologies. With the convergence of technologies and the disruption of traditional business models, ensure that your business stays updated and ready to tackle future consumer demands.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/africa.png" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	AFRICACOM 2017
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 14 to 17 Novmeber, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Capetown, South Africa
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	AfricaCom is the largest and most influential Africa-focused tech event in the world – the meeting place for those driving Africa’s digital transformation. The event is now a week-long festival of thought-provoking content, immersive satellite events, and unique networking experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/mobile2017.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	GSM MOBILE WORLD CONGRESS
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 27 February to 2 March, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Barcelona, Spain
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	Mobile World Congress is the world’s largest gathering for the mobile industry, organised by the GSMA and held in the Mobile World Capital Barcelona, 27 February - 2 March 2017
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/itexpo-red.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	ITEXPO EAST
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 8 to 10 February, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Barcelona, Spain
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	One of the key things for us at ITEXPO is the diversity of the audience. It's not just a reseller show, it's not just a service provider show, it's not just an enterprise show. We have an opportunity to meet with a very diverse goup and its also a good place to run into the mid-market.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/convergence-india-2017.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	ITEXPO EAST
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 8 to 10 February, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Pragati Maiden, New Delhi, India
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	Convergence India is the only platform in this region which demonstrates convergence of technologies in Telecom, IT, Broadcast and Digital media sectors.
              </p>
              <p>
              	The expo will showcase latest trends and technologies related to Telecom, Broadcast, Cable and Satellite TV, Cloud and Big Data, IoT, Digital Homes, Mobile devices, Film and Radio, Content Creation, Management and Delivery, etc. and also provides engagement with digital innovators, international business gurus, telecom and broadcasting czars.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/gitex-2016.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	GITEX TECHNOLOY WEEK
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 16 to 20 October, 2016/ <FontAwesomeIcon icon={faLocationDot}/> Location: Dubai, United Arab Emirates
              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	GITEX Global is the world's most important technology event. It is an exciting showcase of the very best solutions, ideas and innovations that could revolutionise the world we live in. Presenting over 4,000 exhibitors from every corner of the world, GITEX Global is the only event you need to consider if you want to meet influential business buyers and decision makers.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/it-rtc.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	IIT RTC CONFERENCE AND  EXPO
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 17 to 20 October, 2016/ <FontAwesomeIcon icon={faLocationDot}/> Location: IIT Hermann Hall, 3241 South Federal, Chicago, IL 60616

              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	The IIT RTC Conference and Expo is a globally recognized collaborative event, where industry and academia connect. Leveraging its unique academic setting, this annual conference brings together technical professionals and business executives from the data and telecommunications industry, standards bodies, policy and regulatory institutions, and academic educators and researchers to promote an open exchange of ideas to lead future development in the rapidly changing field of real-time communications.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/cluecon.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	CLUECON DEVELOPERS CONFERENCE 2016
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 17 to 20 October, 2016/ <FontAwesomeIcon icon={faLocationDot}/> Location: IIT Hermann Hall, 3241 South Federal, Chicago, IL 60616

              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">TBA. Suzanne Bowen, VP of DIDX, will present a lightning talk.</p>
              <p>
              	ClueCon was founded in 2005 by an aspiring team of Asterisk software developers who wanted to push the envelope and set out to bring all of the open source projects to one place to gather their wisdom and make Open Source Telephony a disruptive force in the industry. By the 2nd year in 2006, that team of developers, inspired by the the first ClueCon, had created a brand new Open Source Telephony application. That application was called FreeSWITCH.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/communic-asia-2016.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	COMMUNICASIA / ENTERPRISE
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 23 to 25 May, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Singapore

              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	CommunicAsia2017 Summit being Asia’s largest and well attended international ICT and Enterprise Show is now officially opening the Call for Nominations. We are inviting you to be amongst the 180+ speakers and industry professionals to share your insights, views and strategies in tailored sessions and interactive networking panels to showcase your thought leadership.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/all-about-the-api.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	COMMUNICASIA / ENTERPRISE
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 8 to 10 February, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Singapore

              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	The event will feature a variety of intensive hack-a-thons, in-depth company-focused workshops helping attendees understand the value propositions offered by key vendors, powerful keynotes, networking opportunities and an exhibit hall full of companies demonstrating the latest innovations in today's market place. Every business has to pay attention to the new opportunities they are presenting or potentially be displaced.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/evolution-expo.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	IOT EVOLUTION EXPO
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 11 to 14 July, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Singapore

              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">Booth#: To Be Announced. Meet the DIDX.net press team.</p>
              <p>
              	Through informative conference tracks, an IoT Exhibition floor, case studies, special events, networking and more, the IoT Evolution Expo is the ultimate venue for attendees to gain an understanding on how the Internet of Things (IoT) will be the driving force behind improving efficiencies, driving revenue opportunities and solving business problems across multiple industries and all business functional areas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/kamailio-2016.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	KAMAILIO WORLD 2017
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 18 to 20 May, 2017/ <FontAwesomeIcon icon={faLocationDot}/> Location: Berlin, Germany

              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">DIDX was a media partner.</p>
              <p>
              	The 4th edition of Kamailio World Conference & Exhibition, expecting over 150 participants from all over the world, with about 30 speakers having first hand experience working with top real time communications products and services.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 pr-4 py-2 mb-8 sm:flex-row sm:items-start sm:pr-2 sm:gap-x-6 xl:gap-x-8">
            <img src="/events-page-banners/kamailio-2016.jpg" className="w-72 sm:w-44 xl:min-w-[20rem]" />
            <div className="flex flex-col justify-start px-8 sm:items-start text-neutral-600">
              <h3 className="my-4 text-neutral-700 text-2xl sm:my-0 sm:mb-4 xl:text-3xl">
              	INTERNATIONAL TELECOMS WEEK 2016
              </h3>
              <p className="text-xs text-neutral-500">
              	<FontAwesomeIcon icon={faClock}/> Date: 8 to 11 May, 2016/ <FontAwesomeIcon icon={faLocationDot}/> Location: Hyatt Regency & Swissotel, Chicago, IL

              </p>
              <p className="my-6 sm:mb-4 sm:mt-8">East Tower Gold Level G429 Bilateral Table.</p>
              <p>
              	Launch and display your company’s new products and services in front of over 6,500 attendees from the global wholesale industry. This unique exhibition integrates meeting rooms, bilateral tables and booths to provide you with the ultimate platform to showcase your company.
              </p>
            </div>
          </div>

				</section>
			</StandardPage>
		</>
	)
}