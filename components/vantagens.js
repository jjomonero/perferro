
import Image from 'next/image'
import {makeStyles, Typography, Card, CardContent} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    containerIcons:{
        display:'grid',
        gridTemplateColumns:'4fr 4fr 4fr 4fr',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns:'20fr', 
          },
    },
}))


function Vantagens () {
    const classes = useStyle();
    return (
        <div>  
        <div style={{
             width:'86%',
             textAlign:'center',
             padding:'150px 0',
             margin:'auto',
        }}>
            <Typography style={{width:'100%'}}>
               <Typography variant="h1" style={{
                    fontWeight:'lighter', 
                    fontSize:'38px', 
                    color:'#0058b0', 
                    position:'relative', 
                    margin:' 0 auto 30px',
                    width:'100%'
               }}> 
               Van<span style={{
                   paddingBottom:'15px', 
                   borderBottom:'px solid #00b359',
               }}>tag</span>ens</Typography> 
            </Typography>
            <Typography  component="tspan" style={{
                     fontWeight: 'lighter', 
                     fontSize:'1.2em', 
                     margin: '0px 0px 0px 0px', 
                     lineHeight:'25px',
                     color:'#666666',
                }}>
                Com nossa experiência de 10 anos na fabricação de climatizadores evaporativos 
                conseguimos atingir <br/> o melhor em climatização e resistência em nossos produtos.
            </Typography>

            <div className={classes.containerIcons}>
                <Card style={{
                    width:'250px',
                    margin:'40px auto 0',
                    boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/economia.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
                                color:'#333',
                            }}>Economia</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
                                color:'#666666', 
                                lineHeight:'26px'
                            }}>
                            Economia de até 90% em energia..</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{
                    width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/durabilidade.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
        color:'#333',
                            }}>Durabilidade</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
                            }}>
                            Estrutura em fibra de alta durabilidade. Não enferruja.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{
                    width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/praticidade.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
        color:'#333',
                            }}>Praticidade</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
                            }}>
                                Possui controle remoto e painel digital.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{
                    width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/adaptavel.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
        color:'#333',
                            }}>Adaptável</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
                            }}>Adaptável em qualquer
                            ambiente, aberto ou fechado.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{
                    width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/semDengue.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
        color:'#333',
                            }}>Sem Dengue</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
                            }}>
                            Reservatório protegido contra mosquitos da dengue e outros insetos..</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{
                    width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/performance.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
        color:'#333',
                            }}>Performance</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
                            }}>
                            Motor de alta performance, resistênte e econômico.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{
                    width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/bemEstar.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
        color:'#333',
                            }}>Bem Estar</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
                            }}>
                            Controle de temperatura mantém seu ambiente sempre agradável.</p>
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{
                    width:'250px',
        margin:'40px auto 0',
        boxShadow:'none'
                }}>
                    <Image src="/images/iconsVantagens/ecologico.png" width={120} height={120}/>
                    <CardContent>
                        <Typography>
                            <h1 style={{
                                fontWeight:'lighter', 
        color:'#333',
                            }}>Ecológico</h1>
                        </Typography>
                        <Typography>
                            <p style={{
                                fontSize:'1em', 
        color:'#666666', 
        lineHeight:'26px'
                            }}>
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