import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, SubHeading, SmallHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'DIDX Case Study | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<Heading>
						SAMPLES/ POSSIBLE USES
					</Heading>

					<SubHeading>
						SACS INTERNATIONAL
					</SubHeading>
					<SmallHeading>
						Case Study: Obama and DIDX Members Leverage the Blackberry.
					</SmallHeading>
					<Paragraph>
						SACS is an international steel trading company with 14 locations worldwide and 200 business clients. The key necessity is to increase their global presence. They already had a Cisco unified communications backbone for their IP PBX with integration of RIM (Research in Motion) Blackberry MVS (Mobility Voice Suite). The One Number Reach enables them to have one phone number ring at the user’s desk phone and the Blackberry simultaneously. With a Blackberry connected to the PBX plus a laptop and data card in the hands of each of their global sales staff, all can access and use the company’s CRM and ERP systems.
					</Paragraph>
					<Paragraph>
						“DIDX has been a great asset in accessing global DIDs for a virtual presence. We’ve been assured of quality by choosing DIDs from DIDX sellers with vendor rating of higher rating 5-8. We’re also able to control those DIDs from one central location, very convenient,“ states Omar Ali Chohan, SACS’ CFO and Vice President. “DIDX has truly assisted in exponential growth of the company.“
					</Paragraph>

					<SubHeading>
						CALL WITH US
					</SubHeading>
					<SmallHeading>
						Callwithus and DIDXchange Case Study Wins Internet Telephony Excellence 2007.
					</SmallHeading>
					<Paragraph>
						Callwithus, headquartered in New Jersey, USA, began operation in late 2006, with a plan for a more user-friendly Internet Protocol-based communications service than the ones that its director Sergey Okhapkin had experience with. It established itself as a user-friendly choice for consumers and small businesses by using every day language on its website that could be easily understood. To truly set itself apart from the many VoIP company start-ups fiercely competing for business, it needed DID direct inward dialing local phone numbers from all over the world for its extremely diverse set of customers.
						<br />
						<Anchor href="https://blogs.didx.net/2007/09/callwithus-and-didxchange-case-study.html">
							Please click to learn more
						</Anchor>
					</Paragraph>

					<SubHeading>
						GLOBALVON
					</SubHeading>
					<SmallHeading>
						Case Study: Broadband Solution Communication Empowered by DID Number Peering.
					</SmallHeading>
					<Paragraph>
						Pensacola, FL, September 22, 2006 –(PR.com)– (This case study won the Internet Telephony Excellence Award for 2006) BroadBand Solution Communication’s end-users have a huge appetite for DID’s (phone numbers) both local and international. An example of a BSCOMM end-user: Company Z needs a Pakistan DID to ring over SIP to their English-speaking appointment takers. They need a Miami DID to ring their Spanish-speaking appointment takers. BSCOMM soon discovers the complicated interop and interconnect agreements of DID providers. Typically, a healthy deposit in the range of thousands is required. Minimum monthly DID purchase is huge. Picture the VoIP newcomer with effective and exciting marketing and customer service strategies, catering to a niche market with few funds to invest. The average DID setup is $16 and monthly fee $6.50 for even a USA number. BSCOMM experiences demands from its DID vendor for ever increasing purchase and length of DID setup period. The company needed just one “Pakistan DID” and received demand for a minimum purchase of 100 at $40 each plus the initial deposit and monthly minimum DID and MOU requirement. Just one of several scenarios occurring within one 24 hour period. Impossible!
					</Paragraph>

					<SubHeading>
						RUSSIAN COMPANY LLC
					</SubHeading>
					<SmallHeading>
						Russian Dotcom Success Story, The Crisis That Stimulated Demand for SIP Trunking Services.
					</SmallHeading>
					<Paragraph>
						In 1958, American Express (News – Alert) opened its representative office in Moscow. Thirty-three years later – in 1991 – the first Internet-enabled terminal was installed in Russia, powered by a dialup link to Helsinki, Finland, to put them online. Post-1998 saw tremendous growth in broadband access: from 64 kbit ADSL with metered bandwidth in 2000, to 25 Mbit symmetrical FTTH services in 2008.
						<br />
						<Anchor href="https://blogs.didx.net/2009/06/didx-make-money-while-you-sleep-without.html">
							Please click to learn more
						</Anchor>
					</Paragraph>

					<SubHeading>
						REVE SYSTEMS
					</SubHeading>
					<SmallHeading>
						Reve Systems and DIDX Partner to Deliver International Phone Numbers.
					</SmallHeading>
					<Paragraph>
						Wholesale DID phone number exchange player Super Technologies has partnered with Reve Systems (News – Alert) to enable local international phone numbers from 55 nations on the iTel Mobile Dialer.
					</Paragraph>

					<SubHeading>
						VOIP SWITCH
					</SubHeading>
					<Paragraph>
						VoipSWITCH is known as a future-thinking, high quality soft switch, IP PBX and mobile voip application provider. Their customer is excellent and has a great reputation worldwide. See them mixing with their clients and suppliers at conferences worldwide from Dubai to Singapore to Barcelona to Hannover to Los Angeles. The company needed to satisfy its clients increasing demand for global presence and chose DIDX to make that happen.
						<br />
						<Anchor href="https://www.tmcnet.com/">
							See more on TMCNET
						</Anchor>
					</Paragraph>

				</section>
			</StandardPage>
		</>
	)
}
