import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Heading, SubHeading, Paragraph, Anchor } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Seller Interoperability Process | DIDX'
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
					<Paragraph>
						3. A Free DIDX account. To Signup visit www.didx.net/signup.
					</Paragraph>

					<Heading>Summary Of Testing Steps:</Heading>
					<Paragraph>Interop Test process consists of few steps.</Paragraph>
					<Paragraph>
						Step 1: DTMF Test.<br />
						Step 2: Submit the rates you want to sell the numbers in price.<br />
						Step 3: Route the DID’s to number@sip4.didx.net<br />
						Step 4: Confirmation of our terms of service.<br />
						Step 5: Fax the DIDX service agreement and credit card agreement.<br />
						Step 6: Activation call.<br />
						Step 7: Uploading Number List.
					</Paragraph>

					<Heading>Step First: Route and Firewall Test</Heading>
					<SubHeading>AIM: To make sure you are reaching DIDX network.</SubHeading>
					<Paragraph>
						1. Route 1 DID number from your network to <Anchor>radio@us1.didx.net</Anchor><br />
						2. Call this number.<br />
						3. When you call this number you will hear a DIDX IVR, stating that the number is routed to our radio network.<br />
					</Paragraph>
					<Paragraph>
						Results Accepted: We expect that you should get a response from the IVR.
					</Paragraph>

					<Heading>Step 2: Proper Signaling Test</Heading>
					<SubHeading>AIM: To make sure that you are getting correct signals.</SubHeading>
					<Paragraph>
						1. Route 1 DID number from your network to <Anchor>number@sip4.didx.net</Anchor><br />
						2. Call this number.<br />
						3. When you call this number you will hear a Automated IVR, speak , This number is not in use, DIDX message 1234.<br />
					</Paragraph>
					<Paragraph>
						Results Accepted: We expect that you should get a response from our IVR and the IVR should respond to you with the above message showing that the number is not in use.
					</Paragraph>

					<Heading>STEP 3: DTMF TEST</Heading>
					<SubHeading>AIM: To make sure that DTMF works on our numbers for you.</SubHeading>
					<SubHeading>Note: If you do not wish to offer DTMF on your DID numbers, Please skip this step. But make sure you let us know before hand about this.</SubHeading>
					<Paragraph>
						1. Point the DID’s on <Anchor>dtmftest@us1.didx.net</Anchor><br />
						2. Call the DID number.<br />
						3. Hear a greeting, explaining to you about the test, followed by a beep.<br />
						4. At this point, enter from the number keypad of your phone. After dialing each number, hear the name of that number.<br />
						5. Enter 1, 2, 3, 4, 5, 6, 7, 8, 9 and 0 from your keypad. You will get each number back from our echo tester, showing that the DTMF is passing correctly on the DID number.<br />
						6. If you hear all the numbers, good news! Your DID’s support DTMF.
					</Paragraph>


					<Heading>STEP 4: Offer 5 Test DID Numbers to DIDX</Heading>
					<SubHeading>AIM: To make sure you know how to offer numbers via DIDX</SubHeading>
					<Paragraph>
						1. Route the Numbers Back to <Anchor>number@sip4.didx.net</Anchor><br />
						2 Login to your DIDX Account<br />
						3. Click on SELL DID.<br />
						4. Enter a Number that you wish to enter, If you are entering for United States enter with 1, IE: 12126555763<br />
						5. You will be told the proper area and market name of this area code, if there is an error on this, Please contact us via the contact us link, to update this information.<br />
						6. Then Click Next and Enter the Rates that you wish to offer your numbers to be sold to DIDX.<br />
					</Paragraph>

					<Heading>STEP 5: Confirmation of Our Terms of Service</Heading>
					<SubHeading>AIM: To make sure you read the terms of service, and understand how DIDX works.</SubHeading>
					<Paragraph>
						1. Make sure you have completed steps 1-4.<br />
						2 Login to your account. Click on <Anchor href="/contact-us">Contact us</Anchor><br />
						3. This is your communication location with DIDX Care Team. Each time you report at <Anchor href="/contact-us">Contact us</Anchor>, an email goes to the DIDX Care Team. Please use this location for all communication. A permanent record is kept for your view.<br />
						4. Please understand the following statement, copy it or retype it, edit it with your name, company name and free DID numbers. Agree to it. Click “Contact us” in your DIDX account, and paste the completed message there and click Submit.<br />
					</Paragraph>


					<Paragraph>
						I FIRST NAME LAST NAME have tested DID numbers XXXXXX and XXXXXX on behalf of my company COMPANY NAME, and those DID numbers are working to our network when we receive the calls. We understand that DIDX is a wholesale platform. As of {new Date().toLocaleString('en-US', {month: 'long'})} {new Date().toLocaleString('en-US', {day: 'numeric'})}, {new Date().toLocaleString('en-US', {year: 'numeric'})}, as a new DIDX seller, we will offer at least 500 USA/UK DID Numbers or 50 international DID numbers on DIDx at all times OR we will be charged $50 service fee.<br />
						I understand that DIDx will not pay us for the month in which our numbers will not work for continuously 3 days. I understand that we will be paid after 45 days after the date of when the number has been sold when we invoice via the <Anchor href="/contact-us">Contact us</Anchor> button our DIDX portal in amounts that total more than $100. We have read, understood and agree to the <Anchor href="/terms">terms of services</Anchor> of DIDX and we are now ready to sell numbers on DIDX.
					</Paragraph>

					<Heading>STEP 6: Send The Agreement</Heading>
					<Paragraph>
						1. Download the Service Agreement. <a target="_blank" className="text-[#2196f3] font-semibold" href="/terms-of-service-agreement.pdf">Click Here to Download Newest Version to Buy</a><br />

						2. Share it with our support team via <Anchor href="/contact-us">Contact us</Anchor>
					</Paragraph>

					<Heading>STEP 7: Activation Call</Heading>
					<SubHeading>AIM: To make sure you understand how DIDX works and to participate in a brief survey.</SubHeading>
					<Paragraph>
						1.Call us at 1-408-884-1966 between 9am to 5pm Central US Time.<br />
						2.Ask for Anas or Allision.<br />
						3.Give your DIDX account number. We will verify your account, discuss your DID needs and activate your DIDX account.
					</Paragraph>
					<Paragraph>
						As an active member of DIDX, you can <Anchor href="/contact-us">contact us</Anchor> assistance regarding buying and/or selling DID phone numbers on DIDX.
					</Paragraph>
					<Paragraph>
						<span className="font-semibold">Your account should now be active, and you will be able to Sell DID’s via the DIDX network. Welcome aboard & happy trading.</span>
					</Paragraph>
				</section>
			</StandardPage>
		</>
	)
}