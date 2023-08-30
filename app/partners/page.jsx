import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading } from '../layout-components/standardPage'
import Link from 'next/link'

export const metadata = {
	'title': 'DIDX Partners | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full flex flex-col items-center sm:px-12 xl:px-0 2xl:px-40">

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/telinta.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                TELINTA
              </h3>
              <p className="text-neutral-600">
                Founded in 2002, Telinta offers highly reliable cloud-based Switching and Billing solutions for VoIP service providers and their resellers around the globe. Our full portfolio of white label carrier-grade solutions includes Hosted PBX, Calling Card, Pinless, Mobile solutions, Business and Residential VoIP, WebRTC, Click-to-Call, Wholesale VoIP, Audio-Conferencing, and other solutions.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.telinta.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/nct.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                NEW CONCEPT TECHNOLOGIES (NCT)
              </h3>
              <p className="text-neutral-600 mb-6">
                New Concept Technologies (NCT) is a leading application development and telecommunication company with offices in Australia and USA, supported by global resellers network.
              </p>
              <p className="text-neutral-600 mb-6">
                Our products are compatible with SIP based applications/equipment manufactured around the world. We enable ITSPs to deliver the highest levels of performance and quality using our carrier grade, flexible, user friendly, reliable and scalable VoIP Softswitch and Billing System. We offer a turn-key system for ITSPs, CSP and other organizations without the need of any third party applications.
              </p>
              <p className="text-neutral-600 mb-6">
                NCT has been an innovative powerhouse in communication technologies, VoIP Services and Products. We embrace excellence and the highest ethical standards for the benefit of our stakeholders. Since inception, our strategic advantages have been our expertise, creativity and technical competence.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://newconcepttechnologies.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/cx.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                CX INNOVATING COMMUNICATIONS
              </h3>
              <p className="text-neutral-600">
                CX maintains a global presence with offices worldwide in the US, the UK, Germany, France, Japan, Russia, South Africa, Poland, Switzerland, Cyprus, Australia, Hong Kong, and Malta as well as fully localized websites available in German, Spanish, French, Portuguese, Italian, Russian, Polish, Japanese and many other languages. News, features and useful ‘how-to’ articles on 3CX Phone System for Windows, VoIP and SIP are available from the company’s 3CX VoIP Blog. VISIT
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.3cx.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/callision.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                CALLISION
              </h3>
              <p className="text-neutral-600">
                Callision is a hosted virtual PBX. Callision’s technology attempts to optimize the operations of Contact Centers by integrating various means of communication into an all-in-one dashboard. In November 2013 Callision was the first hosted PBX provider to launch a VoIP Hybrid Cloud model, allowing companies to preserve their existing SIP provider while using Callision as an interactive layer.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.callision.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/symphony.jpg" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                SYMPHONY GLOBAL
              </h3>
              <p className="text-neutral-600">
                Mobile payments is widely tipped to become a hot growth area for cellcos, and in some markets in Asia Pacific it already is, from smartcard-based mobile wallet services in Japan and Korea to remittance payment services in Southeast Asia.But it’s early days, and the mobile payment pie is going to get a whole lot bigger. IE Market Research projects global mobile payment revenue to grow from $47.2 billion in 2011 to $998.5 billion in 2016 (that’s a CAGR of almost 84%). KPMG is even more bullish, forecasting the value of global m-payment transactions to pass $958 billion by 2015 at a growth rate of 97% a year.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.symphonyglobal.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/kolmi-soft.jpeg" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                KOLMISOFT
              </h3>
              <p className="text-neutral-600">
                Kolmisoft provides a single solution covering all the business models mentioned below. Whether you are offering a telecom, prepaid calling card or a callshop operator services we have the best softswitch for your particular needs With clear and short-spoken explanations of existing VoIP business models it is easier to weigh the pros and cons of each based on your particular needs.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.kolmisoft.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/itexpo.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                ITEXPO
              </h3>
              <p className="text-neutral-600">
                ITEXPO is the event with an educational program that teaches resellers, enterprises, SMBs, and Government Agencies how to select IP-based voice, video, fax, and unified communications to purchase or resell. It’s where service providers learn how to profitably roll out services their subscribers are clamoring for. ITEXPO is where buyers, sellers, resellers, and manufacturers meet to forge relationships and close deals.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://itexpo.tmcnet.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/sip-school.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                THE SIP SCHOOL
              </h3>
              <p className="text-neutral-600 mb-6">
                The SIP School is the home of the webs ‘premier’ SIP training service and the SSCA™ certification program.
              </p>
              <p className="text-neutral-600 mb-6">
                It’s a full training system on SIP (the Session Initiation Protocol)that’s flash based with animations / learning games / labs / quizzes etc. that makes it a great environment for students to learnThe training content evolves as the development of SIP evolvesThe training goes from the basics of SIP messaging and SIP Servers, right through Security, Firewalls, NAT, Troubleshooting, Trunking, Enum and onto SIP in Unified Communications.
              </p>
              <p className="text-neutral-600 mb-6">
                Students registered with The SIP School will benefit from ongoing updates and additions to the service for example, Q1 2010 will see the introduction of modules such as SIP in the IMS along with SIP and Mobile Technologies for no extra charge. For all course information, demos, free training and pricing details, please visit The SIP School.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.thesipschool.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/portaone.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                PORTA ONE
              </h3>
              <p className="text-neutral-600">
                Based in Canada, PortaOne is a leading global vendor of carrier grade software for modern telecommunication service providers. The company enables service providers and carriers to run a broad line of telecommunication services with a single software package, and offers a complete product consisting of fully converged VoIP billing and provisioning platform, class 4 and 5 SIP softswitch to support hosted IPPBX or IPCentrex services, unified messaging, IVR, conferencing applications, callbacks and more. The company’s products are a fundamental part of the business infrastructure at over 330 service provider locations worldwide. VISIT
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.portaone.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/voip-switch.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                VOIP SWITCH
              </h3>
              <p className="text-neutral-600">
                VoipSwitch – complete IP telephony platform integrating all the elements, that are required for successful implementation of various VoIP services, into one comprehensive solution. DIDx.net has been integrated with Voipswitch software for a few years, but recently both companies completed their work on enhancing the compatibility by adding new features supported in the new DIDx API.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.voipswitch.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/brekeke.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                BREKEKE SOFTWARE, INC
              </h3>
              <p className="text-neutral-600">
                Brekeke Software, Inc., develops high-quality, innovative SIP communication software products for telephony carriers and service providers. Brekeke’s comprehensive SIP-based family of products enables organizations to seamlessly migrate or integrate IP communication systems into their communications infrastructure. Founded in 2002, Brekeke is headquartered in San Mateo, California.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.brekeke.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/snom.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                SNOM
              </h3>
              <p className="text-neutral-600">
                The snom 820 is a new step in combining high class telephony with an extraordinary design. The snom 820 is the beginning of a superior line of business VoIP phones. It´s extraordinary elegance and performance combines both: latest technology and well known snom features. The snom 820 is an amazing experience for everybody who is used to the basic world of telephony. That is the reason why the call the new snom VoIP phone series: The 8 experience. Check out the press release of interop complete among pbxnsip.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.snom.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/sangoma.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                SANGOMA
              </h3>
              <p className="text-neutral-600">
                Founded in 1984, Sangoma’s flexibility and commitment to provide outstanding service and support has enabled it to build strong and long-lasting relationships with major Original Equipment Manufacturers (OEMs), Value Added Resellers, system integrators, telecommunications companies and software developers worldwide. Today, Sangoma sells its solutions through a network of “Empowered by Sangoma” channel partners in more than 130 countries.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.sangoma.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/allison.jpeg" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                ALLISON SMITH
              </h3>
              <p className="text-neutral-600">
                If you’ve listened to the public airwaves, used an automated phone system, participated in a phone survey, or even used a talking thermostat, you’re familiar with Allison Smith. One of the most prevalent telephone voices in the world today, Allison has voiced platforms for Vonage, Bell Canada, Cingular and Qwest – as well as being proud to be the voice of Asterisk. Clients include Marriot Hotels, Pfizer, Toyota, Victoria’s Secret, Bank of America and EBay among many others.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.theivrvoice.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/grand-stream.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                GRANDSTEAM NETWORKS
              </h3>
              <p className="text-neutral-600">
                Grandstream Networks is a leading designer and manufacturer of innovative, affordable, and high quality IP voice and video products for the worldwide broadband telephony market. Our products are fully compatible with the SIP industry standard, field proven with large and rapidly growing deployed base, and have broad interoperability with the majority of 3rd party SIP products on the market today.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.theivrvoice.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/virtualphoneline.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                VIRTUAL PHONE LINE
              </h3>
              <p className="text-neutral-600">
                Virtual Phone Line is a call forwarding service that offers you a Virtual Phone Number to ring on your existing number, SIP Address and many instant messengers, no matter where you are.Get a US 1800 / Toll-Free number or a number from over 10 countries INSTANTLY, that can ring ANYWHERE in the world on your landline or your cell, mobile or hand phone.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.virtualphoneline.com/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/inc-5000.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                SNOM
              </h3>
              <p className="text-neutral-600">
                The snom 820 is a new step in combining high class telephony with an extraordinary design. The snom 820 is the beginning of a superior line of business VoIP phones. It´s extraordinary elegance and performance combines both: latest technology and well known snom features. The snom 820 is an amazing experience for everybody who is used to the basic world of telephony. That is the reason why the call the new snom VoIP phone series: The 8 experience. Check out the press release of interop complete among pbxnsip.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.inc.com/inc5000">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <img src="/partners-page-banners/jaymie.png" className="w-full h-auto border border-black sm:min-w-[160px] xl:min-w-[220px] 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                JAYMIE SCOTTO
              </h3>
              <p className="text-neutral-600">
                Jaymie Scotto & Associates professionals have a proven track record of establishing recognizable corporate brands and deploying sensible marketing and communications strategies, positioning its customers as leaders in the industry.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://www.jsa.net/">Visit</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

				</section>
			</StandardPage>
		</>
	)
}