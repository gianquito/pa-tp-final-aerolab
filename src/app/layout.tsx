import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SPA Aerolab - Gian Putallaz',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='es'>
            <body className={inter.className + ' max-w-[1400px] mx-auto'}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
