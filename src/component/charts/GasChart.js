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

const  TabGas =({database}) => {
    const  Y3=[]
    for (const property in database) {
    
        Y3.push( database[property]._Gas );
    }
    return (Y3) ;
}

export default function LineChart({database}) {
    const classes = useStyles();

const X = TabTime({database});
    console.log(X);

    const Y3=TabGas({database});
    console.log(Y3);
    const data = {
        labels: X ,
        datasets: [
            {
                label: "Gas",
                data: Y3,
                fill: true,
                backgroundColor: "rgba(183, 230, 72, 0.2)",
                borderColor: "#b7e648",
                animation: false

              }
         
        ]
      };
        
        return (
            <Card className={classes.root} variant="outlined" id="chartG">
          <div className="linechart">
            <Line data={data} />
          </div>
          </Card>
        );



}