import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading, SmallHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Buy DIDS For Your Customers | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="xl:w-9/12">
					<SubHeading>
						DIDx.net empowers VoIP phone companies to offer phone service from different areas of the world to its end-users.
					</SubHeading>

					<SmallHeading>No Membership fee:</SmallHeading>
					<Paragraph>There is no Membership fees to register yourself at DIDx.</Paragraph>

					<SmallHeading>Free API (Application Programming Interface):</SmallHeading>
					<Paragraph>
						Our FREE web API service will display all available DID’s inside your web or switch application, grabbing the database in real time basis. This empowers you to offer these global phone numbers to everyone of your customers.
					</Paragraph>

					<SmallHeading>Instant Activation:</SmallHeading>
					<Paragraph>
						All the DID’s we offer are INSTANTLY turned on for you, without any delays, with our WYSIWYG <Anchor href="/coverage">live available inventory system</Anchor>.
					</Paragraph>

					<SmallHeading>36 Hrs FREE DID Trial:</SmallHeading>
					<Paragraph>
						Buy any DID from DIDX for 36 hours free of charge. Try the quality of the service on it. Then remove it for a instant refund before 36 hours if you are not 100% satisfied.
					</Paragraph>

					<SmallHeading>Quality Guarantee:</SmallHeading>
					<Paragraph>
						Each DID you get from DIDx.net is tested by our DIDtester ™ software.
						<br />
						Each DID is rated by quality of the service and provider.
						<br />
						You can choose to display all or only the best quality DID’s to your customers.
					</Paragraph>

					<SmallHeading>Money Back Guarantee:</SmallHeading>
					<Paragraph>
						DIDX offers Money Back guarantee on any DID that does not work for more than 3 days in a row.
					</Paragraph>

					<SmallHeading>Low Price DID Numbers:</SmallHeading>
					<Paragraph>
						DIDX offers low setup and monthly fee on the DID numbers. Check out DIDX rates and <Anchor href="/coverage">live available inventory system</Anchor>.
					</Paragraph>

					<SmallHeading>Low Commission Rates:</SmallHeading>
					<Paragraph>
						Variable commission rate, the more DID’s you buy, the less commission DIDX charges you.
					</Paragraph>

					<SmallHeading>Custom Application Development:</SmallHeading>
					<Paragraph>
						Custom support for your applications available to integrate DIDX API’s into your applications.
						<br />
						While paying by wire transfer or PayPal all transaction charges are to be borne by the customer. DIDX will recognize only net amounts received. It is customer’s responsibility to determine what, if any charges are being applied to the payment.
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}