import '../styles/globals.css'
import Header from '../components/header'
import WhatsApp from '../components/whatsapp'
import DrawerComponents from '../components/drawerComponent'
import NavBar from '../components/navBar'

export default function App({ Component, pageProps }) {
  return <> <Component {...pageProps} />
<WhatsApp/>
<NavBar/>
  
</>
} 
