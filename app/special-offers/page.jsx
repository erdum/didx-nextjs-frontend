import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Anchor } from '../layout-components/standardPage'

export const metadata = {
  'title': 'Special Offers | DIDX'
}

const OFFERS = [
  {
    numOfDIDS: 10,
    monthlyCharges: 39,
    oneTimeCharges: 0,
    countryName: 'Australia',
    countryCode: 61,
    areas: 'All Areas',
    description: 'Australia DID number offer for 10 numbers.'
  },
  {
    numOfDIDS: 50,
    monthlyCharges: 25,
    oneTimeCharges: 10,
    countryName: 'Switzerland',
    countryCode: 41,
    areas: 'All Areas',
    description: 'Get 50 Switzerland numbers for just $35.'
  },
  {
    numOfDIDS: 10,
    monthlyCharges: 20,
    oneTimeCharges: 0,
    countryName: 'Australia',
    countryCode: 61,
    areas: 'All Areas',
    description: 'Australia DID number offer for 10 numbers.'
  },
  {
    numOfDIDS: 50,
    monthlyCharges: 30,
    oneTimeCharges: 0,
    countryName: 'USA',
    countryCode: 1,
    areas: 'All Areas',
    description: 'Numbers with SMS capability enabled.'
  },
  {
    numOfDIDS: 25,
    monthlyCharges: 15,
    oneTimeCharges: 0,
    countryName: 'USA',
    countryCode: 1,
    areas: 'All Areas',
    description: 'Numbers with SMS capability enabled.'
  },
  {
    numOfDIDS: 20,
    monthlyCharges: 60,
    oneTimeCharges: 60,
    countryName: 'Australia',
    countryCode: 61,
    areas: '28 - Sydney',
    description: 'Special offer for Sydney DIDs.'
  },
  {
    numOfDIDS: 100,
    monthlyCharges: 50,
    oneTimeCharges: 0,
    countryName: 'USA',
    countryCode: 1,
    areas: '567 - Toledo',
    description: 'Special offer for Toledo DIDs.'
  },
  {
    numOfDIDS: 100,
    monthlyCharges: 50,
    oneTimeCharges: 0,
    countryName: 'USA',
    countryCode: 1,
    areas: 'All Areas',
    description: 'Numbers with SMS capability enabled.'
  },
  {
    numOfDIDS: 5,
    monthlyCharges: 62.5,
    oneTimeCharges: 25,
    countryName: 'Ghana',
    countryCode: 233,
    areas: 'All Areas',
    description: 'Special offer for Ghana DIDs.'
  },
  {
    numOfDIDS: 700,
    monthlyCharges: 350,
    oneTimeCharges: 0,
    countryName: 'France',
    countryCode: 33,
    areas: 'All Areas',
    description: 'Special offer for France DIDs.'
  },
  {
    numOfDIDS: 10,
    monthlyCharges: 7.5,
    oneTimeCharges: 2.5,
    countryName: 'Latvia',
    countryCode: 371,
    areas: 'All Areas',
    description: 'Special offer for Latvia DIDs.'
  },
  {
    numOfDIDS: 10,
    monthlyCharges: 50,
    oneTimeCharges: 0,
    countryName: 'Guatemala',
    countryCode: 502,
    areas: '2 - Guatemala City',
    description: 'Special offer for Guatemala DIDs.'
  },
  {
    numOfDIDS: 100,
    monthlyCharges: 50,
    oneTimeCharges: 0,
    countryName: 'Netherlands',
    countryCode: 31,
    areas: 'All Areas',
    description: 'Special offer for Netherlands DIDs.'
  },
  {
    numOfDIDS: 100,
    monthlyCharges: 50,
    oneTimeCharges: 0,
    countryName: 'Singapore',
    countryCode: 65,
    areas: '3 - National',
    description: 'Special offer for Singapore DIDs.'
  },
  {
    numOfDIDS: 5,
    monthlyCharges: 25,
    oneTimeCharges: 0,
    countryName: 'El Salvador',
    countryCode: 503,
    areas: '2 - San Salvador',
    description: 'Special offer for El Salvador DIDs.'
  },
  {
    numOfDIDS: 50,
    monthlyCharges: 35,
    oneTimeCharges: 35,
    countryName: 'Canada',
    countryCode: 1,
    areas: 'All Areas',
    description: 'Special offer for Canada DIDs.'
  },
  {
    numOfDIDS: 100,
    monthlyCharges: 50,
    oneTimeCharges: 0,
    countryName: 'USA',
    countryCode: 1,
    areas: '619 - San Diego',
    description: 'Numbers with SMS capability enabled.'
  },
  {
    numOfDIDS: 1000,
    monthlyCharges: 250,
    oneTimeCharges: 0,
    countryName: 'USA',
    countryCode: 1,
    areas: '567 - Toledo',
    description: 'Special offer for Toledo DIDs.'
  },
  {
    numOfDIDS: 200,
    monthlyCharges: 80,
    oneTimeCharges: 0,
    countryName: 'USA',
    countryCode: 1,
    areas: 'All Areas',
    description: 'Special offer for USA DIDs.'
  },
  {
    numOfDIDS: 10,
    monthlyCharges: 5,
    oneTimeCharges: 0,
    countryName: 'France',
    countryCode: 33,
    areas: 'All Areas',
    description: 'Special offer for France DIDs.'
  },
  {
    numOfDIDS: 10,
    monthlyCharges: 20,
    oneTimeCharges: 0,
    countryName: 'Mexico',
    countryCode: 52,
    areas: 'All Areas',
    description: 'Special offer for Mexico DIDs.'
  },
];

export default function Page() {
  return (
    <>
      <BreadCrumb title={metadata.title} />
      <StandardPage>
        <section className="w-full flex flex-wrap justify-around gap-12 px-1 mx-auto">
          {
            OFFERS.map(item => (
              <div className="w-full xl:w-5/12 px-4 xl:px-10 py-4 xl:py-10 bg-gray-100 text-gray-700">
                <h3 className="text-2xl xl:text-3xl mb-4">
                  {item.numOfDIDS} DIDS ${item.monthlyCharges}/Month
                </h3>
                <h4 className="text-lg mb-1">
                  +{item.countryCode} - {item.countryName}
                </h4>
                <p className="mb-4">{item.areas}</p>
                <p className="text-sm">One Time Charges ${item.oneTimeCharges}</p>
                <p className="text-sm">
                  Total Deal ${item.oneTimeCharges + item.monthlyCharges}
                </p>
                <p className="mt-4 text-sm">{item.description}</p>
                <p className="text-sm">
                  Please <Anchor href="/contact-us">contact us</Anchor> for further information.
                </p>
                <a href={`https://customer.didx.net/ClientSpecialOfferConfirm?ThisID=${item.countryCode}`} className="block mt-12 mx-auto w-28 px-1 py-3 text-center rounded-md bg-[#2196f3] text-white font-semibold">Buy Now</a>
              </div>
            ))
          }
        </section>
      </StandardPage>
    </>
  )
}