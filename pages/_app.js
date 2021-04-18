import '../styles/globals.css'
import WhatsApp from '../components/whatsapp'
import NavBar from '../components/navBar'

export default function App({ Component, pageProps }) {
  return <> <Component {...pageProps} />
<WhatsApp/>
<NavBar/>
  
</>
} 
