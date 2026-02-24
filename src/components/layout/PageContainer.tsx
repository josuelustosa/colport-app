import type { ReactNode } from "react"

interface PageContainerProps {
    children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="min-h-screen bg-background-secondary text-text-primary">
            {children}
        </div>
    )
}