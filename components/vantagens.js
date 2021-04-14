
import Image from 'next/image'
import {makeStyles, Typography, Card, CardContent} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root:{
        width:'86%',
        textAlign:'center',
        padding:'150px 0',
        margin:'auto',
        [theme.breakpoints.down('sm')]: {
            width:'100%'
          },
    },
    card:{
        width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
    },
    containerIcons:{
        display:'grid',
        gridTemplateColumns:'2fr 2fr 2fr 2fr',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns:'10fr 10fr',
          },
    },
    h1:{
        fontWeight:'lighter', 
        color:'#333',
    },
    p:{
        fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
    },
    titleH1:{
        fontWeight:'lighter', 
        fontSize:'38px', 
        color:'#0058b0', 
        position:'relative', 
        marginBottom:'30px',
        [theme.breakpoints.down('sm')]: {
            margin:'0 auto 30px',
            width:'100%',
            minWidth:'500px'
          },
    },
    titleSpan:{
        paddingBottom:'15px', 
        borderBottom:'px solid #00b359',
        
    },
    titleP:{
        fontWeight: 'lighter', 
        fontSize:'1.2em', 
        margin: '0px 0px 0px 0px', 
        lineHeight:'25px',
        color:'#666666',
        [theme.breakpoints.down('sm')]: {
            margin:'auto',
            minWidth:'520px'
          },
    }
}))


function Vantagens () {
    const classes = useStyle();
    return (
        <div>  
        <div className={classes.root}>

            <Typography>
               <h1 className={classes.titleH1}> 
               Van<span className={classes.titleSpan}>tag</span>ens</h1> 
            </Typography>
            <Typography >
                <p className={classes.titleP}>
                Com nossa experiência de 10 anos na fabricação de climatizadores evaporativos 
                conseguimos atingir <br/> o melhor em climatização e resistência em nossos produtos.</p>
            </Typography>

            <div className={classes.containerIcons}>
                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/economia.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Economia</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>
                            Economia de até 90% em energia..</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/durabilidade.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Durabilidade</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>
                            Estrutura em fibra de alta durabilidade. Não enferruja.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/praticidade.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Praticidade</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>
                                Possui controle remoto e painel digital.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/adaptavel.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Adaptável</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>Adaptável em qualquer
                            ambiente, aberto ou fechado.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/semDengue.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Sem Dengue</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>
                            Reservatório protegido contra mosquitos da dengue e outros insetos..</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/performance.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Performance</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>
                            Motor de alta performance, resistênte e econômico.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/bemEstar.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Bem Estar</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>
                            Controle de temperatura mantém seu ambiente sempre agradável.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/ecologico.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 className={classes.h1}>Ecológico</h1>
                        </Typography>
                        <Typography>
                            <p className={classes.p}>
                            Não agride o meio ambiente, ecologicamente correto.</p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>

        </div>

        </div>
    )
}

export default Vantagens