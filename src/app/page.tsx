import ListadoProductos from '@/components/ListadoProductos'
import Image from 'next/image'

export default function Home() {
    return (
        <main>
            <div className='h-96 relative'>
                <h1 className='absolute bottom-0 m-12 text-white text-6xl font-bold'>Electrónica</h1>
                <Image
                    src='/electronics.png'
                    alt='electronics banner'
                    width={2880}
                    height={960}
                    className='object-cover w-full h-full'
                />
            </div>
            <ListadoProductos />
        </main>
    )
}
