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
		<h2 className="uppercase mb-6 mt-10 text-xl text-neutral-600 font-semibold">{ children }</h2>
	)
}

export function Paragraph({ children }) {
	return (
		<p className="text-neutral-700 my-6">{ children }</p>
	)
}

export function Anchor({ children, href = "" }) {
	return (
		<Link href={href} className="text-[#2196f3] inline font-semibold">{ children }</Link>
	)
}
