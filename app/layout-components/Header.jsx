'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/didx-logo.png";

const MENULINKS = [
	{name: "About us", link: "/about-us"},
	{name: "Buy & Sell", link: "/buy-sell"},
	{name: "Rates", link: "/rates"},
	{name: "Features", link: "/features"},
	{name: "Coverage", link: "/coverage"},
	{name: "Interop", link: "/interop"},
	{name: "Contact us", link: "/contact-us"},
	{name: "Report bug", link: "/report-bug"}
];

export default function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const menu = document.getElementById('mobile-menu');

		if (isMenuOpen) {
			menu.classList.add('h-[calc(100vh-80px)]');
			menu.classList.remove('h-0');
		} else {
			menu.classList.remove('h-[calc(100vh-80px)]');
			menu.classList.add('h-0');
		}
	}, [isMenuOpen]);

	return (
		<header class="w-full h-20 px-3 flex items-center flex-wrap bg-white sticky top-0 lg:h-24 lg:px-8">
			<Image
				src={logo}
				alt="DIDX Inc logo"
				className="w-[106px] h-full mr-auto lg:w-[136px]"
			/>
			<button
				onClick={() => setMenuOpen(prevState => !prevState)}
				class="px-4 py-2.5 flex flex-col items-center justify-center gap-y-1.5 border rounded lg:hidden">
				<span class="block w-6 h-0.5 bg-gray-500"></span>
				<span class="block w-6 h-0.5 bg-gray-500"></span>
				<span class="block w-6 h-0.5 bg-gray-500"></span>
			</button>
			<nav id="mobile-menu" class="w-full h-0 absolute top-20 left-0 flex flex-col items-start justify-start gap-y-6 overflow-hidden font-semibold px-5 text-zinc-700 bg-white z-10 transition-all duration-300 ease-in lg:relative lg:top-0 lg:w-auto lg:h-auto lg:flex-row lg:gap-x-10">
				<Link className="mt-4 lg:m-0 hover:text-blue-500 transition-colors" href="/">Home</Link>
				{MENULINKS.map((item) => (
					<Link className="hover:text-blue-500 transition-colors" href={item.link}>{item.name}</Link>
				))}
				<Link className="text-blue-500 hover:text-zinc-700 transition-colors" href="/sign-in">Sign in</Link>
			</nav>
		</header>
	);
}
