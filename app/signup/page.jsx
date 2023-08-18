import Script from 'next/script'
import PhoneInput from '../layout-components/phoneInput'
import countries from '../layout-components/countries.json'

export const metadata = {
  title: 'Sign Up for Global Virtual Phone Numbers - Join DIDX' 
}

export default function Page() {
  return (
    <>
      <section className="w-full h-full">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <div>
              <h2 className="mt-6 text-3xl font-semibold text-neutral-600">Sign up to create your account</h2>
              <p className="mt-6 text-base text-gray-600">
                Or{' '}
                <a href="/signin" className="font-medium text-blue-600 hover:text-blue-600">
                  login if you have an account
                </a>
              </p>
            </div>
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block font-semibold text-neutral-600">
                    Email *
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="business emails only"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="first-name" className="block font-semibold text-neutral-600">
                    First Name *
                  </label>
                  <div className="mt-1">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="first-name"
                      required
                      placeholder="John"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block font-semibold text-neutral-600">
                    last Name *
                  </label>
                  <div className="mt-1">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="last-name"
                      required
                      placeholder="Doe"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="customer-type" className="block font-semibold text-neutral-600">
                    I want to *
                  </label>
                  <div className="mt-1">
                    <select
                      id="customer-type"
                      name="customer-type"
                      required
                      className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    >
                      <option defaultValue value="customer">Buy DIDS on DIDX</option>
                      <option value="vendor">Sell DIDS on DIDX</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="comapny-name" className="block font-semibold text-neutral-600">
                    Company Name *
                  </label>
                  <div className="mt-1">
                    <input
                      id="comapny-name"
                      name="comapny-name"
                      type="text"
                      autoComplete="comapny-name"
                      required
                      placeholder="John Cyber Inc"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company-website" className="block font-semibold text-neutral-600">
                    Company Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm">
                      https://
                    </span>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-600 focus:border-blue-600 sm border-gray-300 border outline-none"
                      placeholder="john-cyber.com"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="country" className="block font-semibold text-neutral-600">
                    Country *
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      required
                      className="mt-1 block w-full py-3 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    >
                      {countries.map(country => (<option key={country.iso_code} value={country.iso_code}>{country.name}</option>))}
                    </select>
                  </div>
                </div>

                <PhoneInput title="Company Phone" name="company-phone" />

                <PhoneInput title="Personal Phone" name="personal-phone" />

                <div>
                  <label htmlFor="referral" className="block font-semibold text-neutral-600">
                    Referral Code
                  </label>
                  <div className="mt-1">
                    <input
                      id="referral"
                      name="referral"
                      type="text"
                      autoComplete="referral"
                      required
                      placeholder="Enter referral code and get free $200"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    />
                  </div>
                </div>

                <p>I agree *</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      required
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                      I am or will be an Internet telephone service provider.
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      required
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                      I have read the 
                      <a href="/terms" className="text-blue-600 text-lg"> (terms) </a>
                      of service and fully agree to this.
                    </label>
                  </div>
                </div>

                <Script src="https://www.google.com/recaptcha/api.js" />
                <div className="g-recaptcha" data-sitekey="your_site_key"></div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
