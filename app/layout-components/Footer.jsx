import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faPhone, faMessage, faRss, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
	faYoutube,
	faTwitter,
	faFacebookF,
	faGooglePlusG,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/didx-logo-white.png"
import businessCertificateImg from "../../public/business-certificate.png"
import isoCertificateImg from "../../public/iso-certificate.png"

export default function Footer() {
	return(
		<footer className="w-full flex flex-col bg-neutral-700">
			<div className="flex flex-col px-4 py-8 lg:flex-row lg:gap-x-10 lg:px-28 xl:px-30">
				<div className="w-full flex flex-col gap-y-3 text-neutral-400 font-semibold">
					<Image
						src={logo}
						alt="DIDX Inc logo"
						className="w-[126px] h-auto -ml-2 mb-4 lg:w-[156px] lg:mt-6"
					/>
					<p>DIDX is Link Delaware based company since 2005, working in the field of Telecom solutions.</p>
					<p><span className="text-sm font-medium text-neutral-400">Address:</span><br />6005 Keating Road Pensacola, FL 32504</p>
					<p><span className="text-sm font-medium text-neutral-400">Email:</span><br />sales@didxnet</p>
				</div>

				<nav className="w-full flex flex-col gap-y-3 text-neutral-400 font-semibold">
					<p className="text-white text-2xl mt-6 mb-4">DIDx Seller & Buyer</p>
					<Link href="/clec"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>CLECs Sell Numbers</Link>
					<Link href="/toll-free-numbers"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>Toll Free Numbers</Link>
					<Link href="/case-study"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>Case Study</Link>
					<Link href="/testimonial"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>Testimonial</Link>
					<Link href="/coverage-area"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>Coverage Area</Link>
					<Link href="/lnp-lookup"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>LNP Lookup</Link>
					<Link href="/our-team"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>Our Team</Link>
					<span className="w-4/5 h-px mr-auto mt-6 bg-neutral-400"></span>
					<Link href="https://youtu.be/FOuPb9qgFlI" className="w-full flex flex-wrap">
						<FontAwesomeIcon className="text-4xl bg-[#ff8c00] text-white p-2 rounded-md" icon={faYoutube}/>
						<span className="mt-1 ml-3 text-neutral-500">Training Videos<br /> Click Here</span>
					</Link>
				</nav>

				<nav className="w-full flex flex-col gap-y-3 text-neutral-400 font-semibold">
					<p className="text-white text-2xl mt-6 mb-4">Sample Configuration</p>
					<Link href="/asterisk"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>Asterisk</Link>
					<Link href="/voip-switch"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>VOIP Switch</Link>
					<Link href="/elastix"><FontAwesomeIcon icon={faArrowRight} className="mr-2"/>Elastix</Link>
					<span className="w-4/5 h-px mr-auto mt-6 bg-neutral-400"></span>
					<Image src={businessCertificateImg} alt="accredited business certificate" />
					<Image src={isoCertificateImg} alt="ISO 9001:2008 registeration mark" />
				</nav>

				<nav className="w-full flex flex-col items-start gap-y-3 text-neutral-400 font-semibold">
					<p className="text-white text-2xl mt-6 mb-4">Subscribe To Our Newsletter</p>
					<input type="text" name="email" placeholder="Email*" className="py-1 px-2 rounded my-2 border border-white bg-neutral-800 placeholder:text-white" /><br />
					<button className="text-white bg-blue-500 px-3 py-1.5 rounded transition-colors hover:text-blue-500 hover:bg-white">Join List</button>
					<span className="w-11/12 h-px mr-auto mt-6 bg-neutral-400"></span>
					<div className="w-full flex justify-between">
						<Link href="https://youtu.be/FOuPb9qgFlI" className="w-full flex justify-start">
							<FontAwesomeIcon className="text-2xl bg-[#ff8c00] text-white p-2 rounded-md" icon={faPhone}/>
							<span className="ml-3 text-neutral-500 text-sm">Call us<br /> on Skype</span>
						</Link>
						<Link href="https://youtu.be/FOuPb9qgFlI" className="w-full flex justify-start">
							<FontAwesomeIcon className="text-2xl bg-[#ff8c00] text-white p-2 rounded-md" icon={faMessage}/>
							<span className="ml-3 text-neutral-500 text-sm">Chat with us<br /> on Skype</span>
						</Link>
					</div>
				</nav>
			</div>

			<div className="w-full min-h-20 flex flex-wrap gap-2 justify-around px-4 py-6 bg-neutral-800 text-neutral-400 lg:px-28 xl:px-30">
				<p>
					DIDX is Link Delaware based company since 2005. Copyrights 2005-{new Date().toLocaleString('en-us', { year: "numeric" })}
					<br />
					<span className="text-neutral-500 text-sm">
						<Link href="/terms">Terms of Services</Link> |
						<Link href="/privacy-policy"> Privacy Policy</Link> |
						<Link href="/use-policy"> Use Policy</Link> |
						<Link href="https://kb.didx.net/list-of-api-functions/"> API</Link>
					</span>
				</p>
				<p className="flex gap-x-6 text-xl mt-4 lg:m-0">
					<Link href=""><FontAwesomeIcon icon={faFacebookF}/></Link>
					<Link href=""><FontAwesomeIcon icon={faTwitter}/></Link>
					<Link href=""><FontAwesomeIcon icon={faGooglePlusG}/></Link>
					<Link href=""><FontAwesomeIcon icon={faLinkedinIn}/></Link>
					<Link href=""><FontAwesomeIcon icon={faRss}/></Link>
					<Link href=""><FontAwesomeIcon icon={faEnvelope}/></Link>
				</p>
			</div>
		</footer>
	)
}
