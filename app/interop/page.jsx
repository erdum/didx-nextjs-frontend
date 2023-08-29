import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Buyer And Seller Interoperability Process | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="xl:w-9/12">
					<SubHeading>Buyer Interop Process</SubHeading>
					<Paragraph>
						Interop (interoperability) enables you and DIDX to test between your and DIDX networks before activating business with DIDxchange.
					</Paragraph>
					<Paragraph>
						Please note that DIDX requires you to offer at least 500 number to the Exchange in order to start selling. If you have a problem in that qty, Please contact us on <Anchor href="mailto:care@didx.net">care@didx.net</Anchor> with the reason and we will try take it with our management.
					</Paragraph>
					<Paragraph>
						They are pointed to DIDX that plays an IVR when called. Check the numbers by calling them to see they are alive and reachable from your telephone.
					</Paragraph>
					<Paragraph>
						Browse a copy of the DIDX member <Anchor href="/member-manual.pdf">manual</Anchor> in PDF. Watch the DIDX demo <Anchor href="https://www.youtube.com/user/didexchange">videos</Anchor> and search the <Anchor href="https://kb.didx.net">knowledge base</Anchor>.
					</Paragraph>
					<Anchor href="/buyer-interop">Click here for more information</Anchor>

					<SubHeading>Seller Interop Process</SubHeading>
					<Paragraph>
						Interop (interoperability) enables you and DIDX to test between your and DIDX networks before activating business with DIDxchange.
					</Paragraph>
					<Paragraph>
						Please note that DIDX requires you to offer at least 500 number to the Exchange in order to start selling. If you have a problem in that qty, Please contact us on <Anchor href="mailto:care@didx.net">care@didx.net</Anchor> with the reason and we will try take it with our management.
					</Paragraph>
					<Paragraph>
						They are pointed to DIDX that plays an IVR when called. Check the numbers by calling them to see they are alive and reachable from your telephone.
					</Paragraph>
					<Paragraph>
						Browse a copy of the DIDX member <Anchor href="/member-manual.pdf">manual</Anchor> in PDF. Watch the DIDX demo <Anchor href="https://www.youtube.com/user/didexchange">videos</Anchor> and search the <Anchor href="https://kb.didx.net">knowledge base</Anchor>.
					</Paragraph>
					<Anchor href="/seller-interop">Click here for more information</Anchor>
				</section>
			</StandardPage>
		</>
	)
}