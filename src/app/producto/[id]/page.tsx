import { product } from '@/types'
import Image from 'next/image'

const getProduct = async (id: string) => {
    const res = await fetch('https://private-amnesiac-c83ac-aerolabchallenge.apiary-proxy.com/products', {
        headers: {
            Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkOWVlNjFkYmY0NTAwMjExY2Y5ZDMiLCJpYXQiOjE2OTk1ODU3NjZ9.sE0VGqlaCZSL8Iofx8IGkXer2tsILe6mpzWPpGWIc5A',
        },
    })
    const data = await res.json()
    return data.find((producto: product) => producto._id === id)
}

export default async function ProductoPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id)
    return (
        <div className='flex justify-around h-full items-center flex-col md:flex-row gap-6 mt-10'>
            <div>
                <p className='text-gray-400 mt-2 text-sm font-medium'>{product.category}</p>
                <Image className='shadow-md' src={product.img.hdUrl} alt={product.name} width={504} height={364} />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-2xl'>{product.name}</p>
                <p className='text-xl font-bold'>${product.cost}</p>
                <button className='w-[300px] mt-2 bg-[#0ad4fa] rounded-full border font-bold text-white py-3 hover:bg-[#0cc9ed]'>
                    COMPRAR
                </button>
            </div>
        </div>
    )
}
