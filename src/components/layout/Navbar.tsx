import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Registrar Acerto", path: "/registrar-acerto" },
    { label: "Histórico de Acertos", path: "/historico-de-acertos" },
    { label: "Sobre", path: "/sobre" },
]

const mobileMenuButtonLabel = "Abrir ou fechar menu de navegação"

function HamburgerIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#a3a3a3" viewBox="0 0 256 256" aria-hidden="true">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
    )
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 64rem)")

        const handleViewportChange = (event: MediaQueryListEvent | MediaQueryList) => {
            if (event.matches) {
                setIsMenuOpen(false)
            }
        }

        handleViewportChange(mediaQuery)

        const listener = (event: MediaQueryListEvent) => handleViewportChange(event)
        mediaQuery.addEventListener("change", listener)

        return () => mediaQuery.removeEventListener("change", listener)
    }, [])

    return (
        <nav className="relative flex items-center">
            <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-transparent transition hover:border-neutral-secondary desktop:hidden"
                aria-label={mobileMenuButtonLabel}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsMenuOpen((currentState) => !currentState)}
            >
                <HamburgerIcon />
            </button>

            <ul className="hidden items-center gap-4 text-sm font-medium desktop:flex desktop:gap-6 desktop:text-base">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `transition ${isActive
                                    ? "text-brand-accent"
                                    : "text-text-secondary hover:text-white"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {isMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-[min(18rem,calc(100vw-3rem))] rounded-(--radius-default) border border-neutral-secondary bg-background-surface p-4 shadow-lg desktop:hidden">
                    <ul id="primary-navigation" className="flex flex-col gap-3 text-sm font-medium mobile:text-base tablet:gap-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block rounded-md px-3 py-2 transition ${isActive
                                            ? "bg-background-primary text-brand-accent"
                                            : "text-text-secondary hover:bg-background-primary hover:text-white"
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}
