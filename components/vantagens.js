
import Image from 'next/image'
import {makeStyles, Typography, Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root:{
        width:'86%',
        textAlign:'center',
        padding:'150px 0',
        margin:'auto',
    },
    card:{
        width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
    },
    containerIcons:{
        display:'grid',
        gridTemplateColumns:'2fr 2fr 2fr 2fr',
    }
}))


function Vantagens () {
    const classes = useStyle();
    return (
        <>  
        <div className={classes.root}>

            <Typography>
               <h1 style={{fontWeight:"lighter", fontSize:"38px", color:"#0058b0", position:"relative", marginBottom:"30px"}}> 
               Van<span style={{paddingBottom:"15px", borderBottom:"2px solid #00b359"}}>tag</span>ens</h1> 
            </Typography>
            <Typography >
                <p style={{fontWeight: "lighter", fontSize:"1.2em", margin: "0px 0px 0px 0px", lineHeight:"25px", color: "#666666"}}>
                Com nossa experiência de 10 anos na fabricação de climatizadores evaporativos 
                conseguimos atingir <br/> o melhor em climatização e resistência em nossos produtos.</p>
            </Typography>

            <div className={classes.containerIcons}>
                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/economia.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter", color:"#333",}}>Economia</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"26px"}}>
                            Economia de até 90% em energia..</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/durabilidade.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter"}}>Durabilidade</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"25px"}}>
                            Estrutura em fibra de alta durabilidade. Não enferruja.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/praticidade.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter"}}>Praticidade</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"25px"}}>
                                Possui controle remoto e painel digital.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/adaptavel.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter"}}>Adaptável</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"25px"}}>Adaptável em qualquer
                            ambiente, aberto ou fechado.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/semDengue.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter"}}>Sem Dengue</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"25px"}}>
                            Reservatório protegido contra mosquitos da dengue e outros insetos..</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/performance.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter"}}>Performance</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"25px"}}>
                            Motor de alta performance, resistênte e econômico.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/bemEstar.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter"}}>Bem Estar</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"25px"}}>
                            Controle de temperatura mantém seu ambiente sempre agradável.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <Image src="/images/iconsVantagens/ecologico.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{fontWeight:"lighter"}}>Ecológico</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize:"1em", color:"#666666", lineHeight:"25px"}}>
                            Não agride o meio ambiente, ecologicamente correto.</p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>

        </div>

        </>
    )
}

export default Vantagens