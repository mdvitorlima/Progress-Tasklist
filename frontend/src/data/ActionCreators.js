import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const updateTask = (task, id) => ({
    type: "UPDATE_DATA",
    payload: dataSource.UpdateTask(task, id).then(response => 
    ({
        data: response.data
    }))
})

export const placeTask = (task) => ({
    type: "STORE_DATA",
    payload: dataSource.StoreData(task).then(response => 
    ({
        data: response.data
    }))
})

export const getData = (dataType, params) => (
    {
        type: "DATA_LOADED",
        payload: dataSource.GetData(dataType, params).then(response =>
            ({
                data: response.data
            })
        )
    })

