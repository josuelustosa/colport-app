import { Navbar } from "./Navbar"

import logo from "@/assets/logo-colportapp.png"

export function Header() {
    return (
        <header className="w-full bg-background-primary">
            <div className="max-w-(--layout-container-max-width) px-(--layout-container-padding-x) py-(--layout-container-padding-y) mx-auto flex items-center justify-between">
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