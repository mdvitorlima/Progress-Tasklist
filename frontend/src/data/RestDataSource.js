import Axios from "axios";

export class RestDataSource {


    GetData = async (dataType, params) => 
        this.SendRequest("get", process.env.REACT_APP_URL_BACKEND + "tasks");


    StoreData = (data) =>
        this.SendRequest("post", process.env.REACT_APP_URL_BACKEND + "tasks", {}, data);
    

    UpdateTask = (data, id) =>
        this.SendRequest("post",
        process.env.REACT_APP_URL_BACKEND + "tasks/" + id,
            {},
            data);
    
    SendRequest = (method, url, params, data) =>
        Axios.request({ method, url, params, data });

}
