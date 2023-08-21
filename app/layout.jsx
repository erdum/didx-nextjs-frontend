import Header from './layout-components/header'
import Footer from './layout-components/footer'
import Head from 'next/head'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false
 
export const metadata = {
  title: 'Global Virtual Phone Numbers with - DIDX',
  description: 'Explore the world of Global Virtual Phone Numbers with DIDX. Get instant access to a vast selection of virtual phone numbers from across the globe, empowering your business with seamless international communication. Connect with customers, partners, and colleagues worldwide with ease through our reliable and innovative virtual phone number solutions.',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800;6..12,900&family=Raleway:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
