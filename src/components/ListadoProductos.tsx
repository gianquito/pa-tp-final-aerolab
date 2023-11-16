import { product } from '@/types'
import Producto from './Producto'

const getProducts = async () => {
    const res = await fetch('https://private-amnesiac-c83ac-aerolabchallenge.apiary-proxy.com/products', {
        headers: {
            Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkOWVlNjFkYmY0NTAwMjExY2Y5ZDMiLCJpYXQiOjE2OTk1ODU3NjZ9.sE0VGqlaCZSL8Iofx8IGkXer2tsILe6mpzWPpGWIc5A',
        },
    })
    return res.json()
}

export default async function Productos() {
    const productos = await getProducts()
    return (
        <section>
            <div className='flex flex-wrap justify-center gap-6 my-20'>
                {productos.map((producto: product) => (
                    <Producto
                        nombre={producto.name}
                        categoria={producto.category}
                        precio={producto.cost}
                        imagen={producto.img.url}
                        id={producto._id}
                        key={producto._id}
                    />
                ))}
            </div>
        </section>
    )
}
