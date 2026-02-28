import { useRouteError, isRouteErrorResponse } from "react-router-dom"

export function RouteErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <div className="text-white p-8">
                <h1 className="text-2xl font-bold">Erro {error.status}</h1>
                <p className="mt-2 text-gray-400">{error.statusText}</p>
            </div>
        )
    }

    return <p className="text-center mt-24 text-2xl">⚠️ Ocorreu um erro inesperado ao acessar rota!</p>
}
