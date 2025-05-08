'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function TopBar() {

    const pathname = usePathname(); // Get the current path
    const navItems = [
        { name: "Personal", link: "/" },
        { name: "Small Business", link: "/small-business" },
        { name: "Wealth Management", link: "/wealth-management" },
        { name: "Businesses & Institutions", link: "/businesses-institutions" },
        { name: "Security", link: "/security" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact"},
        { name: "Help", link: "/help"}
    ];

    return (
        <main className="bg-gray-100 px-20">
            <section className="text-center text-xs italic text-gray-600 pt-2">
                <h1 className="flex items-center justify-center gap-2">
                    <span>The Sevaliya Bank is Registered under the</span>
                    <Image src="rbi.svg" alt="RBI Logo" width={30} height={30} />
                    <span>RBI and is 100% Safe</span>
                </h1>
            </section>
            <section className="flex justify-between font-light text-gray-600 pt-5">
                <nav>
                    <ul className="flex items-center justify-center gap-4">
                        {navItems.slice(0,6).map((item, index) => (
                            <li
                                key={index}
                                className={`hover:border-b-2 active:border-b-2 ${pathname === item.link ? 'border-b-2 border-black' : ''}`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center justify-center gap-4">
                <nav>
                    <ul className="flex items-center justify-center gap-4">
                        <li>Gujarati</li>
                        {navItems.slice(6).map((item, index) => (
                            <li
                                key={index}
                                className={`hover:border-b-2 active:border-b-2 ${pathname === item.link ? 'border-b-2 border-black' : ''}`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                </div>
            </section>
        </main>
    );
}
