'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BreadCrumb({ title }) {
	const path = usePathname().split('/')
	path.pop() // Remove trailing slash from the path

	return (
		<section className="w-full min-h-[64px] bg-zinc-100 flex flex-wrap items-center justify-between px-4 py-2 gap-y-4 sm:px-16 xl:px-40 2xl:px-72">
			<p className="text-neutral-600 text-lg">{ title.split('|')[0] }</p>

			<nav className="text-neutral-500 text-sm font-medium flex gap-x-1">
				{path.map((item, index) => {

					if (index === 0) {
						return(
							<Link key={index} href="/" className="hover:text-blue-600 transition-colors">Home</Link>
						)
					} else {
						// Last route fragment or Active link
						if (index + 1 === path.length) return (
							<div key={index}>
								<span className="mr-1">/</span>
								<Link className="font-semibold" href={`/${item}`} >{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
							</div>
						)

						return (
							<div key={index}>
								<span className="mr-1">/</span>
								<Link href={`/${item}`} >{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
							</div>
						)
					}

				})}
			</nav>
		</section>
	)
}
