
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import {Button, Hidden, Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const AutoPlayDepoimentos = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    text:  <div>
    <h1 style={{marginBottom:"30px", color:"#0058b0"}}>Depo
      <span style={{paddingBottom:'20px', borderBottom:'2px solid #0058b0'}}>ime</span>ntos</h1>
      <p>
      <strong style={{fontSize:"15px", fontStyle:"italic", color:'#666'}}> No verão a academia fica ainda mais movimentada e só os ventiladores <br/>
      não resolviam o problema do calor e clima abafado. <br/>
      Com a instalação de um climatizador de médio porte sentimos uma grande diferença <br/>
      e por ser evaporativo da uma sensação de resfrescância ainda maior. </strong>
      <br/>
      </p>
            <h3>FÁBIO STANZIOLA</h3>
              Academia Power - PR

      </div>
    },
    {
      text: <div>
      <h1 style={{marginBottom:"30px", color:"#0058b0"}}>Depo
      <span style={{paddingBottom:'20px', borderBottom:'2px solid #0058b0'}}>ime</span>ntos</h1>
      <p>
      <strong style={{fontSize:"15px", fontStyle:"italic", color:'#666'}}>
      "Sabendo que hoje em dia manter um ambiente climatizado é uma prioridade para <br/>
      quem quer agradar seus clientes, foi aí que encontramos os Climatizadores Perferro. <br/>
      Com os climatizadores nossa empresa ficou muito mais agradável <br/>
      tanto para nossos colaboradores quanto para nossos clientes."</strong>
      <br/>
      </p>
            <h3>PEDRO SOUZA</h3>
            Supermercado Paraíso - MT
     </div>
    },
    {
      text:  <div>
      <h1 style={{marginBottom:"30px", color:"#0058b0"}}>Depo
      <span style={{paddingBottom:'20px', borderBottom:'2px solid #0058b0'}}>ime</span>ntos</h1>
      <p>
      <strong style={{fontSize:"15px", fontStyle:"italic", color:'#666'}}>
      "No verão nosso barracão ficava muito quente e percebemos que o rendimento <br/>
      dos funcionários caia pois o desgaste e cansasso é maior. <br/>
      Buscando alguma alternativa para diminuir a temperatura do ambiente encontramos <br/>
      os Climatizadores Perferro, além de melhorar o clima do barracão ele também melhorou a qualidade do ar." </strong>
      <br/>
      </p>
            <h3>ANTÔNIO AZEVEDO</h3>
            ASM Ferragens - MS
      </div>
    },
    {
      text:  <div>
      <h1 style={{marginBottom:"30px", color:"#0058b0"}}>Depo
      <span style={{paddingBottom:'20px', borderBottom:'2px solid #0058b0'}}>ime</span>ntos</h1>
      <p>
      <strong style={{fontSize:"15px", fontStyle:"italic", color:'#666'}}>
      "Fazia tempo que eu queria climatizar meu supermercado, ouvia os clientes <br/>
      reclamando do calor, mas a opção de ar condicionado era inviável <br/>
      pelo alto custo da energia, foi aí que encontramos os Climatizadores Perferro <br/>
      os climatizadores resolveram o problema do calor e ainda enonomizamos com energia."
      </strong>
      <br/>
      </p>


            <h3>FRANCISCO SILVEIRA</h3>
            Supermercado Avenida - PR
      </div>
    },
  ];


function Depoimentos () {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (

      <div style={{ paddingTop:'120px' }}>
          <Paper square elevation={0} style={{
            display: 'flex',
            alignItems: 'center',
            height: 5,
            paddingLeft: theme.spacing(4),
          }}>
          <Typography style={{
            width:'80%',
            margin:'25rem auto 0',
            textAlign:'center',
            lineHeight:'30px',
          }}>{tutorialSteps[activeStep].text}</Typography>
          </Paper>

          <AutoPlayDepoimentos
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>

          {tutorialSteps.map((step, index) => (
          <div key={step.text}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div style={{
                display: 'block',
                maxWidth: 1000,
                overflow: 'hidden',
                width: '100%',
                margin:'auto',
              }} src={step.text} alt={step.label} />
            ) : null}
          </div>
          ))}
      </AutoPlayDepoimentos>
      <Hidden xlUp  smDown>

        <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="bottom"
        activeStep={activeStep}
        style={{
          flexGrow:1,
          margin:'0 0 0 2.4rem',

        }}


        nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 3} style={{
              background:'inherit',
              borderRadius:'10px 0 10px 0',
              border:'none',
              position: 'relative',
              bottom:'1rem',
              margin:' 0 auto',
            }}>
            {theme.direction === 'rtl' ?  <KeyboardArrowLeft /> : <KeyboardArrowRight /> }

            </Button>
        }

        backButton={
            <Button  size="small" onClick={handleBack} disabled={activeStep === 0} style={{
              background:'inherit',
              borderRadius:'10px 0 10px 0',
              border:'none',
              position: 'relative',
              bottom:'1rem',
              margin:' 0 auto',
            }}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
        }
        />
      </Hidden>
        </div>
    )
}

export default Depoimentos
