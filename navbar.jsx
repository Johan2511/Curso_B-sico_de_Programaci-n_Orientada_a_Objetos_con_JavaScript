export default function Widget() {
    return (
        <div className="container mx-auto px-4 py-2 bg-yellow-100 dark:bg-yellow-800">
            <div className="flex justify-between text-sm">
                <div className="flex space-x-4">
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Categorías</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Ofertas</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Historial</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Supermercado</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Moda</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Vender</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Ayuda / PQR</a>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Crea tu cuenta</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Ingresa</a>
                    <a href="#" className="text-black hover:text-zinc-700 dark:text-white dark:hover:text-zinc-400">Mis compras</a>
                    <a href="#" className="bg-black text-white px-2 py-1 rounded-full">0</a>
                </div>
            </div>
        </div>
    )
}