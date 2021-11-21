import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";



const Navigation = () => { 
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-7xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Devansh Chaubey
                    </a>
                </Link>
                <Link href="/projects">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500  dark:text-white"}
                    >
                        Projects
                    </a>
                </Link>
                <Link href="/experience">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500  dark:text-white"}
                    >
                        Experience
                    </a>
                </Link>
                <Link href="/education">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500  dark:text-white"}
                    >
                        Education
                    </a>
                </Link>
                <Link href="/resume">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500  dark:text-white"}
                    >
                        Resume
                    </a>
                </Link>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default Navigation;