import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Button} from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'90%',
    margin:'auto',
    padding:'150px 0',
  },
  paper: {
    maxWidth:'400px',
    color: '#fff',
    background:'#00b359',
    margin:'auto',  
    padding: 0,
    textAlign: 'center',
    fontWeight:'bolder',
    borderRadius:'20px',
    transition:'1.5s',
    '&:hover':{
      transition:'2.5s',
      transform:'translateY(30px)',
      transition:'2s all',
      background:'none'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'8px',
    },

    },
    image:{
      transition:'2.5s',
      '&:hover': {
      transition:'2.5s',
        transformOrigin:' center center',
        transform: 'scale(1.5)',
    }
  },

}));

 function Fotos() {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
          {/* first Row */}
          <Grid container spacing={4}>           
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Image className={classes.image} src="/images/fotos/igreja.JPG" width="400" height="250"/>
                IGREJA
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Image className={classes.image} src="/images/fotos/oficina.JPG" width="400" height="250"/>
                OFICINA
              </Paper>
            </Grid> 
          </Grid>    

            {/* second Row */}

          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Image className={classes.image} src="/images/fotos/mecanicaDeCaminhoes.JPG" width="400" height="250"/>
                MECÂNICA DE CAMINHÕES
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Image className={classes.image} src="/images/fotos/padaria.JPG" width="400" height="250"/>
                PADARIA
              </Paper>
            </Grid>
          </Grid> 

           {/* thirt Row */}    

          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Image className={classes.image} src="/images/fotos/industria.JPG" width="400" height="250"/>
               INDÚSTRIA
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Image className={classes.image} src="/images/fotos/lojaDeEquipamentos.JPG" width="400" height="250"/>
                LOJA DE EQUIPAMENTOS
              </Paper>
            </Grid>
          </Grid>

            {/* fourth row */}

            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Image className={classes.image} src="/images/fotos/salaoDeBeleza.JPG" width="400" height="250"/>
                  SALÃO DE BELEZA
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Image className={classes.image} src="/images/fotos/supermercado.JPG" width="400" height="250"/>
                  SUPERMERCADO
                </Paper>
              </Grid>
            </Grid>
        </div>
    </>
  )
}

export default Fotos