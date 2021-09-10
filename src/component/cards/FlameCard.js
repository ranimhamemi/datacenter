import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Alert from '@material-ui/lab/Alert' ;
import './Cards.css';


const useStyles = makeStyles({
  root: {
    minWidth: 250,
    height : 175,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FlameCard({statueF}) {
    const classes = useStyles();
   
    console.log(statueF);
  
    return (
      
      <Card className={classes.root} variant="outlined" id="cardF">
        <CardContent>
          <WhatshotIcon fontSize="large" />
          <Typography variant="h5" component="h2" >
           Flame
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
  
          {statueF?
          <div>ON FIRE <Alert severity="error">!!!!!!It's on fiiiiire !!!!!</Alert> </div>:
          <div>SAFE</div>}
  
          </Typography>
  
    
        </CardContent>
      </Card>
     
    );
  }