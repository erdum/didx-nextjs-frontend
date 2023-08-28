import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Paragraph } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Abuse | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<Paragraph>
						1) DIDX at any given time may require the DIDX Buyer Member to provide End User information to DIDX which may include some or all of the following detail
					</Paragraph>
					<ul className="list-disc pl-8 mb-6">
						<li>Full name.</li>
						<li>Government issued ID (such as Passport or National ID).</li>
						<li>Contact Phone number.</li>
						<li>Email address within 24 – 48 hours.</li>
						<li>Payment methods details.</li>
					</ul>
					<Paragraph>
						2) If there is a subpoena on any DID number or even if Enforcement agencies will contact us, asking for the details on any particle DID number, we will give them all the information we have without prior confirmation to DIDx member.
					</Paragraph>
					<Paragraph>
						DIDx.net reserves the right to terminate Service at DIDx discretion. DIDx may discontinue the Service, for any reason including without limitation, if it has reason to believe that there have been attempts to hack, disrupt the system, fraudulent activity or that the Service is being misused in any way.
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}
