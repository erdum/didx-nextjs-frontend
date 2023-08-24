import BreadCrumb from '../layout-components/breadCrumb'
import { StandardPage } from '../layout-components/standardPage'

export const metadata = {
	'title': 'Local Number Portability (LNP) Lookup'
}

export default function Page() {
	return (
		<>
			<BreadCrumb title={metadata.title} />
			<StandardPage>
				<section className="w-96 mx-auto">
					<form>
            <div className="my-6">
              <label htmlFor="did" className="block font-semibold text-neutral-600">
                DID Number *
              </label>
              <div className="mt-1">
                <input
                  id="did"
                  name="did"
                  type="did"
                  autoComplete="did"
                  required
                  placeholder="+1-555-222-5566"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                Search
              </button>
            </div>
          </form>
				</section>
			</StandardPage>
		</>
	)
}
