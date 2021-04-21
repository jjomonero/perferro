import React from 'react'
import { FormControl, NativeSelect, TextField , Button, Typography} from "@material-ui/core";
import { Alert} from '@material-ui/lab';
import emailjs from 'emailjs-com';


function enviarEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmailMessage', 'template_1e6tlle', e.target, 'user_K6gt93bCqbsN5pD5DUDsp' )
  .then((result) => {
    <Alert severity="success" > Formulário enviado</Alert>
  }, (error) => {
    <Alert severity="error" > Erro ao enviar formulário</Alert>
  });
  e.target.reset();
}

export default function Contact() {
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    const handleChange = (event) => {
        setState(event.target.value);
      };
    const handleSubmit = (event) =>{
        alert( 'Formulário enviado');
        event.preventDefault();
    }
    return (

        <div style={{ paddingTop:'100px'}}>
        <Typography style={{
           width:'100%',
           padding:'20px',
           textAlign:'center'
        }}>
           <h1 style={{
             color:'#0058b0',
             padding:'20px',
             fontWeight:'bolder',
             fontSize:'33px',
             fontFamily:'monospace',
             marginBottom:'10px',
           }}> Fale <span style={{
            padding:'0 5px 5px ',
            border:'3px solid #0058b0',
            fontFamily:'monospace',
            transition:'3s',
            cursor:'default',
            color:'#00b359',

           }}>Conosco</span></h1>

           <h2></h2>

            <Typography variant="body1" style={{
              color:'#666666',
              fontSize:'1em' ,
            }}>Entre em contato através do formulário abaixo,
            teremos o prazer em lhe atender</Typography>
        </Typography>

      <div style={{
        width:'90%',
        textAlign:'center',
        margin:'auto',
      }} >

          <form style={{
             maxWidth:'400px',
             display:'grid',
             gap:'5px',
             width:'100%',
             margin:'auto'
          }}
          onSubmit={enviarEmail}>
          <TextField 
                style={{
                  background:'#fff',
                  width:'20em',
                  margin:'auto'
                }}
                name="nome"
                label="Nome"
                placeholder="Nome"
                variant="outlined"
              />
              <TextField 
              style={{
                background:'#fff',
                  width:'20em',
                  margin:'auto'
              }}
                name="email"
                label="E-mail"
                placeholder="E-mail"
                variant="outlined"
              />
              <TextField 
              style={{
                background:'#fff',
                  width:'20em',
                  margin:'auto'
              }}
                name="telefone"
                label="Telefone"
                placeholder="Telefone"
                variant="outlined"
                type="tel"
              />
              <TextField 
              style={{
                background:'#fff',
                  width:'20em',
                  margin:'auto'
              }}
                name="cidade"
                label="Cidade"
                placeholder="Cidade"
                variant="outlined"
              />
              <TextField 
              style={{
                background:'#fff',
                  width:'20em',
                  margin:'auto'
              }}
                name="estado"
                label="Estado"
                placeholder="Estado"
                variant="outlined"
              />

              <FormControl variant="filled">
              <NativeSelect style={{
                width:'20em',
                margin:'auto',
                background:'#fff',
                padding:'5px',
                borderRadius:'5px',
                overflow:'hidden',
                border:'1px solid #ccc'
              }}
                name="selecao"
                label="selecao"

                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: 'selecao',
                }}>
              <option value="Selecione um Assunto" style={{color:'#ccc'}}>Selecione um Assunto</option>
              <option value="Orçamento">Orçamento</option>
              <option value="Informações">Informações</option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Representação">Representação</option>
              <option value="Financeiro">Financeiro</option>
              </NativeSelect>
              </FormControl>
              <TextField 
                style={{
                  background:'#fff',
                  width:'20em',
                  margin:'auto'
                }}
                name="mensagem"
                label="Mensagem"
                placeholder="Mensagem"
                multiline
                variant="outlined"
              />

              <Button type="submit" variant="contained" required color="primary" style={{
                width:'20em',
                margin:'20px auto',
              }}>
              enviar formulario
              </Button>
          </form>

          <Typography variant="h3" style={{
            borderRadius:'5px',
            padding:'5px',
            color:'#00b359',
            }}>Endereço</Typography>
          <Typography style={{
            color:'#0058b0',
          }}>
          <strong style={{
            padding:'3px'
            }}>Peabiru - PR</strong>
          <br/>
          <Typography variant="body1" style={{border:'2px solid #0058b0', borderTop:'none', borderRadius:'5px', paddingBottom:'10px'}}>Rua Projetada C/S Nº, Parque Industrial I
          <br/>
          Fone: (44) 3531-1150</Typography>
          <br/>
        </Typography>

      </div>
      </div>

    )
  }
