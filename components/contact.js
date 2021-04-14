import React from 'react'
import { FormControl, NativeSelect, TextField, Button, Typography} from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles'
import emailjs from 'emailjs-com';


function enviarEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmailMessage', 'template_1e6tlle', e.target, 'user_K6gt93bCqbsN5pD5DUDsp' )
  .then((result) => {
    <Alert severity="success" >This is a success alert — check it out!</Alert>
  }, (error) => {
    <Alert severity="error" >This is a error alert — check it out!</Alert>
  });
  e.target.reset();
}

const useStyles = makeStyles((theme) => ({
    root:{  
        width:'90%', 
        textAlign:'center',
        margin:'auto',
    },
    forms:{
        maxWidth:'400px',
        display:'grid',
        gap:'5px',
        width:'100%',
        margin:'auto'
    },
    input:{
        width:'20em',
        margin:'auto',
        background:'#fff',
        padding:'5px',
        borderRadius:'5px',
        overflow:'hidden',
        border:'1px solid #ccc'
    },
    textField:{
      background:'#fff',
      width:'20em',
      margin:'auto'
    },
    button:{
      width:'20em',
      margin:'20px auto',
      '&:hover':{
        background:'#00b359',
      }
    },
    header:{
      width:'100%',
      padding:'20px',
      textAlign:'center'
    },
    h1:{
      color:'#000',
      padding:'20px',
      fontWeight:'bolder', 
      fontSize:'38px',
      fontFamily:'monospace',
      marginBottom:'30px'
    },
    span:{
      padding:'0 10px 10px ',
      border:'3px solid #000',
      fontFamily:'monospace',
      transition:'3s',
      cursor:'default',
      '&:hover':{
      border:'3px solid #b2dfdb',
      }

    },
    p:{
      color:'#666666',
      fontSize:'1.2em' ,
    },
    endereco:{
      color:'#e55',
    }
}))


export default function Contact() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    const handleChange = (event) => {
        setState(event.target.value);
      };
    // const handleSubmit = (event) =>{
    //     alert( 'Formulário enviado' + state.value);
    //     event.preventDefault();
    // }  
    return ( 
        
        <div style={{background:'url("/images/4.png")', paddingTop:'100px'}}>
        <Typography className={classes.header}>
           <h1 className={classes.h1}> Fale <span className={classes.span}>Conosco</span></h1>

           <h2></h2>

            <p className={classes.p}>Entre em contato através do formulário abaixo,
            teremos o prazer em lhe atender.</p>
        </Typography>
        
      <div className={classes.root} >
       
          <form className={classes.forms}  /*onSubmit={enviarEmail}*/>
          <TextField
                className={classes.textField}
                name="nome"
                label="Nome"
                placeholder="Nome"
                variant="outlined"
              />
              <TextField 
              className={classes.textField}
                name="email"
                label="E-mail"
                placeholder="E-mail"
                variant="outlined"
              />
              <TextField 
              className={classes.textField}
                name="telefone"
                label="Telefone"
                placeholder="Telefone"
                variant="outlined"
                type="tel"
              />
              <TextField 
              className={classes.textField}
                name="cidade"
                label="Cidade"
                placeholder="Cidade"
                variant="outlined"
              />
              <TextField 
              className={classes.textField}
                name="estado"
                label="Estado"
                placeholder="Estado"
                variant="outlined"
              />

              <FormControl variant="filled">
              <NativeSelect className={classes.input} 
                name="selecao"
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'filled-age-native-simple',
                }}>
              <option value="" style={{color:'#ccc'}}>Selecione um Assunto</option>
              <option value="">Orçamento</option>
              <option value="">Informações</option>
              <option value="">Dúvidas</option>
              <option value="">Representação</option>
              <option value="">Financeiro</option>
              </NativeSelect>
              </FormControl>
              <TextField 
                className={classes.textField}
                name="mensagem"
                label="Mensagem "
                placeholder="Placeholder"
                multiline
                variant="outlined"
              />

              <Button type="submit" variant="contained" className={classes.button}>
              enviar formulario
              </Button>
          </form>

          <Typography className={classes.endereco}>
          <br/>
          <h3>Endereço</h3>
          <br/>
          <strong>Peabiru - PR</strong>
          <br/>
          <p>Rua Projetada C/S Nº, Parque Industrial I
          <br/>
          Fone: (44) 3531-1150</p>
          <br/>
        </Typography>

      </div>
      </div>
        
    )
  }