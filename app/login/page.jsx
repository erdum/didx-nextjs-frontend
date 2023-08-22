import Script from 'next/script'
import Link from 'next/link'

export default function Page() {
	return(
		<>
      <section className="w-full h-full">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm">
            <div>
              <h2 className="mt-6 text-3xl font-semibold text-neutral-600">Login in to your account</h2>
              <p className="mt-6 text-base text-gray-600">
                Or{' '}
                <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-600">
                  signup if you don't have an account
                </Link>
              </p>
            </div>
            <div className="mt-6">
              <form action="https://admin.didx.net/LoginAction.php" method="POST">
                <div className="my-6">
                  <label htmlFor="UID" className="block font-semibold text-neutral-600">
                    UID *
                  </label>
                  <div className="mt-1">
                    <input
                      id="UID"
                      name="UID"
                      type="UID"
                      autoComplete="UID"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="password" className="block font-semibold text-neutral-600">
                    Password *
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="Pass"
                      type="password"
                      autoComplete="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                    />
                  </div>
                </div>

                <Link href="/reset-password" className="inline-block my-2 text-blue-600">Forget Password</Link>

                <div className="mt-6">
                  <label htmlFor="g-recaptcha-response text-gray-900">
                    Captcha *
                  </label>
                </div>

                <Script src="https://www.google.com/recaptcha/api.js" />
                <div className="g-recaptcha my-6" data-sitekey="6Le4oD0UAAAAAC5rb6AJF6TQjUYXSo76OwzsQ1Vd"></div>

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
