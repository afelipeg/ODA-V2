import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
      <p className="mb-4">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  )
}