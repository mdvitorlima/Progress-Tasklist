import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { ValidatedForm } from "../forms/ValidatedForm";


function FormTask(props) {

    let defaultAttrs = { type: "text", required: true };
    
    let params = useParams();

    let objMod = {}
    

    if(typeof(params.id) != "undefined"){
        objMod = props.tasks.filter((x) => x._id == params.id)[0];            
    }
    

    let formModel = [
        { label: "description", attrs: { defaultValue: objMod? objMod.description : '' } },
        { label: "deadline", attrs: { defaultValue: objMod? objMod.deadline : '' } },
        { label: "progress", attrs: { defaultValue: objMod? objMod.progress : '' } }]
  
    
    const handleSubmit = (formData) => {
            const obj = {
                ...formData
            } 
            
            if(params.id){
               props.updateTask(obj, params.id);
            }else{                
               props.placeTask(obj);
            }
            
        
            props.history.push("/tasks/ini");
        }
        
        
    const handleCancel = () => {
            props.history.push("/tasks/ini");
        }
    
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col bg-dark text-white">
                <div className="navbar-brand">Registro de Atividades</div>
            </div>
        </div>
        <div className="row">
            <div className="col m-2">

                <ValidatedForm formModel={formModel}
                    defaultAttrs={defaultAttrs}
                    submitCallback={handleSubmit}
                    cancelCallback={handleCancel}
                    submitText="Registrar"
                    cancelText="Retornar" />
            </div>
        </div>
    </div>
    );

  };




export default FormTask;
