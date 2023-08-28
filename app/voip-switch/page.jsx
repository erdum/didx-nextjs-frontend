import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, SubHeading, SmallHeading, Paragraph, Table, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'VOIP Switch | DIDX'
}

const headings = ["*IP Addresses", "*DNS"]

const values = [
  ["98.101.50.4", "sip4.didx.net"],
  ["67.228.182.162", "sip8.didx.net"],
  ["66.228.114.228", "sip10.didx.net"],
  ["159.203.27.198", "ca.didx.net"],
  ["188.166.168.173", "eu2.didx.net"],
  ["46.101.80.13", "eu3.didx.net"],
  ["198.199.87.53", "us1.didx.net"],
  ["162.243.107.173", "us2.didx.net"]
]


export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<Heading>
						How to use DID from DIDX on <Anchor href="https://voipswitch.com">voipswitch.com</Anchor>
					</Heading>
					<Paragraph>
						This has been provided to us by voipswitch support team.
					</Paragraph>
					<Paragraph>
						In ‘GW clients’ menu you need to create a new client, with the following Parameters:
					</Paragraph>
					<Paragraph>
						In ‘login’ and ‘password’ you put whatever you want.
					</Paragraph>
					<Paragraph>
						In ‘IP numbers’ you need to add all the didx.net IP addresses.
					</Paragraph>

					<SubHeading>
						Our IP addresses are:
					</SubHeading>
					<Table headings={headings} values={values}/>

					<Paragraph>
						Check the box ‘PIN source’ if you want to use the voipswitch IVR without DID’s
					</Paragraph>

					<Paragraph>
						Check the box ‘active’
					</Paragraph>

					<Paragraph>
						Uncheck the box ‘Authorize by login/password’
					</Paragraph>

					<Paragraph>
						In ‘tariff’ choose a special tariff such that you do not bill calls coming from DIDX
					</Paragraph>

					<Paragraph>
						Add some funds to the account. From now the calls sent from the provider are reaching the voipswitch.
					</Paragraph>

					<Paragraph>
						The next step depends on what you want to achieve, in order to use them for calling cards the DNIS must be pointed to proper IVR scenario in the dialing plan. For exmaple set the uri in didx web page to be 1111@yourvoipswitchaddress It will cause that all calls going to the DID will appear on voipswitch with dnis 1111. Add this number into the dialing plan and point to the IVR.
					</Paragraph>

					<Paragraph>
						Mapping the DID to a user:
					</Paragraph>

					<Paragraph>
						Add the DID into the dialing plan, select “Internal gatekeeper” or “pc2phone clients”
					</Paragraph>

					<Paragraph>
						checkbox and then from the list of the available users pick the one to which the DID will be assigned.
					</Paragraph>

					<Paragraph>
						Voipswitch and DIDx announce exclusive offer for voipswitch customers.
					</Paragraph>

					<Paragraph>
						Order 1000 phone numbers from the USA for as little as $150 per month!!!
					</Paragraph>

					<Paragraph>
						Allow your clients to experience the benefits of the next generation telephony.
					</Paragraph>

					<Paragraph>
						For only 15 cents per month per number you can offer your clientele incoming calls to their VoIP devices.
					</Paragraph>

					<SmallHeading>
						How it works:
					</SmallHeading>

					<Paragraph>
						1. Purchase a block of US numbers from DIDx
					</Paragraph>

					<Paragraph>
						2. Import the block to Voipswitch via its DID API ( a very simple procedure)
					</Paragraph>
					
					<Paragraph>
						3. Configure the online Sign Up component to use DID phone number as a username for the newly created account.
					</Paragraph>

					<Paragraph>
						4. Set the imported US numbers prefix as free in the tariff section on voipswitch.
					</Paragraph>

					<Paragraph>
						5. Bill your customers anywhere from $5 to 10$ a month per number. When a new user signs up from your website an account will be created with one of the US numbers as the user’s login automatically. The newly created client can register to voipswitch from a VoIP device or a mobile softphone. Instantaneously the account is set up to receive calls. Incoming calls to the US phone number will trigger a standard ringing tone on the VoIP softphone. No additional configuration is required. An additional benefit to your subscribers is that if the US numbers from your block are set to be free of charge within your voipswitch, then all your users will be able to call each other for free irrespective of their geographical location!
					</Paragraph>
						
					<Paragraph>
						For more details please check this <Anchor href="https://www.youtube.com/watch?v=iew-LVDVbLs">video</Anchor>:
					</Paragraph>

					<Paragraph>
						For any further support, Please contact
					</Paragraph>

					<Paragraph>
						Krzysztof Oglaza Tel: +4-860-031-6058<br />
						YahooID: koglaza<br />
						Email: chris@voipswitch.com
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}
