"use client"
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['500', '700'],
})

import { CSSReset } from "../public/CSSReset";


export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Carrinho de compras - bora codar 21</title>
            </head>
            <body>                
                <div className={inter.className}>
                    <CSSReset />
                    {children}
                </div>
            </body>
        </html>
    );
}
