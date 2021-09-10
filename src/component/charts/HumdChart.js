import React from 'react';
import { Line } from 'react-chartjs-2';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    root: {
      minWidth: 500,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const  TabTime =({database}) => {
    const  X=[]
    for (const property in database) {
      X.push(property)
    }
    return (X) ;
}

const  TabHumidity =({database}) => {
    const  Y2=[]
    for (const property in database) {
    
        Y2.push( database[property]._Humidity );
    }
    return (Y2) ;
}


export default function LineChart({database}) {
    const classes = useStyles();

const X = TabTime({database});
    console.log(X);
const Y2 = TabHumidity({database});
    console.log(Y2);

    const data = {
        labels: X ,
        datasets: [
          
          {
            label: "Humidity",
            data: Y2,
            fill: true,
            backgroundColor: "rgba(72, 167, 230, 0.2)",
            borderColor: "#48a7e6",
            animation: false
            
          },
         
        ]
      };
        
        return (
            <Card className={classes.root} variant="outlined" id="chartH">
          <div className="linechart">
            <Line data={data} />
          </div>
          </Card>
        );



}