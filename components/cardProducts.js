
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {CardMedia, CardActionArea, Card, CardContent, CardHeader, Typography, lighten, CardActions, Collapse, Button} from '@material-ui/core'
import Image from 'next/image'
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles ((theme)=>({
  root:{
    width:'100%',
    display:'Grid',
    gridTemplateColumns:'3fr 3fr 3fr',
    gap:'30px ',
    textAlign:'center',
    
  },
  title:{
    color:'#137bf3',
    fontSize:'30px',
  },
  description:{
    padding:'10px',
    border:'1px solid  #e5e5e5',
    position: 'relative',
    width:'330px',
    marginBottom:'0',
    margin:'30px auto',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
    button:{
      width:"40%",
      color:"#666",
      fontWeight:'bolder',
      textAlign:"center",
      margin:'auto',
      borderRadius:'10px',
      '&:hover': {
        backgroundColor: '#00B058',
        borderColor: '1px solid #00B058',
        color:'#fff',
        boxShadow: 'none',
        transition:'0.5s',
      }
    },
    header:{
      textAlign:'center',
      width:'100%',
      margin:'auto',
      paddingTop:'150px'
    },
    h1:{
      color:'#0058b0',
      fontWeight:'lighter', 
      fontSize:'38px',
      marginBottom:'30px',
      position:"relative"
    },
    span:{
      paddingBottom:'15px',
      borderBottom:'3px solid #00b359',
    },
    p:{
      color:'#666666',
      fontSize:'1.2em' ,
    }
}))

 function CardProducts () {

  const classes = useStyles();
 
  return (
    <>
      <div>
        <Typography className={classes.header} >
           <h1 className={classes.h1}>
            Pro<span className={classes.span} >du</span>tos</h1>

            <p className={classes.p} >Conheça nossa linha de climatizadores evaporativos com design super moderno. <br/>
            Temos o modelo ideal para climatizar o seu ambiente.</p>
        </Typography>

      <Card className={classes.root}>
        <CardContent className={classes.description}>
        <Typography className={classes.title}>
          <CardHeader title="CP 1400" subheader="Parede"/>
          <Image src="/images/cp-1400.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Ideal para grandes ambientes como: Indústrias, supermercados, depósitos e igrejas.
          </Typography>
          <CardActions disableSpacing>
            <Button variant="contained" className={classes.button}> Ver Mais</Button>
        </CardActions>
        </Typography>
        </CardContent>

        <CardContent className={classes.description}>
        <Typography className={classes.title}>
      <CardHeader title="CP 1100"  subheader="Parede"/>
          <Image src="/images/cp-1100.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Ideal para ambientes grandes como: mercados, lanchonetes, lojas e padarias.
          </Typography>
          <CardActions disableSpacing>
            <Button variant="contained" className={classes.button}> Ver Mais</Button>
        </CardActions>
        </Typography>
        </CardContent>

        <CardContent className={classes.description}>
        <Typography className={classes.title}>
        <CardHeader title="CP 1500" subheader="Teto"/>
          <Image src="/images/cp-1500.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes grandes como lojas de materiais de construção, galpões e industriais.
          </Typography>
          <CardActions disableSpacing>
            <Button variant="contained" className={classes.button}> Ver Mais</Button>
        </CardActions>
        </Typography>
        </CardContent>

        <CardContent className={classes.description}>
        <Typography className={classes.title}>
        <CardHeader title="CP 1100" subheader="Teto"/>
          <Image src="/images/cp-1300.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes grandes como, mercados, lanchonetes, academias e salões.
          </Typography>
          <CardActions disableSpacing>
            <Button variant="contained" className={classes.button}> Ver Mais</Button>
        </CardActions>
        </Typography>
        </CardContent>

        <CardContent className={classes.description}>
        <Typography className={classes.title}>
        <CardHeader title="CP 840" subheader="Parede"/>
          <Image src="/images/cp-840.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes de grande e médio porte como, mercados, academias, pizzarias e lojas.
          </Typography>
          <CardActions disableSpacing>
            <Button variant="contained" className={classes.button}> Ver Mais</Button>
        </CardActions>
        </Typography>
        </CardContent>

        <CardContent className={classes.description}>
        <Typography className={classes.title}>
        <CardHeader title="CP 600" subheader="Parede"/>
          <Image src="/images/cp-600.jpeg" width={250} height={250}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza.
          </Typography>
          <CardActions disableSpacing>
            <Button variant="contained" className={classes.button}> Ver Mais</Button>
        </CardActions>
        </Typography>
        </CardContent>

        <CardContent className={classes.description}>
        <Typography className={classes.title}>
        <CardHeader title="CP 650" subheader="Portátil"/>
          <Image src="/images/cp-650.jpeg" width={200} height={400}/>
          <Typography style={{color:"#666", fontWeight:"bolder"}}>
          Para ambientes de pequeno porte como, pizzarias, farmácias, mercados, academias, etc.
          </Typography>
          <CardActions disableSpacing>
            <Button variant="contained" className={classes.button}> Ver Mais</Button>
        </CardActions>
        </Typography>
        </CardContent>
      

      </Card>

      </div>
    </>
  )
}

export default CardProducts