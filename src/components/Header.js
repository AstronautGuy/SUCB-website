'use client'

import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import {usePathname} from "next/navigation";

export default function Header() {

    const pathname = usePathname(); // Get the current path
    const navItems = [
        { name: "Checking", link: "/" },
        { name: "Savings & FDs", link: "/small-business" },
        { name: "Credit Cards", link: "/wealth-management" },
        { name: "Home Loans", link: "/businesses-institutions" },
        { name: "Auto Loans", link: "/security" },
        { name: "Investing", link: "/about" },
        { name: "Better Money Habits", link: "/contact"},
    ];

    return (
        <header>
            <section className="flex items-center justify-between p-4 px-20">
                <Image src={"/logo.jpeg"} alt={"Logo"} width={100} height={100} />
                <SearchBar/>
            </section>
            <section>
                <nav>
                    <ul className="flex items-center justify-evenly gap-4 text-2xl font-light text-gray-600">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={`hover:border-b-1 active:border-b-2 pb-3 ${pathname === item.link ? 'border-b-2 border-black' : ''}`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </header>
    );
}