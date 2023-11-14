import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header>
            <nav className='bg-white px-4 py-2 w-full flex items-center mx-auto justify-between shadow-sm'>
                <Link href='/'>
                    <Image src='/logo.png' alt='Logo' width={50} height={50} />
                </Link>
                <p>Gian Putallaz - PA 2023</p>
            </nav>
        </header>
    )
}
