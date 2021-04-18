import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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
import { Mail } from '@material-ui/icons';
import { Link } from '@material-ui/core';
import Image from 'next/image'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top:0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    margin:'auto'
  },
    headerIcons:{
        [theme.breakpoints.down('sm')]: {
            display:'none'
          },
    },
    items:{
        margin:'auto'
    },
    icon:{
        marginRight: theme.spacing(4),
        alignItems:'left'
    }
}));

export default function NavBar() {
  const classes = useStyles();
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
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <Link className={classes.link} href="/">
            <ListItem >
                <ListItemIcon className={classes.items} button>
                    <HomeIcon className={classes.icon}/>     
                    <ListItemText primary={' Página Inicial'} />
                </ListItemIcon>
            </ListItem>
          </Link>  
      </List>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>

      <List>
        <Link className={classes.link} href="/productsPage" >
            <ListItem >
                <ListItemIcon button className={classes.items}>
                <ShoppingCartIcon className={classes.icon}/>
                <ListItemText primary={'Produtos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>


      <List>
        <Link className={classes.link} href="/vantagensPage">
            <ListItem >
                <ListItemIcon button className={classes.items}>
                <AddToQueueIcon className={classes.icon}/>
                <ListItemText primary={'Vantagens'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>


      <List>
        <Link className={classes.link} href="/fotosPage">
            <ListItem>
                <ListItemIcon button className={classes.items}>
                <PhotoLibraryIcon className={classes.icon}/>
                <ListItemText primary={'Fotos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>


      <List>
        <Link className={classes.link} href="/aboutPage">
            <ListItem >
                <ListItemIcon button className={classes.items}>
                <LocationCityIcon className={classes.icon}/>
                <ListItemText primary={'Quem Somos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>
      
      <List>
        <Link className={classes.link} href="/depoimentosPage">
            <ListItem >
                <ListItemIcon button className={classes.items}>
                <FeedbackIcon className={classes.icon}/>
                <ListItemText primary={'Depoimentos'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>

      <List>
        <Link className={classes.link} href="/contato">
            <ListItem >
                <ListItemIcon button className={classes.items}>
                <ContactsIcon className={classes.icon}/>
                <ListItemText primary={'Fale Conosco'} />
                </ListItemIcon>
            </ListItem>
        </Link>
      </List>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" top="0" color="inherit">
        <Toolbar>
        
    <div className={classes.drawer}>
        {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <MenuIcon className={classes.menu}/>
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
          <Typography className={classes.title}>
          <Link href="/">
          <Image src="/images/cp.png" alt="logo" width={166} height={80} className={classes.logo}/>
          </Link>
          </Typography>

          <div > 
           <Link href="https://www.facebook.com/climatizadoresperferro/">
            <Button color="inherit" className={classes.headerIcons}> <FacebookIcon  /> </Button> 
           </Link>
           
           <Link href="">
            <Button color="inherit" className={classes.headerIcons}> <MailIcon  /> </Button>
           </Link>
             
            <Link href="https://wa.me/5544998154218">
             <Button color="inherit" className={classes.headerIcons}> <WhatsAppIcon  /> </Button>
            </Link>
             
          </div>
        </Toolbar>
      </AppBar>

      
    </div>
    
  );
}
