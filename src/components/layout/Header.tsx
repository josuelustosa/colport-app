import logo from "@/assets/logo-colportapp.png"

import { Navbar } from "./Navbar"

export function Header() {
    return (
        <header className="h-(--header-height) w-full bg-background-primary">
            <div className="mx-auto flex h-full w-full max-w-(--layout-container-max-width) items-center justify-between px-(--layout-container-padding-x) py-(--layout-container-padding-y)">
                <img
                    src={logo}
                    alt="Logo ColportApp"
                    width={180}
                    className="w-40 tablet:w-44 desktop:w-45"
                />

                <Navbar />
            </div>
        </header>
    )
}
