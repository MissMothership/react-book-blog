import axios, { AxiosResponse, Method } from "axios";

// API with passing the method and the path to delete, create or change the data
export function entryApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {

    const baseURL = "/api"
    axios({ method: method, url: baseURL + path, data })
        .then((response: AxiosResponse<T>) => {
            callback(response.data)
        })

    /**
     *  TODO 
     *  add .then(...) um den Datensatz des Autoren
     *  zu den jeweiligen Einträgen zu bekommen
     */
}



