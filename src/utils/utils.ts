import LoopFront, { TRequestConfig } from "../LoopFront";
import axios from 'axios'

// Just a wrapper on axios, in case some other library is used in place of axios
const utils = {

    request: <T = {}>(config: TRequestConfig): ReturnType<typeof axios.request> => {
        if (!axios.defaults.baseURL) throw new Error('Error: Loopfront Base Url is not provided');
        if (LoopFront.Logger) {
            console.log("%cRequest => ", "font-size: 12px; color: rgb(51, 102, 255); font-weight: bold", config);
        }
        return axios.request<T>(config)
    },

    setBaseAPI_URL: (url: string) => axios.defaults.baseURL = url,

    setHeader: (type = 'Content-Type', value = 'application/json') => axios.defaults.headers.post[type] = value,

    setAuthHeader: (access_token?: string) => axios.defaults.headers.common['Authorization'] = access_token,

    throwError: (error: any) => { console.log('Error', error); throw error }

}

export default utils