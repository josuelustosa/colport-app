import { Navbar } from "./Navbar"

import logo from "@/assets/logo-colportapp.png"

export function Header() {
    return (
        <header className="w-full bg-background-primary">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <img
                    src={logo}
                    alt="Logo ColportApp"
                    width={180}
                />

                <Navbar />
            </div>
        </header>
    )
}