import React from "react";
import classes from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const router = useRouter();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://api.quotable.io/random",
    }).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  const Refresh = () => {
    debugger;
    axios({
      method: "get",
      url: "https://api.quotable.io/random",
    }).then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  return (
    <div className={classes.card}>
      <span className={classes.h1}>
        “A very wise quote is a spectacular waterfall!
        <br /> When you see it, you feel its power!”
      </span>
      <Card sx={{ minWidth: 275 }} className={classes.background}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
            {data?.content}
          </Typography>
          <Typography sx={{ fontSize: 18 }} color="white" gutterBottom>
            -{data?.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => router.push("/PageLayout")}
            size="small"
            className={classes.butn}
          >
            home page
          </Button>
          <Button onClick={Refresh} size="small" className={classes.butn}>
            New Quote
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
