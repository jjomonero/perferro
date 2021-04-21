
import { IconButton, Link } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';



export default function Whatsapp () {
    return (
        <div>
            <Link href="https://wa.me/5544998154218">
                <IconButton style={{
                     position:'fixed',
                     bottom:'0',
                     right:'0',
                     padding:'5px',
                     margin:'20px',
                     background:'#3ef834',
                }}>
                    <WhatsAppIcon style={{
                        color:'#fff',
                        fontSize:'30px',
                    }}/>
                </IconButton>
            </Link>
            
        </div>
    )
}