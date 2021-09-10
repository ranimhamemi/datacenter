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
const  TabTemperature =({database}) => {
    const  Y1=[]
    for (const property in database) {
    
        Y1.push( database[property]._Temperature );
    }
    return (Y1) ;
}





  
  export default function LineChart({database}) {

    const classes = useStyles();


    const X = TabTime({database});
    console.log(X);
    const Y1= TabTemperature({database});
    console.log(Y1);
    
    


    const data = {
    labels: X ,
    datasets: [
      {
        label: "temperature ",
        data: Y1,
        fill: true,
        backgroundColor: "rgba(240, 140, 59,0.2)",
        borderColor: "#f08c3b" ,
        animation: false
        
      },
      
      
    ]
    
  };
    
    return (
        <Card className={classes.root} variant="outlined"  id="chartT">
      <div className="linechart">
        <Line data={data} />
      </div>
      </Card>
    );
  }
  

