
import {Button, makeStyles, Typography} from '@material-ui/core'
import transitions from '@material-ui/core/styles/transitions';

const useStyle = makeStyles((theme) => ({
    root:{
        background:'#0070CA',
        backgroundImage:'url(/images/abstrato.jpeg)',
        textAlign:'center',
        padding:'150px 0',
    },
    paragraph:{
        color:'#fff',
        fontSize:'1.3em',
        lineHeight:'25px', 
        fontStyle:'italic',
        margin:'0',
    },
    button:{
        fontWeight:'550',

        color:'#000',

        border:'2px solid #fff',
        borderRadius:'30px',
        padding:'10px 15px',
        margin:'0 auto 10px',
        '&:hover':{
        transition:'all 0.3s linear',
        background:'#fff',
        border: '2px solid #fff',
        }
    }
}))

function About () {
    const classes = useStyle();
    return (
        <>
        <div className={classes.root}>
            <Typography>
            <h1 style={{fontWeight:"lighter" ,fontSize:"35px", color:"#000", margin:"10px 0 20px"}}>
            Quem<span style={{paddingBottom:"10px", borderBottom:"2px solid #000"}}> S</span>omos</h1>
            </Typography>

            <Typography className={classes.paragraph}>
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

            <Button variant="outlined" className={classes.button}> CONHEÇA NOSSOS PRODUTOS</Button>
        </div>

        </>
    )
}

export default About