import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'About us | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section>
					<Heading>Who Are <span className="text-[#2196f3]">We</span>?</Heading>
					<Paragraph>
						DIDX is a Delaware based company since 2005, working in the field of Telecom solutions. More information on Super Technologies is on
						<Anchor href="https://supertec.com"> supertec.com</Anchor>
					</Paragraph>

					<Heading>Why Do We <span className="text-[#2196f3]">Do</span>?</Heading>
					<Paragraph>
						DIDX was created initially because we needed to buy phone numbers for our own services like <Anchor>ip-pabx.com</Anchor>, <Anchor>virtualphoneline.com</Anchor> and <Anchor>super-phone.com</Anchor> but when we went out there to look for numbers, no one was willing to sell in small qty and being a small company we needed smaller qty’s.
					</Paragraph>

					<Paragraph>
						So one of the vendor’s told us that we can not sell you less numbers because we do not have a billing system to sell you the numbers in small qty with and the answer from our team was CAN WE BULID SOMETHING for you to BILL US with ?
					</Paragraph>

					<Paragraph>
						We thought if we can solve this problem for them, there may be a few dozen other companies who want to use us for billing and maybe 50 or so more can eventually use DIDX, we did not know, that only in a few years over 30000 phone companies will use it and great names like Google, IBM and Microsoft will end up being our partners and customers.
					</Paragraph>

					<Heading>What Do We <span className="text-[#2196f3]">Do</span>?</Heading>
					<Paragraph>
						DID Exchange is a VOIP-based wholesale DID Phone Number marketplace which can and is used by Mobile Operators, LECs, ClECs, IXCs or other telecommunications service providers who offer or use any kind of PHONE NUMBERS in there network.
					</Paragraph>

					<Heading>Since <span className="text-[#2196f3]">When </span>We Are Doing This?</Heading>
					<Paragraph>
						Our Founder Rehan Allahwala who has beta tested for Net2phone in 1997 and worked with Jeff Pulver’s Free World Project # 1 has been around doing this since the birth of Voice of the Internet.
					</Paragraph>
					<Paragraph>
						He has invented services like www.virtualphoneline .com , Super-phone .com, Ip-pabx .com. Then in 2005 he came up with the Idea of DID Exchange, which eventually became DIDX and it becomes most successful of them all.
					</Paragraph>
					<Paragraph>
						DIDX was started in 2005 and formally launched in 2006 as a side project and now have over 25000 telecom companies as members.
					</Paragraph>

					<Heading>Recognition?</Heading>
					<Paragraph>
						DIDX has been honoured with many awards over the years from many countries, a list of which is here <Anchor href="/awards">Awards</Anchor>
					</Paragraph>

					<Heading>Team</Heading>
					<Paragraph>
						Our founder Rehan Allahwala call’s DIDX as an ACCIDENT, many people were behind the entire System like Mr Khurram Shafi, Umair Bari, Danish Moosa and Sajid who wrote DIDX as his internship project.
					</Paragraph>

					<Paragraph>
						Since then the system has been re-created, written and evolved over the years to become one of the largest Phone Number network of the world.
					</Paragraph>

					<Paragraph>
						You can visit our <Anchor href="/team">Team</Anchor> page to learn more about them
					</Paragraph>
				</section>

				<section>
					<Heading>Our Introduction</Heading>
					<iframe src="https://www.youtube.com/embed/9hkEt19FPDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</section>
			</StandardPage>
		</>
	)
}
