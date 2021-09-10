import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
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

export default function GasCard({statueG,valueG}) {
    const classes = useStyles();
   
    console.log(statueG,valueG);
  
    return (
      
      <Card className={classes.root} variant="outlined" id="cardG">
        <CardContent>
          <BubbleChartIcon fontSize="large" />
          <Typography variant="h5" component="h2" >
            Gas
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
  
          {statueG?
          <div>HIGH  <Alert severity="error">!!!!!!Alert of high level of gas !!!!!</Alert> </div>:
          <div>LOW</div>}
  
          </Typography>
  
          <Typography >
  
         {valueG}
  
          </Typography>
        </CardContent>
      </Card>
     
    );
  }