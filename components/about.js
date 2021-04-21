import {Button, Typography} from '@material-ui/core'

function About () {
    return (
        <>
        <div style={{
            textAlign:'center',
            padding:'120px 0 50px',}}>
            <Typography>
            <h1 style={{fontWeight:"lighter" ,fontSize:"35px", color:"#000", margin:"10px 0 20px"}}>
            Quem<span style={{paddingBottom:"10px", borderBottom:"3px solid #000"}}> S</span>omos</h1>
            </Typography>

            <Typography variant="h3" style={{
                color:'#666',
                fontSize:'1em',
                lineHeight:'25px',
                fontStyle:'italic',
                margin:'0',}}>
            <p> A mais de 10 anos desenvolvemos e aperfeiçoamos climatizadores evaporativos,
            <br/>
            chegando em 2015 com nossa nova linha que tráz índices ideais de temperatura, pureza
            <br/>
            e umidade do ar, melhorando o conforto e diminuindo muito mais o
            <br/>
            consumo de energia na climatização de ambientes.
            <br/>
            <br/>
            Com isso fabricamos os melhores climatizadores do Brasil, oferecendo a melhor relação custo
            <br/>
            beneficio, garantindo qualidade e eficiência de nossos produtos.
            <br/>
            <br/>
            Nossa empresa está localizada no município de Peabiru estado do Paraná,
            <br/>
            contamos também com filial no estado do Mato Grosso na cidade de Sinop.
            <br/>
            Dessa forma conseguimos atender todo o Brasil.
            <br/>
            <br/>
            </p>
            </Typography>

            <Button variant="contained" href="/produtos" color="primary" style={{
                fontWeight:550,
                borderRadius:'30px',
                padding:'10px 15px',
                margin:'0 auto 10px',
                }}> CONHEÇA NOSSOS PRODUTOS</Button>
            </div>

        </>
    )
}

export default About
