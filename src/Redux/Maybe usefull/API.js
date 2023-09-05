import {api,AUTH} from './APIURL'


export const LoginAPI = async (userName, password) => {
    //console.log(userName,password)
    console.log({userName,password});
    return api.get(AUTH.LOG_IN, {username:userName, password:password})
};