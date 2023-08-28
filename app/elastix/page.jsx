import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SmallHeading, Paragraph } from '../layout-components/standardPage'
import Image from 'next/image'
import step1Image from '../../public/elastix-page-banners/step1.jpg'
import step2Image from '../../public/elastix-page-banners/step2.jpg'
import step3Image from '../../public/elastix-page-banners/step3.jpg'
import step4Image from '../../public/elastix-page-banners/step4.jpg'
import step5Image from '../../public/elastix-page-banners/step5.jpg'
import step6Image from '../../public/elastix-page-banners/step6.jpg'

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
					<Image src={step1Image} className="mx-auto w-full my-6 sm:w-3/5"/>
					<SmallHeading>
						Step 4: Give the Trunk Name and Outbound Caller ID
					</SmallHeading>
					<Image src={step2Image} className="mx-auto w-full my-6 sm:w-3/5"/>
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
					<Image src={step3Image} className="mx-auto w-full my-6 sm:w-3/5"/>
					<SmallHeading>
						Step 7: Click on Inbound routes
					</SmallHeading>
					<Image src={step4Image} className="mx-auto w-full my-6 sm:w-3/5"/>
					<Image src={step5Image} className="mx-auto w-full my-6 sm:w-3/5"/>
					<Image src={step6Image} className="mx-auto w-full my-6 sm:w-3/5"/>
				</section>
			</StandardPage>
		</>
	)
}
