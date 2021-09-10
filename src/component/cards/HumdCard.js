import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CloudIcon from '@material-ui/icons/Cloud';
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






export default function HumdCard({statueH,valueH}) {
    const classes = useStyles();
   
    console.log(statueH,valueH);
  
    return (
      
      <Card className={classes.root} variant="outlined" id="cardH">
        <CardContent>
          <CloudIcon fontSize="large" />
          <Typography variant="h5" component="h2" >
            Humidity
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
  
          {statueH?
          <div>HIGH <Alert variant="filled" severity="info">!!!!! Alert of high humidity !!!!!</Alert> </div>:
          <div>LOW</div>}
  
          </Typography>
  
          <Typography >
  
         {valueH}
  
          </Typography>
        </CardContent>
      </Card>
     
    );
  }
  