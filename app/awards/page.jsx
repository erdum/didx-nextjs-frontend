import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading } from '../layout-components/standardPage'
import Image from 'next/image'
import Link from 'next/link'
import getVoipImage from '../../public/get-voip.jpg'
import kamailioImage from '../../public/kamailio-2011.jpg'
import pensacolaImage from '../../public/pensacola-awards.jpg'
import arabiaFastGrowth from '../../public/arabia-fast-growth.jpg'
import cbbbImage from '../../public/cbbb.jpg'
import cwhpImage from '../../public/cwhp-2011.jpg'
import internetTelephony2009Image from '../../public/internet-telephony-2009.jpg'
import vonInnovatorImage from '../../public/von-innovator.jpg'
import digiumInnovationImage from '../../public/digium-innovation.png'
import productOfTheYear2008 from '../../public/product-of-the-year-2008.png'
import pashaImage from '../../public/pasha.png'
import itExcel2006Image from '../../public/it-excel-2006.png'
import wca2006Image from '../../public/wca-2006.png'
import apicta2010Image from '../../public/apicta-2010.png'

export const metadata = {
	'title': 'DIDX Awards | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full flex flex-col items-center sm:px-12 xl:px-0 2xl:px-40">

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={getVoipImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-center">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2015 GETVOIP TOP 50 UC EXPERTS TO FOLLOW
              </h3>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={kamailioImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-center">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2011 FRIENDS OF KAMAILIO AWARD
              </h3>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={pensacolaImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-center">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                SUPER TECHNOLOGIES GOT CERTIFICATE OF MEMBERSHIP FROM PENSACOLA CHAMBER OF COMMERCE
              </h3>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={arabiaFastGrowth} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-center">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX VIA SUPER TECHNOLOGIES WINS THE ARABIA FAST GROWTH 500 AWARD
              </h3>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={cbbbImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-center">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX VIA SUPER TECHNOLOGIES IS A MEMBER SINCE 2006. DIDX (SUPER TECHNOLOGIES, INC.) HAS AN A+ RATING SINCE 2005.
              </h3>
              <p className="text-neutral-600">
                In 2012, Super Technologies, Inc. maintains an A+ Better Business Bureau rating in the United States of America since 2005.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={cwhpImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-center">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                VIRTUAL PHONE LINE EMPOWERED BY DIDX WINS 2011 COMPUTERWORLD HONORS LAUREATE MEDAL
              </h3>
              <p className="text-neutral-600">
                IDX empowers thousands of award-winning entrepreneurs, carriers, operators and Internet service providers such as Virtual Phone Line to add revenue never realized before and/or to start new businesses via the power of direct inward dialing. In addition, those that are empowered in this way … in turn … enable their users to have a local presence in areas of the world they are not physically in, so that they are able to receive calls from very important people in those areas to reach new business, social and personal goals.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={internetTelephony2009Image} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX WINS TERADATA NATIONAL IT EXCELLENCE AWARD 2010
              </h3>
              <p className="text-neutral-600">
                Teradata National IT Excellence Awards celebrate accomplishments in the regional IT industry. “Each year we recognize those persons and services who are instrumental in introducing, promoting and implementing IT in Pakistan,” said Khuram Rahat, managing director, Teradata Pakistan. Visit https://www.pr.com/press-release/283337.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={vonInnovatorImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                GROOVYTEL WON THE VON INNOVATOR AWARD 2008
              </h3>
              <p className="text-neutral-600">
                “The winners of the VON Magazine Innovator Awards should take pride in their accomplishments, and we’d like to thank everyone who submitted a nomination,” said Doug Mohney, Editor-in-Chief of VON Magazine, and Chairman of the awards program. “The scope of the nomination process was extensive, and the quality of submissions was impressive, illustrating a significant level of development and innovation throughout the industry. We look forward to honoring all of the winners at Spring VON.x.”
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={digiumInnovationImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX WON THE DIGIUM INNOVATION PRODUCT OF THE YEAR AWARD 2007
              </h3>
              <p className="text-neutral-600">
                The Innovation Award is designed to recognize developers, customers and partners for outstanding achievements that are improving business processes, overcoming technology challenges and enhancing the company’s bottom line.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={productOfTheYear2008} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX WON THE COMMUNICATIONS SOLUTIONS PRODUCT OF THE YEAR AWARD 2006
              </h3>
              <p className="text-neutral-600">
                Super Technologies, Inc. has been recognized with a 2006 Product of the Year Award for their excellence in technological advancement and application refinement,” said Rich Tehrani, TMC President and Group Editor-in-Chief of Communications Solutions, “It has proven with its DIDXchange they are committed to quality and excellence in solutions that benefit the customer experience as well as ROI for the companies that use them. I am pleased to honor their hard work and accomplishments and look forward to more innovative solutions from them in the future.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={pashaImage} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX WON THE “BEST OF SHOW” FROM PASHA ICT AWARDS 2006
              </h3>
              <p className="text-neutral-600">
                This annual Awards program also provides an opportunity and an ideal environment for companies to gain local, regional and international exposure through on-going promotional activities, and through participation at the international Asia Pacific ICT Awards (APICTA). The top winners of the P@SHA ICT Awards (only product categories) will be nominated for representation at the annual Asia Pacific Awards.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={internetTelephony2009Image} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX CHANGE HONORED FOR DELIVERING EXCEPTIONAL VOIP/IP COMMUNICATIONS SOLUTIONS
              </h3>
              <p className="text-neutral-600">
                Pensacola, FL. Sept 18, 2007 Super Technologies, Inc. announced today that Technology Marketing Corporation has namedDIDXchange as a recipient of a 2007 INTERNET TELEPHONY Excellence Award presented by INTERNET TELEPHONYmagazine (www.itmag .com)
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={internetTelephony2009Image} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX WON THE INTERNET TELEPHONY PRODUCT OF THE YEAR AWARD 2007
              </h3>
              <p className="text-neutral-600">
                INTERNET TELEPHONY editors selected the companies which in their view demonstrate the vision, leadership and attention to detail that are the hallmarks of the prestigious Product of the Year award winners who include DIDXchange, Avaya One-X Deskphone for 9600 Series IP Telephones, Citrix Application Gateway™, eyeBeam 1.5, Truphone and others. LAUNCH SITE
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={itExcel2006Image} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX WON THE INTERNET TELEPHONY EXCELLENCE AWARDS 2006
              </h3>
              <p className="text-neutral-600">
                The editorial staff of Internet Telephony magazine is proud to announce the winners of this year’s Internet Telephony Excellence Awards. These companies are as varied as there are products that fit under the IP telephony umbrella. In fact the only thing more varied than the vendors serving their customers are the customers themselves. And, as we can see from the following companies, they are increasingly turning to IP Communications solutions to build their businesses, and grow their bottom lines.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={wca2006Image} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX CHANGE AMONG TOP 8 WORLD COMMUNICATION CHANGEMAKER AWARDS SHORTLIST
              </h3>
              <p className="text-neutral-600">
                Pensacola, FL, August 17, 2006Pensacola, FL, August 17, 2006. Total Telecom’s panel of judges selected Super Technologies Inc.’s product DIDXchange to be on its Communication Changermaker Shortlist. Awards will be showcased at London Marriott Hotel on
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-300 my-12 flex items-center justify-center xl:mt-4">
            <FontAwesomeIcon icon={faTrophy} className="p-3 bg-neutral-100 text-neutral-400 rounded-full"/>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-8">
            <Image src={apicta2010Image} className="w-full h-auto border border-black sm:w-40 xl:w-56 2xl:w-64" />
            <div className="flex flex-col justify-start items-start">
              <h3 className="my-4 text-neutral-700 sm:my-0 sm:mb-4 sm:text-lg">
                DIDX WON THE “BEST OF SHOW” FROM APICTA PACIFIC ICT AWARDS
              </h3>
              <p className="text-neutral-600">
                The Asia Pacific ICT Awards (APICTA) is an international Awards Program initiated by the Multimedia Development Corporation of Malaysia to increase ICT awareness in the community and assist in bridging the Digital Divide. By providing networking and product benchmarking opportunities to ICT innovators and entrepreneurs in the region, the program is designed to stimulate ICT innovation and creativity, promote economic and trade relations, facilitate technology transfer, and offer business matching opportunities via exposure to venture capitalists and investors.
              </p>
              <Link className="bg-blue-600 text-white text-lg self-start px-3 py-1.5 mt-4 rounded" href="https://getvoip.com/blog/2015/04/22/top-50-uc-experts">View more</Link>
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