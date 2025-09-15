import "./globals.css"
import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import SessionProviderWrapper from "../../components/SessionProviderWrapper"
import Header from "../../components/home/Header"
import Footer from "../../components/home/Footer"

export const metadata = {
  title: "My App",
  description: "Next.js App Router Example",
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper session={session}>
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
