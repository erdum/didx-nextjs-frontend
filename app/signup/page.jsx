import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import logo from '../../public/didx-logo.png'
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <section className="w-full h-full">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <div>
              {/*<Image
                src={logo}
                className="w-28 h-auto"
                alt="DIDX Inc logo"
              />*/}
              <h2 className="mt-6 text-3xl font-semibold text-neutral-700">Sign up to create your account</h2>
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
                  <label htmlFor="email" className="block text-base font-semibold text-neutral-700">
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
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="first-name" className="block text-base font-semibold text-neutral-700">
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
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-base font-semibold text-neutral-700">
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
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="customer-type" className="block text-base font-semibold text-neutral-700">
                    I want to *
                  </label>
                  <div className="mt-1">
                    <select
                      id="customer-type"
                      name="customer-type"
                      required
                      className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                    >
                      <option defaultValue value="customer">Buy DIDS on DIDX</option>
                      <option value="vendor">Sell DIDS on DIDX</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="comapny-name" className="block text-base font-semibold text-neutral-700">
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
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company-website" className="block text-base font-semibold text-neutral-700">
                    Company Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-base">
                      https://
                    </span>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-600 focus:border-blue-600 sm:text-base border-gray-300 border"
                      placeholder="john-cyber.com"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="country" className="block text-base font-semibold text-neutral-700">
                    Country *
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      required
                      className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                    >
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone-number" className="block text-base font-semibold text-neutral-700">
                    Phone Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="focus:ring-blue-600 focus:border-blue-600 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-base rounded-md"
                      >
                        <option defaultValue>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="focus:ring-blue-600 focus:border-blue-600 block w-full pl-16 sm:text-base border-gray-300 rounded-md"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-base font-semibold text-neutral-700">
                    Create Password *
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-base font-semibold text-neutral-700">
                    Confirm Password *
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
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
                    <label htmlFor="remember-me" className="ml-2 block text-base text-gray-900">
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
                    <label htmlFor="remember-me" className="ml-2 block text-base text-gray-900">
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
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
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
