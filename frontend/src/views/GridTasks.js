import React, { useState } from 'react';
import "./style.css";

function GridTasks(props){
    
    console.log(props);
    
    let cont = 0;
    let contador = 2;

    const [openSections, setopenSections] = useState({});
    const [inputSearchValue, setinputSearchValue] = useState("");
   
    const handleInputChange = (event) => {
        setinputSearchValue(event.target.value);
    }
    

    const clickSection = (id) => {

       setopenSections(this);

       let is_open = !openSections[id];

       setopenSections({
                ...openSections,
                [id]: is_open
        });

    }
    
    const concluir = (task) => {
        task.progress = "100%";
        const id_param = task._id;
        delete task._id;
        props.updateTask(task, id_param);
    }
    
    const editar = (task) => {
        props.history.push("/tasks/update/" + task._id);
    }

    const createNewTodo = (task) => {
        props.history.push("/tasks/new/");
    }

    const extend = (id) => {
        var object = this.refs.conteudo1;

    }

    const SearchResults2 = () => {
        //return this.props.tasks.filter((x) => x.progress != '100%');
        return props.tasks.
           filter(name => name.description.toLowerCase().includes(inputSearchValue.toLowerCase())
               && name.progress != "100%");
    }


    const definirStyleTasksData = (str) => {

        var dayMonthYear = str.split("/");
        var dataPrazo = new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0], 0, 0, 0);
        var dataAtual2 = new Date();
        var dataAtual = new Date(dataAtual2.getFullYear(), dataAtual2.getMonth(), dataAtual2.getDate(), 0, 0, 0);


        if (dataAtual > dataPrazo) {

            return {
                background: '#E9967A',
                border: '2px solid #ffffff',
                marginTop: 10,
                padding: '10px 20px',
            };

        } else if (dataAtual.getTime() == dataPrazo.getTime()) {
            return {
                background: '#efbc04',
                border: '2px solid #ffffff',
                marginTop: 10,
                padding: '10px 20px',
            };

        } else {
            return {
                background: '#9ACD32',
                border: '2px solid #ffffff',
                marginTop: 10,
                padding: '10px 20px',
            };
        }

    }
    
    const definirStyleTasks = (str) => {

        var res = str.substring(0, str.length - 1);

        if (res >= 90) {
            return {
                background: '#9ACD32',
                border: '2px solid #ffffff',
                marginTop: 10,
                padding: '10px 20px',
            };
        } else if (res < 90 && res > 60) {
            //efbc04
            return {
                background: '#efbc04',
                border: '2px solid #ffffff',
                marginTop: 10,
                padding: '10px 20px',
            };
        } else {
            //dc0304
            return {
                background: '#E9967A',
                border: '2px solid #ffffff',
                marginTop: 10,
                padding: '10px 20px',
            };
        }

    }
    
    return (<div className="container-fluid">
    <div className="row">
     

    <input type="text" className="inputsearch" onChange={handleInputChange} />


    </div>
    <div className="emptydiv">

    </div>
    <div className="row">
        <h2 className="cabh4">Atividades</h2>
    </div>
    <div>
    {props.tasks && (SearchResults2()).map(p =>
            <div className="card m-1 p-1" key={p._id}
                style={definirStyleTasksData(p.deadline)}>
                <h6 onClick={() => clickSection(p._id)} style={{ color: "black", fontSize: 16, fontWeight: "normal" }}>
                    {p.description}
                    <span className="float-right">
                        <h5 style={{ color: "black" }}>{p.progress}</h5>
                    </span>
                </h6>
                {openSections[p._id] && (
                    <div className="card-text bg-white p-1">
                        {p.deadline}
                        <button className="btn btn-success btn-sm float-right m-1 p-1"
                            onClick={() => editar(p)} >
                            Editar
            </button>
                        <button className="btn btn-success btn-sm float-right m-1 p-1"
                            onClick={() => concluir(p)} >
                            Concluir
            </button>
                    </div>
                )}
            </div>)}
    </div>
    <button className="btn btn-success btn-sm float-right"
        onClick={() => createNewTodo()} >
        Nova Atividade
    </button>

    </div>
      );

}

export default GridTasks;