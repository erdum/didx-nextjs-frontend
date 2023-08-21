import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, SmallHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Sell DIDS To Us | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="xl:w-9/12">
					<Heading>Sell Your DIDS To Us</Heading>
					<Paragraph>
						DIDX provides the most profitable marketplace to sell your DIDs to thousands of members who are carriers, telecoms, and new VoIP companies. They are the buyers and join DIDX to buy service in the areas that you offer DID service.
					</Paragraph>

					<SmallHeading>Payment Guarantee:</SmallHeading>
					<Paragraph>DIDX guarantees your payments as long as your DIDs work.</Paragraph>

					<SmallHeading>Ease Of Service</SmallHeading>
					<Paragraph>
						You deal with one entity DIDX. You do not have to teach your customers how to configure or route to different locations. DIDX does it for you.
					</Paragraph>

					<SmallHeading>Huge Market Space:</SmallHeading>
					<Paragraph>
						By joining us, you have 17,500+ web sites with your numbers for sale. This will increase the chance of selling your DID by several hundred times.
					</Paragraph>

					<SmallHeading>You Are In Control:</SmallHeading>
					<Paragraph>
						You decide the sale price and features you are willing to offer on your DID. We will be your BEST SALES ARM in the business.
					</Paragraph>

					<SmallHeading>No Listing Charges:</SmallHeading>
					<Paragraph>
						DIDX does not charge you anything to list your numbers on the exchange. DIDX tests your numbers, grades them, sells them, and does not charge you any commission. DIDX commissions are paid by the buyer.
					</Paragraph>

					<SmallHeading>No Membership Fee:</SmallHeading>
					<Paragraph>
						DIDX Membership is FREE to sellers. Enlist at least 50 DID number that are in geographical areas outside the United States or 500 if they are United States’ area codes.
					</Paragraph>

					<SmallHeading>Bulk Upload Feature:</SmallHeading>
					<Paragraph>
						Bulk Upload your entire inventory using XLS file uploader or our free API.
					</Paragraph>

					<SmallHeading>Free API:</SmallHeading>
					<Paragraph>
						Our <Anchor href="https://kb.didx.net/list-of-api-functions/">FREE API</Anchor> allows you to enlist your inventory on the DIDX system, in a jiffy. Add or delete them from the DIDX system, as you sell them directly from your own system. One time provisioning: DIDX takes care of the interop and provisioning of the DID number from its end to the other ITSP.
					</Paragraph>

					<SmallHeading>Free Codec Convertor:</SmallHeading>
					<Paragraph>
						DIDX offers FREE codec conversion of all the DIDs sold via DIDX. DIDX supports g723, g726, g729, g711, Speex, and ILBC.
					</Paragraph>

					<SmallHeading>Free Protocol Convertor:</SmallHeading>
					<Paragraph>
						DIDX offers FREE protocol conversion of all the DID’s sold via DIDX. Buyers can convert the DIDs from SIP to IAX2 or IAX2 to SIP. H323 coming soon.
					</Paragraph>


					<Heading>How To Make Money From DIDX?</Heading>
					<SmallHeading>For Mobile Phone Operator: (Outside North America)</SmallHeading>
					<Paragraph>A goal for a mobile operator is to have as many subscribers as possible, with the least possible cost. The ARPU is based on the incoming calls and outgoing calls but most of the revenue is made when a call comes in.
					</Paragraph>
					<Paragraph>The acquisition cost of this customer is becoming higher and higher as the competition become more intense.</Paragraph>

					<SmallHeading>For Internet Telephone Service providers: ( Clec and Local Loop )</SmallHeading>
					<Paragraph>
						As an Internet Telephone Service provider, you can now offer incoming service and generate more ARPU from your customers by not only offering US numbers but also offering global phone numbers in an instant without any investment.
					</Paragraph>

					<Anchor href="/mobile">Click here for more information</Anchor>
				</section>
			</StandardPage>
		</>
	)
}