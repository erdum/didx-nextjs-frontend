import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SmallHeading, Paragraph } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Elastix | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<SmallHeading>
						Step 1: Click on PBX
					</SmallHeading>
					<SmallHeading>
						Step 2: Click on Trunks
					</SmallHeading>
					<SmallHeading>
						Step 2: Click on add SIP Trunk
					</SmallHeading>
					<img src="/elastix-page-banners/step1.jpg" className="mx-auto w-full my-6 sm:w-3/5" />
					<SmallHeading>
						Step 4: Give the Trunk Name and Outbound Caller ID
					</SmallHeading>
					<img src="/elastix-page-banners/step2.jpg" className="mx-auto w-full my-6 sm:w-3/5" />
					<SmallHeading>
						Step 5: Set the Outgoing and Incoming Settings
					</SmallHeading>
					<SmallHeading>Outgoing Settings:</SmallHeading>
					<Paragraph>
						Trunk Name: DIDX
						Peer Details:
						Host: Ip Address
						Type: Peer
					</Paragraph>
					<SmallHeading>Incoming Settings:</SmallHeading>
					<Paragraph>
						User Context: DIDX
						User Details:
						Host: Ip Address
						Type: Peer
					</Paragraph>
					<SmallHeading>
						Step 6: Set registration settings
					</SmallHeading>
					<img src="/elastix-page-banners/step3.jpg" className="mx-auto w-full my-6 sm:w-3/5" />
					<SmallHeading>
						Step 7: Click on Inbound routes
					</SmallHeading>
					<img src="/elastix-page-banners/step4.jpg" className="mx-auto w-full my-6 sm:w-3/5" />
					<img src="/elastix-page-banners/step5.jpg" className="mx-auto w-full my-6 sm:w-3/5" />
					<img src="/elastix-page-banners/step6.jpg" className="mx-auto w-full my-6 sm:w-3/5" />
				</section>
			</StandardPage>
		</>
	)
}
