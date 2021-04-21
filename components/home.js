import { Button } from '@material-ui/core'
import Image from 'next/image'

 export default function Home () {
    return (
        <div style={{
            paddingTop:'245px',
            width:'100%',
            height:'100vh',
            background:'url("/images/borboleta.jpeg")',}}>
            <div style={{
                padding:'60px',
                textAlign:'center',
                color:'#fff',
                cursor:'default'}}>
                <div style={{
                    fontSize:'20px',
                    margin:'auto',
                    }}>
                    <h2 style={{color:'#0058b0'}}>Climatizadores</h2>
                    <h1 style={{color:'#00b356', borderTop:'none', background:'#0058b0 ', maxWidth:'20rem', margin:'auto'}}>Perferro</h1>
                </div>

                <div style={{padding:'20px'}}>
                    <Button variant="text" color="primary" href="/produtos" style={{color:'#fff', fontWeight:'bold'}}>Produtos</Button>
                    <Button variant="text" color="primary" href="/vantagensPage" style={{color:'#fff', fontWeight:'bold'}}>Vantagens</Button>
                    <Button variant="text" color="primary" href="/fotosPage" style={{color:'#fff', fontWeight:'bold'}}>Fotos</Button>
                    <Button variant="text" color="primary" href="/aboutPage" style={{color:'#fff', fontWeight:'bold'}}>Quem Somos</Button>
                    <Button variant="text" color="primary" href="/depoimentosPage" style={{color:'#fff', fontWeight:'bold'}}>Depoimentos</Button>
                    <Button variant="text" color="primary" href="/contato" style={{color:'#fff', fontWeight:'bold'}}>Fale Conosco</Button>
                </div>
            </div>
        </div>
    )
}