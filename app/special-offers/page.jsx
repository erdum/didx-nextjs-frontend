'use client'

import { useState, useEffect } from 'react';
import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage, Anchor } from '../layout-components/standardPage'

// export const metadata = {
//   'title': 'Special Offers | DIDX'
// }

export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const req = await fetch('https://customer.didx.net/get_special_offers')

      if (req.status === 200) {
        const data = await req.json()
        setData(data.data)
      }
    })()
  }, [])

  return (
    <>
      <BreadCrumb title={"Special Offers | DIDX"} />
      <StandardPage>
        <section className="w-full flex flex-wrap justify-around gap-12 px-1 mx-auto">
          {
            data.map(item => {
              return (
                <div className="w-full xl:w-5/12 px-4 xl:px-10 py-4 xl:py-10 bg-gray-100 text-gray-700">
                  <h3 className="text-2xl xl:text-3xl mb-4">
                    {item.qty} DIDS ${item.monthly_charges * item.qty}/Month
                  </h3>
                  {item.area_id.charAt(0) != '-' && (<div>
                    <h4 className="text-lg mb-1">
                      {item.country_name} - {item.area_name}
                    </h4>
                    <p className="mb-4">+{item.country_code}-{item.area_code}</p>
                  </div>)}
                  <p className="text-sm">One Time Charges ${item.setup_charges * item.qty}</p>
                  <p className="text-sm">
                    Total Deal ${(item.setup_charges * item.qty) + (item.monthly_charges * item.qty)}
                  </p>
                  <p className="mt-4 text-sm">{item.description}</p>
                  <p className="text-sm">
                    Please <Anchor href="/contact-us">contact us</Anchor> for further information.
                  </p>
                  <a href={`https://customer.didx.net/ClientSpecialOfferConfirm?ThisID=${item.id}`} className="block mt-12 mx-auto w-28 px-1 py-3 text-center rounded-md bg-[#2196f3] text-white font-semibold">Buy Now</a>
                </div>
              )
            })
          }
        </section>
      </StandardPage>
    </>
  )
}