import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointRight, faPhone, faMessage, faRss, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
	faYoutube,
	faTwitter,
	faFacebookF,
	faGooglePlusG,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

export default function Footer() {
	return(
		<footer className="w-full flex flex-col bg-[#333333]">
			<div className="flex flex-col px-4 py-8 lg:flex-row lg:gap-x-10 lg:px-28 2xl:px-64">
				<div className="w-full flex flex-col gap-y-3 text-[#ffffff80]">
					<img src="/didx-logo-white.png" alt="DIDX Inc logo" className="w-[126px] h-auto -ml-2 mb-4 lg:w-[156px] lg:mt-6" />
					<p>DIDX is Link Delaware based company since 2005, working in the field of Telecom solutions.</p>
					<p><span className="text-sm font-medium">Address:</span><br />PO Box 192750 #22079 San Francisco, CA 94119</p>
					<p><span className="text-sm font-medium">Email:</span><br />sales@didx.net</p>
				</div>

				<nav className="w-full flex flex-col items-start gap-y-3 text-[#ffffff80] font-medium">
					<p className="text-white text-2xl mt-6 mb-4">DIDx Seller & Buyer</p>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/clec"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>CLECs Sell Numbers</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/toll-free-numbers"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>Toll Free Numbers</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/case-study"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>Case Study</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/testimonial"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>Testimonial</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/coverage"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>Coverage Area</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/lnp-lookup"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>LNP Lookup</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/our-team"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>Our Team</Link>
					<span className="w-4/5 h-px mr-auto mt-6 bg-neutral-400 sm:w-2/5 xl:w-full"></span>
					<Link href="https://youtu.be/FOuPb9qgFlI" className="w-full flex flex-wrap">
						<FontAwesomeIcon className="text-4xl bg-[#ff8c00] text-white p-2 rounded-md transition-colors hover:text-[#ff8c00] hover:bg-white" icon={faYoutube}/>
						<span className="mt-1 ml-3 text-[#ffffff80]">Training Videos<br /> Click Here</span>
					</Link>
				</nav>

				<nav className="w-full flex flex-col items-start gap-y-3 text-[#ffffff80] font-medium">
					<p className="text-white text-2xl mt-6 mb-4">Sample Configuration</p>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/asterisk"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>Asterisk</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/voip-switch"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>VOIP Switch</Link>
					<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/elastix"><FontAwesomeIcon icon={faHandPointRight} className="mr-2"/>Elastix</Link>
					<span className="w-4/5 h-px mr-auto mt-6 bg-neutral-400 sm:w-2/5 xl:w-full"></span>
					<img src="/business-certificate.png" alt="accredited business certificate" />
					<img src="/iso-certificate.png" alt="ISO 9001:2008 registeration mark" />
				</nav>

				<nav className="w-full flex flex-col items-start gap-y-3 text-[#ffffff80] font-medium">
					<p className="text-white text-2xl mt-6 mb-4">Subscribe To Our Newsletter</p>
					<input type="text" name="email" placeholder="Email*" className="py-1 px-2 rounded my-2 border border-white bg-neutral-800 outline-none placeholder:text-white"/><br />
					<button className="text-white bg-blue-600 px-3 py-1.5 rounded transition-colors hover:text-blue-600 hover:bg-white">Join List</button>
					<span className="w-11/12 h-px mr-auto mt-6 bg-neutral-400"></span>
					<div className="w-full flex justify-between">
						<Link href="callto:salesdidx" className="w-full flex justify-start">
							<FontAwesomeIcon className="text-2xl bg-[#ff8c00] text-white p-2 rounded-md transition-colors hover:text-[#ff8c00] hover:bg-white" icon={faPhone}/>
							<span className="ml-3 text-[#ffffff80] text-sm">Call us<br /> on Skype</span>
						</Link>
						<Link href="callto:salesdidx?chat" className="w-full flex justify-start">
							<FontAwesomeIcon className="text-2xl bg-[#ff8c00] text-white p-2 rounded-md transition-colors hover:text-[#ff8c00] hover:bg-white" icon={faMessage}/>
							<span className="ml-3 text-[#ffffff80] text-sm">Chat with us<br /> on Skype</span>
						</Link>
					</div>
				</nav>
			</div>

			<div className="w-full min-h-20 flex flex-wrap gap-2 justify-between px-4 py-6 bg-[#292929] text-[#ffffff80] lg:px-28 2xl:px-64">
				<p>
					DIDX is Link Delaware based company since 2005. &#169; {new Date().toLocaleString('en-us', { year: "numeric" })} DIDX, Inc.
					<br />
					<span className="text-[#ffffff80] text-sm">
						<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/terms">Terms of Services</Link> |
						<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/privacy-policy"> Privacy Policy</Link> |
						<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="/use-policy"> Use Policy</Link> |
						<Link className="transition-colors hover:text-neutral-500 hover:cursor-pointer" href="https://kb.didx.net/list-of-api-functions/"> API</Link>
					</span>
				</p>
				<p className="flex gap-x-6 text-xl mt-4 lg:m-0">
					<Link href="https://www.facebook.com/DIDxGlobal" aria-label="Follow us on Facebook" className="transition-colors hover:text-[#3b5998]"><FontAwesomeIcon icon={faFacebookF}/></Link>
					<Link href="https://twitter.com/didxglobal" aria-label="Follow us on Twitter" className="transition-colors hover:text-[#1DA1F2]"><FontAwesomeIcon icon={faTwitter}/></Link>
					{/*<Link href="https://plus.google.com/111382738877008451324"><FontAwesomeIcon icon={faGooglePlusG}/></Link>*/}
					<Link href="https://www.linkedin.com/company/didx" aria-label="Follow un on Linkedin" className="transition-colors hover:text-[#0A66C2]"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
					<Link href="https://www.youtube.com/user/didexchange" aria-label="Watch our training videos and learn more about DIDX on Youtube" className="transition-colors hover:text-[#c4302b]"><FontAwesomeIcon icon={faYoutube}/></Link>
					{/*<Link href="/rss"><FontAwesomeIcon icon={faRss}/></Link>*/}
					<Link href="mailto:care@didx.net" aria-label="Write a email to our sales representative" className="transition-colors hover:text-[#D44638]"><FontAwesomeIcon icon={faEnvelope}/></Link>
				</p>
			</div>
		</footer>
	)
}
