import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Paragraph, Table } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Channel Based DIDS Pricing | DIDX'
}

const headings = ['Country', 'Extra Channel Setup Charges', 'Extra Channel Monthly Recurring Charges', 'DID Setup Price', 'DID Per Month Price'];

const values = [
  ['Anguilla', '$0', '$12', '$1.25', '$1.25'],
  ['Argentina', '$15', '$23.50', '$1', '$2.52'],
  ['Australia', '$0', '$5', '$1', '$3.40'],
  ['Austria', '$15', '$23.50', '$1', '$3.95'],
  ['Belgium', '$15', '$23.50', '$4', '$5'],
  ['Brazil', '$15', '$23.50', '$0', '$3'],
  ['Canada', '$0', '$15', '$0', '$0.70'],
  ['Chile', '$15', '$23.50', '$1', '$6.50'],
  ['Colombia', '$0', '$10', '$1', '$12.50'],
  ['Costa Rica', '$0', '$10', '$1', '$10'],
  ['Cyprus', '$15', '$23.50', '$1', '$4.75'],
  ['Czech Republic', '$15', '$23.50', '$1', '$5'],
  ['Dominican Republic', '$0', '$10', '$1', '$5.63'],
  ['Egypt', '$10', '$10', '$20.90', '$20'],
  ['El Salvador', '$15', '$23.50', '$8', '$9'],
  ['France', '$0', '$10', '$0', '$0.19'],
  ['Germany', '$2', '$8', '$1', '$5'],
  ['Ghana', '$0', '$5', '$18', '$15'],
  ['Guatemala', '$0', '$10', '$1', '$12.50'],
  ['Hong Kong', '$0', '$5', '$1', '$5.50'],
  ['Israel', '$15', '$23.50', '$1', '$4.75'],
  ['Italy', '$15', '$23.50', '$1', '$3.50'],
  ['Jamaica', '$0', '$5', '$22', '$22'],
  ['Japan', '$15', '$23.50', '$1', '$4.75'],
  ['Latvia', '$0', '$5', '$0.25', '$0.75'],
  ['Malta', '$15', '$23.50', '$1', '$7'],
  ['Mexico', '$1', '$5.50', '$1', '$3'],
  ['Netherlands', '$0', '$5', '$0.99', '$0.99'],
  ['New Zealand', '$0', '$7', '$1', '$3'],
  ['Panama', '$0', '$10', '$1', '$12.50'],
  ['Peru', '$15', '$23.50', '$1', '$6.25'],
  ['Singapore', '$0', '$5', '$2', '$6.60'],
  ['Slovak Republic', '$15', '$23.50', '$1', '$5'],
  ['South Africa', '$0', '$5', '$0', '$2.65'],
  ['Sweden', '$15', '$23.50', '$1', '$3.95'],
  ['Switzerland', '$0', '$5', '$2.95', '$3.95'],
  ['United Kingdom', '$0', '$7', '$1', '$2.63'],
  ['USA', '$0', '$5', '$0', '$0.15'],
  ['Venezuela', '$0', '$10', '$1', '$12.50']
]

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-full">
					<Paragraph>
            DIDx is a wholesale DID trading market with a reliable platform since 2005 to Buy, Sell, and Trade DID phone numbers. This wholesale marketplace enables the sale and purchase of DIDs with Channels (enabling multiple calls at one time.) Such service can include unlimited incoming calls and the option to purchase additional channels paths to use with DID phone numbers as needed.
					</Paragraph>

					<Paragraph>
            The following area codes have additional channels available. Below are sample rates. Log in to your business DIDX dashboard to view exact rates and to manage DIDs and channels.
					</Paragraph>

					<Table headings={headings} values={values} />
				</section>
			</StandardPage>
		</>
	)
}