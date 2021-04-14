import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardProducts from './cardProducts'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Vantagens from '../components/vantagens'
import Fotos from './fotos'

// import Typography from '@material-ui/core/Typography'
// import CardMedia from '@material-ui/core/CardMedia'
import Depoimentos from './depoimentos'

const useStyle = makeStyles ((theme) => ({
  root:{
  },
}))

 function Main(props) {
   const classes = useStyle();
  return <>
        {/* <CardProducts/> */}
        {/* <Vantagens/> */}
        {/* <QuemSomos/> */}
        {/* <Depoimentos/> */}
        <Fotos/>
        </>
}


export default Main