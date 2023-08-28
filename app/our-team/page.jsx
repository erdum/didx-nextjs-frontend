import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedinIn, faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage } from '../layout-components/standardPage'
import Link from 'next/link'
import Image from 'next/image'
import ahsanImage from '../../public/our-team-page-images/ahsan.jpg'
import aliImage from '../../public/our-team-page-images/ali.jpg'
import aunImage from '../../public/our-team-page-images/aun.jpg'
import kamranImage from '../../public/our-team-page-images/kamran.png'
import rehanImage from '../../public/our-team-page-images/rehan.jpg'
import tahirImage from '../../public/our-team-page-images/tahir.jpg'
import usmanImage from '../../public/our-team-page-images/usman.jpg'
import saadImage from '../../public/our-team-page-images/saad.png'

export const metadata = {
	'title': 'DIDX Team'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full flex flex-wrap justify-evenly gap-y-10 gap-x-2">
					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={rehanImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">Presitdent</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Rehan</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Ahmed</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://www.facebook.com/rehan33"><FontAwesomeIcon icon={faFacebookF}/></Link>
							<Link href="https://www.linkedin.com/in/rehanallahwala"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://twitter.com/rehanallahwala"><FontAwesomeIcon icon={faTwitter}/></Link>
							<Link href="https://wa.me/12126559343"><FontAwesomeIcon icon={faWhatsapp}/></Link>
							<Link href="https://didx.net/facetime:12126559343"><FontAwesomeIcon icon={faVideo}/></Link>
						</div>
					</div>

					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={ahsanImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">VP Sales</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Ahsan</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Saleem</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://www.facebook.com/ahsansaleem87"><FontAwesomeIcon icon={faFacebookF}/></Link>
							<Link href="https://www.linkedin.com/in/ahsansaleem87"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://twitter.com/ahsansaleem87"><FontAwesomeIcon icon={faTwitter}/></Link>
							<Link href="https://wa.me/18503686419"><FontAwesomeIcon icon={faWhatsapp}/></Link>
							<Link href="facetime:18503686419"><FontAwesomeIcon icon={faVideo}/></Link>
						</div>
					</div>

					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={kamranImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">CTO</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Kamran</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Feroz</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://github.com/kamranferoz/"><FontAwesomeIcon icon={faGithub}/></Link>
							<Link href="https://www.linkedin.com/in/kamranferoz/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://wa.me/923352998070"><FontAwesomeIcon icon={faWhatsapp}/></Link>
						</div>
					</div>

					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={aliImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">Sales Manager</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Muhammad</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Ali</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://www.facebook.com/AliDIDX"><FontAwesomeIcon icon={faFacebookF}/></Link>
							<Link href="https://www.linkedin.com/in/Ali-DIDX"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://twitter.com/AliDIDx"><FontAwesomeIcon icon={faTwitter}/></Link>
							<Link href="https://wa.me/12123656919"><FontAwesomeIcon icon={faWhatsapp}/></Link>
							<Link href="facetime:12123656919"><FontAwesomeIcon icon={faVideo}/></Link>
						</div>
					</div>

					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={aunImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">Accounts Manager</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Aun</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Haider</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://www.facebook.com/aon.hyder"><FontAwesomeIcon icon={faFacebookF}/></Link>
							<Link href="https://www.linkedin.com/in/aun-haider-96472764/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://twitter.com/aunhaider3"><FontAwesomeIcon icon={faTwitter}/></Link>
						</div>
					</div>

					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={usmanImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">LNP Specialist</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Usman</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Shah</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://www.facebook.com/UsmanDiDx"><FontAwesomeIcon icon={faFacebookF}/></Link>
							<Link href="https://www.linkedin.com/in/usman-DIDX"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://twitter.com/usmandidx"><FontAwesomeIcon icon={faTwitter}/></Link>
							<Link href="https://wa.me/14159120910"><FontAwesomeIcon icon={faWhatsapp}/></Link>
							<Link href="facetime:14159120910"><FontAwesomeIcon icon={faVideo}/></Link>
						</div>
					</div>

					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={saadImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">Sales Executive</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Saad</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Ur Rehman</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://www.facebook.com/rehan33"><FontAwesomeIcon icon={faFacebookF}/></Link>
							<Link href="https://www.linkedin.com/in/rehanallahwala"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://twitter.com/rehanallahwala"><FontAwesomeIcon icon={faTwitter}/></Link>
							<Link href="https://wa.me/12126559343"><FontAwesomeIcon icon={faWhatsapp}/></Link>
							<Link href="https://didx.net/facetime:12126559343"><FontAwesomeIcon icon={faVideo}/></Link>
						</div>
					</div>

					<div className="w-full relative flex flex-col items-center sm:w-2/5 xl:w-1/5">
						<div className="w-full aspect-square border-[16px] border-neutral-300 shadow-[3px_3px_1px_rgba(0,0,0,0.32)] rounded-full overflow-hidden transition-colors group hover:border-[#4593e3]">
							<Image className="grayscale group-hover:grayscale-0 transition-all" src={tahirImage}/>
							<p className="absolute bottom-32 left-8 text-white bg-[#4593e3] px-2 py-2 pr-3 rounded-r-full z-10">Sales Executive</p>
						</div>
						<p className="text-[#4593e3] font-semibold text-lg self-start pl-20">Tahir</p>
						<h3 className="font-semibold text-3xl text-neutral-700">Hasan</h3>
						<div className="pt-2 text-neutral-300 text-xl flex items-center gap-x-6">
							<Link href="https://www.facebook.com/rehan33"><FontAwesomeIcon icon={faFacebookF}/></Link>
							<Link href="https://www.linkedin.com/in/rehanallahwala"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
							<Link href="https://twitter.com/rehanallahwala"><FontAwesomeIcon icon={faTwitter}/></Link>
							<Link href="https://wa.me/12126559343"><FontAwesomeIcon icon={faWhatsapp}/></Link>
							<Link href="https://didx.net/facetime:12126559343"><FontAwesomeIcon icon={faVideo}/></Link>
						</div>
					</div>
				</section>
			</StandardPage>
		</>
	)
}
