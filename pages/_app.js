import '../styles/globals.css'
import Header from '../components/header'
import WhatsApp from '../components/whatsapp'

export default function App({ Component, pageProps }) {
  return <> <Component {...pageProps} />
<Header/> 
<WhatsApp/>
  
</>
} 
