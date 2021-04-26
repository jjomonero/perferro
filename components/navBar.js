import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Hidden, Link } from '@material-ui/core';
import Image from 'next/image'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function NavBar() {
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(list, {
        [state]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{background:'#0038b0'}}
    >
      <List>
          <Link href="/">
            <ListItem >
                <ListItemIcon style={{margin:'auto',  color:'#00d359', fontWeight:'bolder'}} button>
                    <HomeIcon style={{marginRight:'2rem', color:'#00e359'}}/>
                    <ListItemText primary={' Página Inicial'} />
                </ListItemIcon>
            </ListItem>
          </Link>
      </List>

      <List>
        <Link href="/produtos" >
            <ListItem >
                <ListItemIcon button style={{margin:'auto',  color:'#00d359', fontWeight:'bolder'}}>
                <ShoppingCartIcon style={{marginRight:'2rem', color:'#00e359'}}/>
                <ListItemText primary={'Produtos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>


      <List>
        <Link href="/vantagensPage">
            <ListItem >
                <ListItemIcon button style={{margin:'auto',  color:'#00d359', fontWeight:'bolder'}}>
                <AddToQueueIcon style={{marginRight:'2rem', color:'#00e359'}}/>
                <ListItemText primary={'Vantagens'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>


      <List>
        <Link href="/fotosPage">
            <ListItem>
                <ListItemIcon button style={{margin:'auto',  color:'#00d359', fontWeight:'bolder'}}>
                <PhotoLibraryIcon style={{marginRight:'2rem', color:'#00e359'}}/>
                <ListItemText primary={'Fotos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>


      <List>
        <Link href="/aboutPage">
            <ListItem >
                <ListItemIcon button style={{margin:'auto',  color:'#00d359', fontWeight:'bolder'}}>
                <LocationCityIcon style={{marginRight:'2rem', color:'#00e359'}}/>
                <ListItemText  primary={'Quem Somos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>

      <List>
        <Link href="/depoimentosPage">
            <ListItem >
                <ListItemIcon button style={{margin:'auto',  color:'#00d359', fontWeight:'bolder'}}>
                <FeedbackIcon style={{marginRight:'2rem', color:'#00e359'}}/>
                <ListItemText primary={'Depoimentos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>

      <List>
        <Link href="/contato" >
            <ListItem  >
                <ListItemIcon button style={{margin:'auto',  color:'#00d359', fontWeight:'bolder'}} >
                <ContactsIcon style={{marginRight:'2rem', color:'#00e359'}} />
                <ListItemText primary={'Fale Conosco'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>

      <List style={{background:'#fff'}}>
        <Link>
            <ListItem  >
                <ListItemIcon button style={{margin:'auto',  color:'#00d359'}} >

                <Link href="https://www.facebook.com/climatizadoresperferro/">
                <FacebookIcon style={{margin:'0 40px', color:'#00e359'}} />
                </Link>

                <Link href="/">
                <MailIcon style={{margin:'0 40px', color:'#00e359'}} />
                </Link>

                <Link href="https://wa.me/5544998154218">
                <WhatsAppIcon style={{margin:'0 40px', color:'#00e359'}} />
                </Link>

                </ListItemIcon>
            </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div style={{
      flexGrow:'1',
      top:'0',}}>
      <AppBar position="fixed" top="0" color="inherit">
        <Toolbar >

    <div >
        {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <MenuIcon color="primary" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
          <Typography style={{margin:'auto'}}>
          <Link href="/">
          <Image src="/images/cp.png" alt="logo" width={166} height={80} />
          </Link>
          </Typography>

          <Hidden xlUp  smDown>
          <div >
           <Link href="https://www.facebook.com/climatizadoresperferro/">
            <Button color="inherit"> <FacebookIcon  /> </Button>
           </Link>

           <Link href="">
            <Button color="inherit"> <MailIcon  /> </Button>
           </Link>

            <Link href="https://wa.me/5544998154218">
             <Button color="inherit"> <WhatsAppIcon  /> </Button>
            </Link>
          </div>
          </Hidden>

        </Toolbar>
      </AppBar>


    </div>

  );
}
