import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, SubHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Buyer Interoperability Process | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="xl:w-9/12">
					<Heading>DIDX Interoperability Test</Heading>
					<Paragraph>
						Interop (interoperability) enables you to test between your and DIDX networks before activating business with DIDxchange.
					</Paragraph>
					<Paragraph>
						See how DIDX works now; we offer each DIDX member 2 free DID numbers, one UK DID and one USA DID, temporarily for testing.
					</Paragraph>
					<Paragraph>
						These DIDs test successfully. They are pointed at <Anchor>radio@us1.didx.net</Anchor> that plays an IVR when called. Check the numbers by calling them to see they are alive and reachable from your telephone.
					</Paragraph>
					<Paragraph>
						Browse a copy of the DIDX member <Anchor href="/manual">manual</Anchor> in PDF. Watch the DIDX demo <Anchor href="https://www.youtube.com/user/didexchange">videos</Anchor> and search the <Anchor href="https://kb.didx.net">knowledge base</Anchor>.
					</Paragraph>

					<SubHeading>Requirements</SubHeading>
					<Paragraph>
						1. A SIP or IAX2 server / Switch.
					</Paragraph>
					<Paragraph>
						2. A SIP or IAX2 account working on your desktop or IP Soft Phone.
					</Paragraph>

					<Heading>Summary Of Testing Steps:</Heading>
					<Paragraph>Interop Test process consists of 5-steps.</Paragraph>
					<Paragraph>
						Step 1: Get the FREE numbers.<br />
						Step 2: Check the numbers on your server.<br />
						Step 3: DTMF and ECHO Test.<br />
						Step 4: Fax or scan and Upload the DIDX service agreement and credit card agreement with copies of related documents.<br />
						Step 5: Activation call and then your account is activated. See below more details of each step.
					</Paragraph>

					<Heading>Step First: Getting Free Numbers</Heading>
					<SubHeading>Aim: To learn the process to buy numbers via DIDX.</SubHeading>
					<Paragraph>
						A. Login to your account.<br />
						B. Click on Tool Box button on the left Menu Bar.<br />
						C. Click on Get Free DID button.<br />
						D. Two DIDs will then be allocated on your account.<br />
						E. Click on My Purchased DIDs button in the left panel to see the two free numbers.
					</Paragraph>

					<Heading>Step 2: Checking the free phone numbers on your server</Heading>
					<SubHeading>AIM: To make sure DIDX numbers are working with your SIP/IAX Server.</SubHeading>
					<Paragraph>
						A. Click on My Purchased Numbers.<br />
						B. See your free DID’s listed.<br />
						C. Call the numbers. Hear a music or IVR sound. The demonstrates the numbers work fine.<br />
						D. Click in the row of the first number where it says <Anchor>radio@us1.didx.net</Anchor> Re-point it to the SIP or IAX2 address of your server.<br />
						E. If you have a firewall, please allow all of our IPs before moving to the next step. You can find the IPs <Anchor href="/asterisk">here</Anchor>.<br />
						F. Call the phone number and talk on it for 5 minutes. Then, follow points A and F. under this Step 2 before going to point G.<br />
						G. Keep at least one of the FREE DID pointed to your office SIP/IAX system, so we can make test call on it and reach you if needed.
					</Paragraph>

					<Heading>STEP 3: DTMF and Echo Test</Heading>
					<SubHeading>AIM: To make sure that DTMF works on DIDX phone numbers for you.</SubHeading>
					<Paragraph>
						A. Point the DID’s on <Anchor>dtmftest@us1.didx.net</Anchor><br />
						B. Call your free DID numbers. Hear the greeting, which will explain the reason for this test, followed by a beep.<br />
						C. Use the keypad of your touch tone phone to dial each number. You will hear the IVR repeat each number you press, if the DTMF is passing correctly on the DID number.
					</Paragraph>


					<Heading>STEP 4: Documentation</Heading>
					<Paragraph>
						A. Download the Service Agreement. <a target="_blank" className="text-[#2196f3] font-semibold" href="/terms-of-service-agreement.pdf">Click Here to Download Newest Version to Buy</a><br />
						B. Login to your DIDX account, and click on Profile button on the left menu bar.<br />
						C. Upload the agreement, filled, signed, and initialed on each page, via the Upload document section in the PROFILE section of your DIDX account.<br />
					</Paragraph>

					<Heading>STEP 5: Activation Call</Heading>
					<SubHeading>AIM: To make sure you understand how DIDX works and to participate in a brief survey.</SubHeading>
					<Paragraph>
						A. Make sure to complete the profile section of your DIDx.net account.<br />
						B. Use the Contact Us/Email Us button under your account and let us know your phone number and convenient dates/times for us to call you to get your account activated.<br />
						C. Be sure to include your DIDX account number in your message. We will verify your account, discuss your DID needs and activate your account.<br />
					</Paragraph>
					<Paragraph>
						As an active member of DIDX, you can add us on MSN, Yahoo or Skype assistance regarding buying and/or selling DID phone numbers on DIDX.
					</Paragraph>
					<Paragraph>
						Your account should now be active, and you will be able to purchase and sell DIDs from the DIDX network.<br />
						<span className="font-semibold">Welcome aboard happy trading.</span>
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}