import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, SubHeading, SmallHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'FAQ | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<Heading>
						FAQ
					</Heading>
					<Paragraph>
						<Anchor href="/faq-buyers">FAQ: For Buyers</Anchor>
					</Paragraph>
					<Paragraph>
						<Anchor href="/faq-sellers">FAQ: For Sellers</Anchor>
					</Paragraph>
					<SubHeading>
						General: Frequently Asked Questions
					</SubHeading>

					<SmallHeading>
						Question: What is DIDX?
					</SmallHeading>
					<Paragraph>
						Answer: DIDX is a DID number market for wholesale customers. Many call it “Ebay for DID” or “Arbinet for DID.” We call it, DIDXchange. DIDX is for wholesale VOIP service. providers (LEC’s, CLEC’s and IXC’s) eager to buy, sell, and trade their available DID numbering plan to others.
					</Paragraph>

					<SmallHeading>
						Question: Does DIDX offer a member manual?
					</SmallHeading>
					<Paragraph>
						Answer: Yes, you can download <Anchor href="/member-manual.ppt">Power Point format</Anchor>. <Anchor href="/member-manual.pdf">PDF format</Anchor>. and also here is <Anchor href="/manual">online manual</Anchor>.
					</Paragraph>

					<SmallHeading>
						Question: Is there any membership fee?
					</SmallHeading>
					<Paragraph>
						Answer: No membership fee. Inactive members do not do business on DIDX. To do business, one must activate the account first by following steps at <Anchor href="/interop">interop</Anchor>. Each active basic member starts with 2 free DID’s. For the buyer, a minimum of 50 DID’s purchased is required. For new sellers, as of March 25, 2008, a minimum of 50 international DIDs for sale or a minimum of 500 USA/UK DID is required. Otherwise, a monthly minimum service fee of $50 will apply per month in each of the 3 cases listed.
					</Paragraph>

					<SmallHeading>
						Question: How do I check the DIDX services?
					</SmallHeading>
					<Paragraph>
						Answer: Each member receives 2 free DID numbers at signup to test and use. In addition, a DIDX member purchases a DID and may test the DID for 36 hours. If during that 36 hours, he does not like the quality, he may return the DID by deleting it from his account. In order to get a full refund, he must delete the DID before 36 hours.
					</Paragraph>

					<SmallHeading>
						Question: Can I port my did number away from DIDX?
					</SmallHeading>
					<Paragraph>
						Answer: Yes. <Anchor href="/lnp">Contact the carrier to which you are porting the numbers to in order to get their directions</Anchor>.
					</Paragraph>

					<SmallHeading>
						Question: Can I port my number TO DIDX ?
					</SmallHeading>
					<Paragraph>
						Answer: <Anchor href="/lnp">Please click here to get the full details about</Anchor>.
					</Paragraph>

					<SmallHeading>
						Question: When will the Beta mode of DIDX end?
					</SmallHeading>
					<Paragraph>
						Answer: “Beta” means final product test. DIDX began August 1, 2005. The DIDX system has been re-engineered 3 times and will continue to evolve to better serve the growing numbers in DIDX wholesale provider membership.
						DIDX has 9000 + members who buy, sell and trade with success. See the up-to-date list at <Anchor href="/coverage">coverage</Anchor> and more available on request.
					</Paragraph>

					<SmallHeading>
						Question: How does DIDX make money?
					</SmallHeading>
					<Paragraph>
						Answer: DIDX charges a transaction fee to the Buyer. The Transaction fee is charged based on the qty of the numbers a user buy.
					</Paragraph>

					<SmallHeading>
						Question: How does DIDX make money?
					</SmallHeading>
					<Paragraph>
						Answer: DIDX charges a transaction fee to the Buyer. The Transaction fee is charged based on the qty of the numbers a user buy.
					</Paragraph>

					<SmallHeading>
						Question: I’ve forgotten my password. How can I get it back?
					</SmallHeading>
					<Paragraph>
						Answer: Go to <Anchor href="/reset-password">reset-password</Anchor>. Enter your account number or email address to get your password.
					</Paragraph>

					<SmallHeading>
						Question: How much time will it take for my number to be active?
					</SmallHeading>
					<Paragraph>
						Answer: Instant, all numbers are instantly activated to you when you purchased them unless they are special order numbers, which you will be notified of before you buy.
					</Paragraph>

					<SmallHeading>
						Question: What is the procedure for DIDX members to recieve customer support?
					</SmallHeading>
					<Paragraph>
						Answer: Platinum DIDX members receive customer support via telephone, email, IM and DIDX account ticketing system. The remaining valued DIDX members will receive support via the DIDX account ticketing system. Login to your account, click Contact Us, and enter your technical and customer support requests there.
					</Paragraph>

					<SmallHeading>
						Question: Do you offer any API service for integration of DIDX in my own software?
					</SmallHeading>
					<Paragraph>
						Answer: We offer <Anchor href="https://kb.didx.net/list-of-api-functions/">API</Anchor> for you to integrate into your software application for managing your DID’s on DIDX. You can use these <Anchor href="https://kb.didx.net/list-of-api-functions/">API's</Anchor> to buy or sell the DID numbers.
					</Paragraph>

					<SmallHeading>
						Question: Why I received less amount when I pay via Paypal?
					</SmallHeading>
					<Paragraph>
						Answer: DIDx uses PayPal as a payment method for receiving payments from DIDx members. Any fee incurred by Paypal will be deducted from the total payment sent and the net amount will be added to the DIDx member account.
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}
