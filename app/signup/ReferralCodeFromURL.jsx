'use client'

import { useSearchParams } from 'next/navigation'

export default function ReferralCodeFromQuery() {
	const referralCode = useSearchParams().get('referral')

	return (
		<div>
      <label htmlFor="referral" className="block font-semibold text-neutral-600">
        Referral Code
      </label>
      <div className="mt-1">
        <input
          id="referral"
          name="AffiliationCode"
          type="text"
          autoComplete="off"
          defaultValue={referralCode ?? ''}
          placeholder="Enter referral code and get free $20"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
        />
      </div>
    </div>
	)
}