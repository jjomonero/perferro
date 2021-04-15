import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {IconButton, Typography} from '@material-ui/core';
import Link from 'next/link'

import {Button, ThemeProvider, createMuiTheme} from '@material-ui/core';


import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MenuIcon from '@material-ui/icons/Menu';


import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    transitionDuration:'6s',
  },
  appBar:{
      boxShadow: 'none',
      borderBottom: '1px solid #e5e5e5',
      [theme.breakpoints.down('sm')]: {
        minWidth:'250px'
      },
  },
  logo:{
    cursor:'pointer',
    zIndex:'30',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign:'center',
      display:'none'
    },
  },
  button:{
    maxWidth:'60%',
    margin:'auto',
    padding:'20px 0 10px',
    textAlign: 'center',
    
    backgroundColor:'#fff',
  },

  buttonContent:{
    margin:'0 6px',
    padding:'5px 7px ',
    border: 'none',
    fontSize:'13px',
    paddingBottom:'15px',
    background:'inherit',
    boxShadow:'none',
    border:'1px solid transparent',
    '&:focus': {
      backgroundColor: '#e5e5e5'},
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        textAlign:'center',
        display:'none'
      },
  },
  headerIcons:{
    top:'37px',
    margin:'auto',
    display:'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

  },
  logo:{
    top:'2px',
    left:'90px',
    cursor:'pointer',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      margin:'auto',
      display:'flex',
      position:'relative',
    },
  },
  mail:{
    color:'#ffca28',
  },
  whastapp:{
    color:'#4dc247',
  },
  paper: {
    border: '1px solid #d3d4d5',
  },
}));

export default function Header(props) {
  
  const classes = useStyles();
  const theme = createMuiTheme({
    palette:{
      primary:{
        main: '#3f51b5',
      }
    }
  }); 

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root} position="fixed">
      <AppBar  color="inherit" className={classes.appBar}>
        <Toolbar variant="dense">

          <Typography variant="h6" color="inherit" className={classes.logo}>
          <Link href="/">
          <Image src="/images/cp.png" alt="logo" width={166} height={80} />
          </Link>
          
          </Typography>
          
          <div className={classes.button}>
            <customizedMenu/>
          <Link href="/">
            <Button variant="outlined" color="primary" className={classes.buttonContent}>Inicial</Button>
          </Link>

          <Link href="/productsPage">
            <Button variant="outlined" color="primary" className={classes.buttonContent}>Produtos</Button>
          </Link>
         
            <Link href="/vantagensPage">
              <Button variant="outlined" color="primary" className={classes.buttonContent}>Vantagens</Button>
            </Link>

            <Link href="/fotosPage">
              <Button variant="outlined" color="primary" className={classes.buttonContent} >Fotos</Button>
            </Link>

            <Link href="/aboutPage">
              <Button variant="outlined" color="primary" className={classes.buttonContent}>Quem Somos</Button>
            </Link>

            <Link href="/depoimentosPage">
              <Button variant="outlined" color="primary" className={classes.buttonContent}>Depoimento</Button>
            </Link>

            <Link href="/contato">
              <Button variant="outlined" color="primary" className={classes.buttonContent}>Fale Conosco</Button>
            </Link>
          </div>

          <div className={classes.headerIcons}> 
           <Link href="https://www.facebook.com/climatizadoresperferro/">
            <Button color="primary"> <FacebookIcon fontSize="sm" /> </Button> 
           </Link>
           
           <Link href="">
            <Button className={classes.mail}> <MailIcon fontSize="xs" /> </Button>
           </Link>
             
            <Link href="https://wa.me/5544998154218">
             <Button className={classes.whastapp}> <WhatsAppIcon fontSize="sm" /> </Button>
            </Link>
             
          </div>
         
        </Toolbar>

      </AppBar>
    </div>
    </ThemeProvider>
  );
}


