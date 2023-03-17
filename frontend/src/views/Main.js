import React, { useEffect  } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom"

import { getData, updateTask, placeTask } from "../data/ActionCreators";

import FormTask from "./FormTask";
import CTask from "./CTask";


  function Main(props){

    useEffect(() => {
      props.getData();
    }, []);   
    
    return (
      <Switch>
              <Route path={"/tasks/ini"}
                  render={(routeProps) => <CTask {...props} {...routeProps} /> }/>
              <Route path="/tasks/update/:id" render={routeProps =>
                  <FormTask {...props} {...routeProps} />} />
              <Route path="/tasks/new" render={routeProps =>
                  <FormTask {...props} {...routeProps} />} />              
              <Redirect to="/tasks/ini" />
          </Switch>
  );
 
  }
  
  const mapStateToProps = (state) => {
      
    return {
      tasks: state.tasks.slice(0, 40)
    };
  }

  export default connect(
    mapStateToProps,
    { getData, updateTask, placeTask }
  )(Main);
