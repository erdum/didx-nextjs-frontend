import Link from 'next/link'

export function StandardPage({ children }) {
	return (
		<main className="w-full flex flex-col gap-4 px-4 py-8 text-base xl:px-40 xl:flex-row 2xl:px-72">
			{ children }
		</main>
	)
}

export function Heading({ children }) {
	return (
		<h2 className="uppercase mb-6 mt-10 text-2xl text-neutral-600 font-semibold">{ children }</h2>
	)
}

export function SubHeading({ children }) {
	return (
		<h3 className="mb-4 mt-8 text-xl text-neutral-600 font-semibold">{ children }</h3>
	)
}

export function SmallHeading({ children }) {
	return (
		<h3 className="mb-2 mt-8 text-base text-neutral-700 font-semibold">{ children }</h3>
	)
}

export function Paragraph({ children }) {
	return (
		<p className="text-neutral-700 mb-6">{ children }</p>
	)
}

export function Anchor({ children, href = "" }) {
	return (
		<Link href={href} className="text-[#2196f3] inline font-semibold">{ children }</Link>
	)
}
