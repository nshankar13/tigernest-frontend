import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import HomeNav from '../components/homeNav'
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
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


var divStyle = {
  color: 'white'
  //color: 'dodgerblue'
};

var divStyle2 = {
  //color: 'white'
  color: 'dodgerblue'
};

var divStyle3 = {
  color: 'black'
}

/*const theme = createMuiTheme({
  typography: Typography(createPalette(), {
    fontFamily: '"Comic Sans"',
  })
});*/
/*<Card style={{position: 'absolute', display: 'inline-block', top: 200, left: '5%', maxWidth: 300, align: "center"}}>
      <CardContent>
        <Typography variant="body1" component="p">
        Matching Princeton students with overnight visitors.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        <Typography component="div" style={{backgroundColor: '#424242', height: 50, width: 900, opacity: 0.8 }} />

     */
class Home extends React.Component{ 

  render(props) {

  return (<div> 

    <link href="https://fonts.googleapis.com/css?family=Baloo|Baumans|Jaldi|Marvel|Viga&display=swap" rel="stylesheet"/>
     <HomeNav />
      
    <div className="strokeme" style={{position: 'absolute', top: '50%', left: '20%', color: 'white'}}> 
     <h1 style ={{textShadow: 20, fontFamily: "Jaldi"}}> Pairing Princeton students with overnight visitors  </h1>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        background: url("/static/princeton-dorm.jpg");
        background-size: cover;
      }
      .strokeme {
        color: white;
        text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
      }
    `}</style> 
  </div>

  )}
}
export default Home