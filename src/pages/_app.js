import '@/styles/globals.css'
import Header from './header'
import Footer from './footer'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
  <Component {...pageProps} />
  <Footer/>

  </>
  )
}
