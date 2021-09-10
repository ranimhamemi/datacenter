import React, { useState, useEffect } from "react";
import "./App.css";
import { config } from "./firebase/Firebase";
import firebase from "firebase";
import TempCard from "./component/cards/TempCard";
import { Grid } from "@material-ui/core";
import GasCard from "./component/cards/GasCard";
import HumdCard from "./component/cards/HumdCard";
import FlameCard from "./component/cards/FlameCard"
import TempChart from "./component/charts/TempChart";
import HumdChart from "./component/charts/HumdChart";
import GasChart from "./component/charts/GasChart" ;
import {Helmet} from "react-helmet";

function App() {
  const [data, setData] = useState();

  console.log(config);
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  /* function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref("users/").set({
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }
  */

  useEffect(() => {
    var DB = firebase.database().ref("/");
    DB.on("value", (snapshot) => {
      const data2 = snapshot.val();
      setData(data2);
    });
  }, []);

  console.log(data, "data");


  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Datacenter controler</title>
               
            </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          {data && (
            <TempCard
              value={data.RealtimeData.Temperature}
              statue={data.RealtimeData.tempStatue}
            />
          )}
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          {data && (
            <HumdCard
              valueH={data.RealtimeData.Humidity}
              statueH={data.RealtimeData.humdStatue}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {data && (
            <GasCard
              valueG={data.RealtimeData.Gas}
              statueG={data.RealtimeData.gasStatue}
            />
          )}
           </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {data && (
            <FlameCard
              statueF={data.RealtimeData.tempStatue}
            />
          )}
        </Grid>
       
        
         
     
   
         </Grid>
         <Grid container spacing={3} >
         <Grid   item xs={12} sm={12} md={6}>
         {data && (<TempChart  database={data.Database} />)}
         </Grid>
         <Grid   item xs={12} sm={12} md={6}>
         {data && (<HumdChart  database={data.Database} />)}
         </Grid>
         <Grid   item xs={12} sm={12} md={6}>
         {data && (<GasChart  database={data.Database} />)}
         </Grid>
         </Grid>
    </div>
  );
}

export default App ;