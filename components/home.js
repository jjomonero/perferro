import React from 'react';
import {useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const colorChange = [
    
]
const tutorialSteps = [
  {
    imgPath:
      '/images/home1.jpeg',
  },
  {
    imgPath:
      '/images/home2.jpeg',
  },
  {
    imgPath:
      '/images/home3.jpeg',
  },
  {
    imgPath:
      '/images/home4.jpeg',
  },
  {
    imgPath:
      '/images/homeVerao.jpeg',
  },
  
];

function Home() {
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
    <div style={{
        flexGrow: 1,
        paddingTop:'38px',}}>


            <div style={{
                padding:'60px 60px 0 60px',
                textAlign:'center',
                color:'#000',
                cursor:'default'}}>
                <div style={{
                    fontSize:'20px',
                    margin:'auto',
                    }}>
                    <h2 style={{color:'#0058b0'}}>Climatizadores</h2>
                    <h1 style={{color:'#00b356', borderTop:'none', background:'#0058b0 ', maxWidth:'20rem', margin:'auto'}}>Perferro</h1>
                </div>

                <div style={{padding:'10px', background:'#fff'}}>
                    <Button variant="text" color="primary" href="/produtos" style={{color:'#00d156', fontWeight:'bold'}}>Produtos</Button>
                    <Button variant="text" color="primary" href="/vantagensPage" style={{color:'#00d156', fontWeight:'bold'}}>Vantagens</Button>
                    <Button variant="text" color="primary" href="/fotosPage" style={{color:'#00d156', fontWeight:'bold'}}>Fotos</Button>
                    <Button variant="text" color="primary" href="/aboutPage" style={{color:'#00d156', fontWeight:'bold'}}>Quem Somos</Button>
                    <Button variant="text" color="primary" href="/depoimentosPage" style={{color:'#00d156', fontWeight:'bold'}}>Depoimentos</Button>
                    <Button variant="text" color="primary" href="/contato" style={{color:'#00d156', fontWeight:'bold'}}>Fale Conosco</Button>
                </div>
            </div>

      <Paper square elevation={0} style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '4rem',
          backgroundColor: '#fff',
      }}>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 20000 ? (
              <img style={{
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                minHeight:'250px'
              }} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
     
    </div>
  );
}

export default Home;
