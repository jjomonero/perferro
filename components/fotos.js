import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core'
import Image from 'next/image'

 function Fotos() {
  return (
    <div>
        <div style={{
           flexGrow: 1,
           width:'86%',
           margin:'30px auto',
           padding:'150px 0 50px',
        }}>
          <Typography style={{width:'100%'}}>
               <Typography variant="h1" style={{
                    fontWeight:'bolder',
                    fontSize:'38px',
                    color:'#0058b0',
                    position:'relative',
                    margin:' 0 auto 30px',
                    width:'100%',
                    textAlign:'center',
               }}>
               F<span style={{
                   paddingBottom:'15px',
                   borderBottom:'3px solid #0058b0',
               }}>oto</span>s</Typography>
            <p style={{
                     fontWeight: 'lighter',
                     fontSize:'1em',
                     margin: '60px 0 20px',
                     lineHeight:'25px',
                     color:'#666',
                     textAlign:'center',
                     fontFamily:'cursive'
                }}>
                Os Climatizadores Perferro podem ser instalados em qualquer ambiente sem a necessidade de
                adequação ou adaptação,
                 <br/> por se tratar de um climatizador evaporativo, não há a necessidade do ambiente ser
                 fechado como o ar condicionado.
            </p>
            </Typography>

          {/* first Row */}
          <Grid container spacing={12}>
            <Grid item xs={12} sm={6}>
              <Paper style={{
                maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
              }}>
                <Image style={{
                   transition:'2.5s',
                }} src="/images/fotos/igreja.JPG" width="400" height="250" alt="igreja"/>
                IGREJA
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper style={{
                maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
              }}>
                <Image  src="/images/fotos/oficina.JPG" width="400" height="250" alt="oficina"/>
                OFICINA
              </Paper>
            </Grid>
          </Grid>

            {/* second Row */}

          <Grid container spacing={12}>
            <Grid item xs={12} sm={6}>
              <Paper style={{
                maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
              }}>
                <Image src="/images/fotos/mecanicaDeCaminhoes.JPG" width="400" height="250" alt="mecanica"/>
                MECÂNICA DE CAMINHÕES
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper style={{
                maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
              }}>
                <Image src="/images/fotos/padaria.JPG" width="400" height="250" alt="padaria"/>
                PADARIA
              </Paper>
            </Grid>
          </Grid>

           {/* thirt Row */}

          <Grid container spacing={12}>
            <Grid item xs={12} sm={6}>
              <Paper style={{
                maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
              }}>
                <Image src="/images/fotos/industria.JPG" width="400" height="250" alt="industria"/>
               INDÚSTRIA
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper style={{
                maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
              }}>
                <Image src="/images/fotos/lojaDeEquipamentos.JPG" width="400" height="250" alt="loja"/>
                LOJA DE EQUIPAMENTOS
              </Paper>
            </Grid>
          </Grid>

            {/* fourth row */}

            <Grid container spacing={12}>
              <Grid item xs={12} sm={6}>
                <Paper style={{
                  maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
                }}>
                  <Image src="/images/fotos/salaoDeBeleza.JPG" width="400" height="250" alt="salão"/>
                  SALÃO DE BELEZA
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper style={{
                  maxWidth:'400px',
                color: '#fff',
                background:'#0058b0',
                margin:'30px auto',
                padding: 0,
                textAlign: 'center',
                fontWeight:'bolder',
                borderRadius:'20px',
                transition:'1.5s',
                }}>
                  <Image src="/images/fotos/supermercado.JPG" width="400" height="250" alt="supermercado"/>
                  SUPERMERCADO
                </Paper>
              </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Fotos
