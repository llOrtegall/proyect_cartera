import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[94.7vh] bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="mt-5 text-5xl font-bold text-gray-800">Oops!</h1>
          <p className="mt-3 text-lg text-gray-600">No pudimos encontrar lo que buscabas.</p>
          <Link to="/home" className="mt-10 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
