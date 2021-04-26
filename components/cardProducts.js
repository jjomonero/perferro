
import React from 'react'
import { Card, CardContent, CardHeader, Typography, CardActions, Button, Grid, makeStyles, Divider} from '@material-ui/core'
import Image from 'next/image'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  const useStyles = makeStyles((theme) =>  ({
    responsive:{
      width:'100%',
      display:'Grid',
      gridTemplateColumns:'3fr 3fr 3fr',
      gap:'30px ',
      textAlign:'center',
      [theme.breakpoints.down('sm')]: {
        display:'grid',
        gridTemplateColumns:'13fr'
      },
    }
  }))

 function CardProducts () {
   const classes = useStyles();
  return (
    <>
      <div>
        <Typography style={{
          textAlign:'center',
          width:'100%',
          margin:'auto',
          paddingTop:'150px'}} >
           <h1 style={{
             color:'#0058b0',
             fontWeight:'lighter', 
             fontSize:'38px',
             marginBottom:'30px',
             position:"relative"
           }}>
            Pro<span style={{
              paddingBottom:'15px',
              borderBottom:'3px solid #00b359',
            }} >du</span>tos</h1>

            <p style={{
              color:'#666666',
              fontSize:'1.2em' ,
            }} >Conheça nossa linha de climatizadores evaporativos com design super moderno. <br/>
            Temos o modelo ideal para climatizar o seu ambiente.</p>
        </Typography>
        <Grid>
      <Card  className={classes.responsive}>
        <CardContent style={{
          padding:'10px',
          border:'1px solid  #e5e5e5',
          position: 'relative',
          width:'330px',
          marginBottom:'0',
          margin:'30px auto',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',}}>
        <Typography style={{
          color:'#137bf3',
          fontSize:'30px',}}>
          <CardHeader title="CP 1400" subheader="Parede"/>
          <Image src="/images/cp-1400.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Ideal para grandes ambientes como: Indústrias, supermercados, depósitos e igrejas.
          </Typography>
          <CardActions disableSpacing>
            

          <Accordion style={{display:'block'}}>
          <AccordionSummary
          >
            <Button variant="contained"  size="small" style={{
              backgroundColor: '#00B058',
              borderColor: '1px solid #00B058',
              color:'#fff',
              margin:'auto'}}> Ver Mais</Button>
          </AccordionSummary>
           
          <AccordionDetails style={{display:'flex', 
          flexDirection:'column',  textAlign:'left', 
          color:'#666', borderRadius:'10px'}}>
            <Typography variant="overline"> 
              <strong>VASÃO DE AR </strong>: <span> 45.000 M³/h</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DIMENSÕES </strong>: <span> 1,70 x 1,70 x 1,30</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>ABERTURA </strong>: <span> 1,43 x 1,43</span>
            </Typography> 
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DETALHES </strong>: <span> Cubo em alumínio, painel digital
                 com controlador de velocidade e controle remoto</span>
            </Typography> 
          </AccordionDetails>


        </Accordion>
        
        </CardActions>
        </Typography>
        </CardContent>

        <CardContent style={{
          padding:'10px',
          border:'1px solid  #e5e5e5',
          position: 'relative',
          width:'330px',
          marginBottom:'0',
          margin:'30px auto',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',}}>
        <Typography style={{
          color:'#137bf3',
          fontSize:'30px',}}>
      <CardHeader title="CP 1100"  subheader="Parede"/>
          <Image src="/images/cp-1100.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Ideal para ambientes grandes como: mercados, lanchonetes, lojas e padarias.
          </Typography>
          <CardActions disableSpacing>

            
            <Accordion style={{display:'block'}}>
          <AccordionSummary
           
          >
            <Button variant="contained"  size="small" style={{
              backgroundColor: '#00B058',
              borderColor: '1px solid #00B058',
              color:'#fff',
              margin:'auto'}}> Ver Mais</Button>
          </AccordionSummary>

          <AccordionDetails style={{display:'flex', 
          flexDirection:'column',  textAlign:'left', 
          color:'#666', borderRadius:'10px'}}>
            <Typography variant="overline"> 
              <strong>VASÃO DE AR </strong>: <span> 28.000 M³/h</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DIMENSÕES </strong>: <span> 1,64 x 1,46 x 1,21</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>ABERTURA </strong>: <span> 1,09 x 1,09</span>
            </Typography> 
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DETALHES </strong>: <span> Cubo em alumínio, painel digital
                 com controlador de velocidade e controle remoto</span>
            </Typography> 
          </AccordionDetails>

        </Accordion>

        </CardActions>
        </Typography>
        </CardContent>

        <CardContent style={{
          padding:'10px',
          border:'1px solid  #e5e5e5',
          position: 'relative',
          width:'330px',
          marginBottom:'0',
          margin:'30px auto',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',}}>
        <Typography style={{
          color:'#137bf3',
          fontSize:'30px',}}>
        <CardHeader title="CP 1500" subheader="Teto"/>
          <Image src="/images/cp-1500.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes grandes como lojas de materiais de construção, galpões e industriais.
          </Typography>
          <CardActions disableSpacing>
            
             <Accordion style={{display:'block'}}>
          <AccordionSummary
          >
            <Button variant="contained"  size="small" style={{
              backgroundColor: '#00B058',
              borderColor: '1px solid #00B058',
              color:'#fff',
              margin:'auto'}}> Ver Mais</Button>
          </AccordionSummary>
           
          <AccordionDetails style={{display:'flex', 
          flexDirection:'column',  textAlign:'left', 
          color:'#666', borderRadius:'10px'}}>
            <Typography variant="overline"> 
              <strong>VASÃO DE AR </strong>: <span> 45.000 M³/h</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DIMENSÕES </strong>: <span> 1,80 x 1,60 x 1,80</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>ABERTURA </strong>: <span> 1,00 x 1,00</span>
            </Typography> 
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DETALHES </strong>: <span>  Cubo em alumínio, painel com 
                controlador de velocidade e controle remoto</span>
            </Typography> 
          </AccordionDetails>


        </Accordion>

        </CardActions>
        </Typography>
        </CardContent>

        <CardContent style={{
          padding:'10px',
          border:'1px solid  #e5e5e5',
          position: 'relative',
          width:'330px',
          marginBottom:'0',
          margin:'30px auto',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',}}>
        <Typography style={{
          color:'#137bf3',
          fontSize:'30px',}}>
        <CardHeader title="CP 1300" subheader="Teto"/>
          <Image src="/images/cp-1300.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes grandes como, mercados, lanchonetes, academias e salões.
          </Typography>
          <CardActions disableSpacing>
            
             <Accordion style={{display:'block'}}>
          <AccordionSummary
          >
            <Button variant="contained"  size="small" style={{
              backgroundColor: '#00B058',
              borderColor: '1px solid #00B058',
              color:'#fff',
              margin:'auto'}}> Ver Mais</Button>
          </AccordionSummary>
           
          <AccordionDetails style={{display:'flex', 
          flexDirection:'column',  textAlign:'left', 
          color:'#666', borderRadius:'10px'}}>
            <Typography variant="overline"> 
              <strong>VASÃO DE AR </strong>: <span> 30.000 M³/h</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DIMENSÕES </strong>: <span> 1,52 x 1,35 x 1,52</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>ABERTURA </strong>: <span> 0,86 x 0,86</span>
            </Typography> 
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DETALHES </strong>: <span> Cubo em alumínio, painel 
                com controlador de velocidade e controle remoto</span>
            </Typography> 
          </AccordionDetails>


        </Accordion>

        </CardActions>
        </Typography>
        </CardContent>

        <CardContent style={{
          padding:'10px',
          border:'1px solid  #e5e5e5',
          position: 'relative',
          width:'330px',
          marginBottom:'0',
          margin:'30px auto',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',}}>
        <Typography style={{
          color:'#137bf3',
          fontSize:'30px',}}>
        <CardHeader title="CP 840" subheader="Parede"/>
          <Image src="/images/cp-840.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes de grande e médio porte como, mercados, academias, pizzarias e lojas.
          </Typography>
          <CardActions disableSpacing>
            
             <Accordion style={{display:'block'}}>
          <AccordionSummary
          >
            <Button variant="contained"  size="small" style={{
              backgroundColor: '#00B058',
              borderColor: '1px solid #00B058',
              color:'#fff',
              margin:'auto'}}> Ver Mais</Button>
          </AccordionSummary>
           
          <AccordionDetails style={{display:'flex', 
          flexDirection:'column',  textAlign:'left', 
          color:'#666', borderRadius:'10px'}}>
            <Typography variant="overline"> 
              <strong>VASÃO DE AR </strong>: <span> 20.000 M³/h</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DIMENSÕES </strong>: <span> 1,30 x 1,16 x 1,00</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>ABERTURA </strong>: <span> 0,86 x 0,86</span>
            </Typography> 
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DETALHES </strong>: <span> Hélice direto no motor, painel digital com 
                controlador de velocidade e controle remoto</span>
            </Typography> 
          </AccordionDetails>


        </Accordion>

        </CardActions>
        </Typography>
        </CardContent>

        <CardContent style={{
          padding:'10px',
          border:'1px solid  #e5e5e5',
          position: 'relative',
          width:'330px',
          marginBottom:'0',
          margin:'30px auto',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',}}>
        <Typography style={{
          color:'#137bf3',
          fontSize:'30px',}}>
        <CardHeader title="CP 600" subheader="Parede"/>
          <Image src="/images/cp-600.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza.
          </Typography>
          <CardActions disableSpacing>
            
             <Accordion style={{display:'block'}}>
          <AccordionSummary
          >
            <Button variant="contained"  size="small" style={{
              backgroundColor: '#00B058',
              borderColor: '1px solid #00B058',
              color:'#fff',
              margin:'auto'}}> Ver Mais</Button>
          </AccordionSummary>
           
          <AccordionDetails style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
            <Typography variant="overline"> 
              <strong>VASÃO DE AR </strong>: <span> 13.000 M³/h</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DIMENSÕES </strong>: <span> 1,03 x 1,12 x 0,82</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>ABERTURA </strong>: <span> 0,72 x 0,72</span>
            </Typography> 
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DETALHES </strong>: <span> Hélice direto no motor, painel 
                digital com controlador de velocidade e controle remoto</span>
            </Typography> 
          </AccordionDetails>


        </Accordion>

        </CardActions>
        </Typography>
        </CardContent>

        <CardContent style={{
          padding:'10px',
          border:'1px solid  #e5e5e5',
          position: 'relative',
          width:'330px',
          marginBottom:'0',
          margin:'30px auto',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',}}>
        <Typography style={{
          color:'#137bf3',
          fontSize:'30px',}}>
        <CardHeader title="CP 650" subheader="Portátil"/>
          <Image src="/images/cp-650.jpeg" width={200} height={400}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes de pequeno porte como, pizzarias, farmácias, mercados, academias, etc.
          </Typography>
          <CardActions disableSpacing>
            
             <Accordion style={{display:'block'}}>
          <AccordionSummary
          >
            <Button variant="contained"  size="small" style={{
              backgroundColor: '#00B058',
              borderColor: '1px solid #00B058',
              color:'#fff',
              margin:'auto'}}> Ver Mais</Button>
          </AccordionSummary>
           
          <AccordionDetails style={{display:'flex', 
          flexDirection:'column',  textAlign:'left', 
          color:'#666', borderRadius:'10px'}}>
            <Typography variant="overline"> 
              <strong>VASÃO DE AR </strong>: <span> 9.000 M³/h</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DIMENSÕES </strong>: <span> 0,70 x 1,70 x 0,70</span>
            </Typography>
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>ABERTURA </strong>: <span> Sem a necessidade de abertura na parede e/ou teto</span>
            </Typography> 
              <Divider/>
              <Divider/>
              <Divider/>
            <Typography variant="overline"> 
              <strong>DETALHES </strong>: <span> Hélice direto no motor, painel digital 
                com controlador de velocidade e controle remoto</span>
            </Typography> 
          </AccordionDetails>


        </Accordion>

        </CardActions>
        </Typography>
        </CardContent>
      

      </Card>
      </Grid>
      </div>
    </>
  )
}

export default CardProducts