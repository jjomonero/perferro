



import Image from 'next/image'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{
        paddingTop:'150px',
        width:'100%',
        height:'100%',
        background:'url("/images/borboleta.jpeg")',
    },
    container:{
        padding:'60px',
        textAlign:'center',
    },
    description:{
        fontSize:'20px',
        margin:'auto',
        color:'#fff'
    }
})


 export default function Home () {
    const classes =  useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.description}>
                    <h1>Perferro</h1>
                    <h2>Climatizadores</h2>
                    <p> Climatizadores em vários modelos e tamanho para atender as suas necessidades</p>
                </div>

                <div className={classes.image}>
                    <Image src="/images/coup.png" width="600" height="350"></Image>
                </div>
            </div>
        </div>
    )
}