import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSkype, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading, Paragraph } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Contact Us | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<h3 className="w-full text-center text-neutral-600 text-lg">DIDX is a registered and patent pending service of DIDX, Inc.</h3>

					<section className="w-full flex flex-wrap justify-center gap-y-8 gap-x-8 text-center mt-10 2xl:gap-x-16">
						<div className="w-full h-60 flex flex-col items-center justify-center bg-zinc-100 rounded-3xl px-8 sm:w-80 sm:h-56 xl:w-72">
							<FontAwesomeIcon className="text-[#2196f3] text-6xl" icon={faLocationDot}/>
							<SubHeading>Address</SubHeading>
							<Paragraph>PO Box 192750 #22079 San Francisco, CA 94119</Paragraph>
						</div>
						<div className="w-full h-60 flex flex-col items-center justify-center bg-zinc-100 rounded-3xl px-8 sm:w-80 sm:h-56 xl:w-72">
							<FontAwesomeIcon className="text-[#2196f3] text-6xl" icon={faPhone}/>
							<SubHeading>USA Cutomer Service</SubHeading>
							<Paragraph>+1-850-433-8555</Paragraph>
						</div>
						<div className="w-full h-60 flex flex-col items-center justify-center bg-zinc-100 rounded-3xl px-8 sm:w-80 sm:h-56 xl:w-72">
							<FontAwesomeIcon className="text-[#2196f3] text-6xl" icon={faEnvelope}/>
							<SubHeading>Sales Email</SubHeading>
							<Paragraph>sales@didx.net</Paragraph>
						</div>
						<div className="w-full h-60 flex flex-col items-center justify-center bg-zinc-100 rounded-3xl px-8 sm:w-80 sm:h-56 xl:w-72">
							<FontAwesomeIcon className="text-[#2196f3] text-6xl" icon={faSkype}/>
							<SubHeading>Sales Skype</SubHeading>
							<Paragraph>salesdidx</Paragraph>
						</div>
						<div className="w-full h-60 flex flex-col items-center justify-center bg-zinc-100 rounded-3xl px-8 sm:w-80 sm:h-56 xl:w-72">
							<FontAwesomeIcon className="text-[#2196f3] text-6xl" icon={faWhatsapp}/>
							<SubHeading>Sales Whatsapp</SubHeading>
							<Paragraph>+1-415-912-0910</Paragraph>
						</div>
						<div className="w-full h-60 flex flex-col items-center justify-center bg-zinc-100 rounded-3xl px-8 sm:w-80 sm:h-56 xl:w-72">
							<FontAwesomeIcon className="text-[#2196f3] text-6xl" icon={faWhatsapp}/>
							<SubHeading>NOC Whatsapp</SubHeading>
							<Paragraph>+1-212-365-6919</Paragraph>
						</div>

						<h3 className="w-full text-center text-neutral-600 text-lg">Customer Service: Please login to your account, and click on Contact Us to make a trouble ticket.</h3>
						<h3 className="w-full text-center text-neutral-600 text-lg">We DO NOT provide phone support. (No Customer Service Provided without a Complaint Ticket)</h3>
					</section>
				</section>
			</StandardPage>
		</>
	)
}