"use client";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import "./styles.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = (
        <div className="flex flex-col items-center justify-center gap-6 my-6 lg:flex-row lg:my-0 lg:gap-2 xl:gap-6">
            <Link href="/">
                <span onClick={() => setIsOpen(false)}>Home</span>
            </Link>
        </div>
    );

    return (
        <div className={`fixed z-10 w-full ${scrolled ? "bg-white text-white" : "bg-black text-white"}`}>
            <div className="max-w-screen-xl mx-auto px-6 md:px-16 xl:px-0">
                <div className="py-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/">
                                <div className="flex gap-1">
                                    <h1 className="text-2xl font-bold md:text-4xl">MoneyTransaction</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="hidden gap-4 lg:block">{navItems}</div>
                        <span
                            className="flex lg:hidden"
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <CiMenuFries />
                        </span>
                        <Drawer
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            position="right"
                        >
                            <div className="w-screen demo-content">
                                <span
                                    type="button"
                                    className="rounded-lg hover:scale-105 hover:bg-gray-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <IoMdClose size={30} className="text-white" />
                                </span>
                                {navItems}
                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
