import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
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
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  items:{
      margin:'0 auto',
      zIndex:'9999'
  }, 
  menu:{
      width:'30px',
      background:'transparent',
      borderRadius:'5px'
  },
  link:{
      width:'100%',
      underline:'none',
      '&:hover':{
          textDecoration:'none',
          cursor:'pointer'
      }
  },
  drawer:{
    position:'fixed',
    top:'10px',
    right:'0',
    zIndex:'9990',
    margin:'10px',
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display:'inherit'
    },
    '&:focus':{
      display:'none'
    }
  }
}));

export default function DrawerComponents() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
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
                    <HomeIcon/>     
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
                <ShoppingCartIcon/>
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
                <AddToQueueIcon/>
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
                <PhotoLibraryIcon/>
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
                <LocationCityIcon/>
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
                <FeedbackIcon/>
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
                <ContactsIcon/>
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
  );
}
