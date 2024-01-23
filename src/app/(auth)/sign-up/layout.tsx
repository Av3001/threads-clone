import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../../globals.css"

const inter = Inter({ subsets: ["latin"] });

export const Metadata={
    title:"Threads",
    description:"A Next.js14 meta Threads Application"
}

export default function RootLayout({
    children
}:{
    children:React.ReactNode
}){
    return (
        <ClerkProvider>
            <html>
                <body className={`${inter.className} bg-dark-2`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}