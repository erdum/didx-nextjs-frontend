import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, SubHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Rates | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="xl:w-9/12">
					<Heading>Rates</Heading>
					<Paragraph>
						Each DID on DIDX is priced by the Vendor/Seller of the DID. This rate is not controlled by DIDX.
					</Paragraph>

					<SubHeading>Basic Membership:</SubHeading>
					<Paragraph>
						Basic membership on DIDX is free.
					</Paragraph>
					<Paragraph>
						Member gets 2 free DIDs to check DIDX services and to understand how the system works for 30 days.
					</Paragraph>
					<Paragraph>
						Member can not buy/sell DIDs and does not activate account.
					</Paragraph>

					<SubHeading>Regular Membership:</SubHeading>
					<Paragraph>
						Zero Setup Charge Zero Monthly Charge Seller does not pay a listing or brokerage fee. Monthly minimum quantity charge of $50/month when buyers do not have at least 50 purchased numbers OR domestic USA sellers have at least 500 numbers or international sellers have at least 50 numbers for sale on DIDX
					</Paragraph>

					<SubHeading>DID Charges:</SubHeading>
					<Paragraph>
						The did Charges are <Anchor href="/did">listed here</Anchor>
					</Paragraph>

					<SubHeading>Listing Charges:</SubHeading>
					<Paragraph>
						There is NO CHARGE to list your numbers on DIDX to sell them.
					</Paragraph>
					<Paragraph>
						DIDX is for wholesale customers only. If you need fewer than 50 numbers please visit <Anchor href="https://phone2net.com">phone2net.com</Anchor> or <Anchor href="https://virtualphoneline.com">virtualphoneline.com</Anchor>
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}