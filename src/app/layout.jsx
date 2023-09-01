import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'FORMASI UNIBA',
    description: 'forum mahasiswa sistem informasi',
    icons: {
        icon: ['/favicon.ico?v-4'],
        apple: ['/apple-touch-icon.png?v-4'],
        shortcut: ['/apple-touch-icon.png'],
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en' data-theme='light'>
            <link rel='icon' href='/logo.png' type='image/png' sizes='32x32' />
            <body className={inter.className}>
                <main className='w-full m-auto'>
                    {/* <Navbar /> */}
                    {children}
                    {/* <Footer /> */}
                </main>
            </body>
        </html>
    )
}
