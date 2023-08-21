'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BreadCrumb({ title }) {
	const path = usePathname().split('/')

	return (
		<section className="w-full h-24 bg-zinc-100 flex flex-wrap items-center justify-between px-4 py-2 xl:h-16 xl:px-32">
			<p className="w-full text-neutral-600 text-lg xl:w-auto">{ title }</p>

			<nav className="w-full text-neutral-500 text-sm font-semibold flex gap-x-1 xl:w-auto">
				{path.map((item, index) => {

					if (index === 0) {
						return(
							<Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
						)
					}

					if (index + 1 < path.length) {
						return (
							<>
								<span className="font-medium">/</span>
								<Link href={`/${item}`} className="font-medium">{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
							</>
						)
					}

					if (index + 1 === path.length) {
						return (
							<>
								<span className="font-medium">/</span>
								<p className="font-medium">{item.charAt(0).toUpperCase() + item.slice(1)}</p>
							</>
						)
					}
				})}
			</nav>
		</section>
	)
}
