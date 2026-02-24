import { NavLink } from "react-router-dom"

const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Registrar Acerto", path: "/registrar-acerto" },
    { label: "Histórico de Acertos", path: "/historico-de-acertos" },
    { label: "Sobre", path: "/sobre" },
]

export function Navbar() {
    return (
        <nav className="flex items-center gap-8">
            <ul className="flex items-center gap-6 text-base font-medium">
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
        </nav>
    )
}