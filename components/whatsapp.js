

import { IconButton, Link, makeStyles } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'fixed',
        bottom:'0',
        right:'0',
        padding:'10px',
        margin:'20px',
        background:'#3ef834',
        transitionDuration:'1s',
        [theme.breakpoints.down('sm')]: {
            padding:'8px',
            margin:'10px'
          },
        // border:'20px solid #fff',
        '&:hover':{
        background:'#23c51a',
        },
        
    },
    icon:{
        color:'#fff',
        fontSize:'60px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'30px',
          },
    }
}))

export default function Whatsapp () {
    const classes = useStyles();
    return (
        <div>
            <Link href="https://wa.me/5544998154218">
                <IconButton className={classes.root}>
                    <WhatsAppIcon className={classes.icon}/>
                </IconButton>
            </Link>
            
        </div>
    )
}