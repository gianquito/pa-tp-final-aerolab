import Image from 'next/image'
import Link from 'next/link'

interface ProductoProps {
    imagen: string
    nombre: string
    categoria: string
    precio: number
    id: string
}

export default function Producto({ imagen, nombre, categoria, precio, id }: ProductoProps) {
    return (
        <Link href={`/producto/${id}`} className='flex-shrink-0 border shadow-md p-4 rounded-lg hover:shadow-xl'>
            <Image className='shadow-sm' src={imagen} alt={nombre} width={202} height={132} />
            <p className='text-xs text-gray-400 mt-2'>{categoria}</p>
            <p className='text-sm'>{nombre}</p>
            <p className='font-bold'>${precio}</p>
        </Link>
    )
}
