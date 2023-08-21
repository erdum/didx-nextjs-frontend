import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faThumbsUp,
	faFileLines,
	faNetworkWired,
	faTty,
	faMobile,
	faFileInvoiceDollar,
	faWarehouse,
	faPlus,
	faWifi,
} from "@fortawesome/free-solid-svg-icons"
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, SubHeading, Paragraph } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Features DIDX Offers | DIDX'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full flex flex flex-wrap justify-center gap-12 sm:px-8">
					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-2xl p-2 rounded-full" icon={faThumbsUp} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-700 mb-2">100% DIDX GUARANTEE</h3>
							<p className="text-neutral-600">Buy with confidence with DIDX. If any DID does not work for more than 3 days in a row, we do not ay the seller, and we do not charge the buyer.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-2xl p-2 px-3 rounded-full" icon={faFileLines} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">ONLINE INSTANT CDR FOR 5 YEARS</h3>
							<p className="text-neutral-600">The seller members and the buyer members see the same CDR for most recent five years of the purchase of the number. The buyer sees only its CDR, not the CDR of previous buyer.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-xl p-2 rounded-full" icon={faNetworkWired} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">FREE APIS</h3>
							<p className="text-neutral-600">Use our FREE APIs to integrate DIDX on your own website/software to buy and sell DID’s directly from your application/website. Click here for details.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-2xl p-2 rounded-full" icon={faTty} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">MULTIPLE CODECS</h3>
							<p className="text-neutral-600">DIDX supports multiple codes including ILBC, G711A, G711U, G729, G723, G726 and GSM. You can buy or sell using any of these codes.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-2xl p-2 px-3 rounded-full" icon={faMobile} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">INSTANT RING TO PATH CHANGE</h3>
							<p className="text-neutral-600">You can instantly change the ring to address of your DID number using the web site or the API.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-2xl p-2 px-3 rounded-full" icon={faFileInvoiceDollar} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">INSTANT BILLING SOLUTION</h3>
							<p className="text-neutral-600">You no longer need to entertain small customers who want just a few DIDs.DIDX provides an instant billing platform for the seller to sell DIDs via DIDX, and get paid by DIDX on the setup, monthly, per minute and per channel bases.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-xl p-2 py-3 rounded-full" icon={faWarehouse} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">REALTIME STOCK</h3>
							<p className="text-neutral-600">See the DID stock offered by the DIDX seller members from around the world, available to you to be purchased instantly.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-2xl p-2 rounded-full" icon={faPlus} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">REQUEST DIDS</h3>
							<p className="text-neutral-600">Request a DID number from anywhere in the world, and you will be notified as soon as it is made available by any of our 16,500+ members. Sign Up now to Request.</p>
						</div>
					</section>

					<section className="xl:w-5/12 flex items-start gap-x-4">
						<FontAwesomeIcon className="bg-[#2196f3] text-white text-xl p-2 py-3 rounded-full" icon={faWifi} />
						<div className="flex flex-col items-start justify-start">
							<h3 className="text-xl text-neutral-600 mb-2">MULTIPLE PROTOCOL SUPPORT</h3>
							<p className="text-neutral-600">DIDx supports SIP, h423 and IAX for buyers and IAX2 and SIP for sellers of the DID numbers.</p>
						</div>
					</section>

				</section>
			</StandardPage>
		</>
	)
}