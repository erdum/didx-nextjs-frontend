import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading, Paragraph } from '../layout-components/standardPage'

export const metadata = {
	'title': 'CLEC Company | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<SubHeading>
						CLEC company
					</SubHeading>
					<Paragraph>
						For Internet Telephone Service providers ( Clec and Local Loop ).
					</Paragraph>
					
					<SubHeading>
						CLEC SELLS SCENARIO:
					</SubHeading>
					<Paragraph>
						CLECs (competitive local exchange carriers) can operate as sellers of DID phone numbers on DIDX. If they are Internet telephone service providers can offer and sell incoming service to 1000s of other providers who use DIDX, generating increased ARPU.
					</Paragraph>

					<SubHeading>
						CLEC BUYS SCENARIO:
					</SubHeading>
					<Paragraph>
						CLECs can also operate as buyers of USA and international DID phone numbers on DIDX and resell to the CLECs’ direct user base. They can offer their own direct customer base both USA and international phone numbers in an instant without any investment, thereby not only satisfying current users but also increasing customer sales and retention.
					</Paragraph>
					<Paragraph>
						DIDX provides full API/web services to integrate its database with the CLEC’s front end engine, whether sharing the CLEC’s DID phone numbers for sale on DIDX OR displaying all DIDX available numbers from 60+ countries to the CLEC’s customers on the CLEC’s website. DIDX is not visible to the CLEC’s customers. The CLEC’s customer selects a number via the API on the CLEC’s website or app, and it is instantly routed to the CLEC’s switch and then, is delivered to its customer over the IP network. CLECs control the billing price of the phone number being sold to its customer. DIDX charges only the wholesale price to the CLEC.
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}
