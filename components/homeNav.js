import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Router from 'next/router';

const studentServer = "http://ec2-18-224-19-243.us-east-2.compute.amazonaws.com"
//const studentServer = "http://localhost:3000"
class HomeNav extends React.Component {
  //const history = createMemoryHistory();

  constructor(props) {
    super(props);
  }

  handleLogout=() => {
    if (process.browser) {
    localStorage.removeItem("token");
    localStorage.removeItem("eligibility");
    }
    Router.push("/");
  }

  render() {
    return (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Baloo|Baumans|Jaldi|Marvel|Viga&display=swap" rel="stylesheet"/>
      <AppBar position="static" style={{backgroundColor: '#5d4037', opacity: 0.9}}>
        <Toolbar>
          <Typography variant="h6" style={{fontFamily: "Jaldi"}}>
            <b> TigerNest </b>
          </Typography>
          <Button color="inherit" style={{position: 'absolute', right: '10%', paddingRight: 10, fontFamily: 'Jaldi'}} onClick={() => Router.push(studentServer + "/myEvents")}>Princeton Student Login </Button>
          <Button color="inherit" style={{position: 'absolute', right: '1%', fontFamily: 'Jaldi'}} onClick={() => Router.push("/visitor/register")}> Guest Login </Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}


export default HomeNav
