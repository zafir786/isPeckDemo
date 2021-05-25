import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./shared/Components/header/Header";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideNav from "./shared/Components/sideNav/SideNav";
import Project from "./components/project/Project";
import Footer from "./shared/Components/footer/Footer";
import Report from './components/report/Report';
import {BrowserRouter} from 'react-router-dom'

const useStyles = makeStyles({});

export default function Dashboard() {
  const classes = useStyles();
  return (
      <BrowserRouter>
    <div className={classes.container}>
      <Header />
      <SideNav />
      <Switch>
        <Route path="/" component =  {Home} />
        <Route path="/project" component={Project} />
        <Route path = '/report' component={Report} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
