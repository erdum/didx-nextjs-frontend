import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Get A Reward By Reporting Bug | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="xl:w-9/12">
					<SubHeading>Report Bug</SubHeading>
					<Paragraph>
						We want you to be a part of our service, and help us improve it, If you have Found a BUG on our web site ? Report the bug and we will credit your account with <span className="font-semibold text-lg">$25*</span>.
					</Paragraph>

					<Paragraph>
						Simply Login to your account, and report the bug, If it is a bug then we will credit you with <span className="font-semibold text-lg">$25*</span>.
					</Paragraph>

					<Paragraph>
						<span className="font-semibold text-lg">* Discretion of our management</span>1
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}