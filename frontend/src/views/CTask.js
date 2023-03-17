import React, { Component } from "react";
import GridTasks from "./GridTasks";


function CTask(props){
    
    return (<div className="container-fluid">
            <div className="row">

                <div className="col-12 p-2">
                    <GridTasks {...props} />
                </div>
                
            </div>
        </div>);
  
}

export default CTask;