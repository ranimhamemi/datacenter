import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Alert from '@material-ui/lab/Alert' ;
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    height : 175,
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

export default function TempCard({ value, statue }) {
  const classes = useStyles();

  console.log(value, statue, "temperature");
  return (
    <Card className={classes.root} variant="outlined" id="cardT">
      <CardContent>
        <WhatshotIcon fontSize="large" />
        <Typography variant="h5" component="h2">
          Temperature
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {statue ? <div>HIGH <Alert severity="error" >!!!!! Alert of high temperature !!!!!</Alert> </div>  : <div>LOW</div>}
        </Typography>

        <Typography>{value}</Typography>
      </CardContent>
    </Card>
  );
}
