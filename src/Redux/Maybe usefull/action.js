import {
    CLEAR_ERRORS,
    CLEAR_ERRORS_INFO,
    INFO_SENT,
    SET_ERRORS,
    SET_ERRORS_INFO_SENT,
    SET_UNAUTHENTICATED,
    SET_AUTHENTICATED,
    USER_SIGNED_UP,
    SIGNING_UP_USER,
    LOADING_USER,
    STOP_LOADING_USER,
    PRESSED_GYM,
    CLEAR_ERRORS_TICKET,
    TICKET_SENT,
    SET_ERRORS_TICKET_SENT,
    CLEAR_ERRORS_TICKET_REPLY, TICKET_REPLY_SENT, SET_ERRORS_TICKET_REPLY
} from './Types'
import {LoginAPI} from './API'
import {api} from './APIURL'
import storage from './Storage'


export const loginUserAction = (userName, password)  => async (dispatch) => {
   
    console.log('salam');
    loadUserAction(dispatch);
    LoginAPI(userName, password)
    .then(response => {
        console.log(response)
        const accessToken = `Bearer ${response.data.access}`
        const refreshToken = ` Bearer ${response.data.refresh}`
        storage.setItem("accessToken", accessToken)
        storage.setItem("refreshToken", refreshToken)
        api.defaults.headers.common['Authorization'] = accessToken
        stopLoadUserAction(dispatch)
        clearErrorAction(dispatch)
        authenticateUserAction(dispatch)
    }).catch(e => {
        if (e.response.status === 400){
            setErrorAction("please fill above fields", dispatch)
        } else if (e.response.status === 401) {
            setErrorAction("username or password invalid", dispatch)
        }
        else {
            setErrorAction("Something wrong happened, sorry we can't service you now", dispatch)
        }
    })
};

export const loadUserAction = (dispatch) => {
    dispatch({type: LOADING_USER});
};


export const stopLoadUserAction = (dispatch) => {
    dispatch({type: STOP_LOADING_USER});
};

export const clearErrorAction = (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};

export const authenticateUserAction = (dispatch) => {
    dispatch({type: SET_AUTHENTICATED})
};

export const setErrorAction = (error, dispatch) => {
    dispatch({type: SET_ERRORS, payload: error})
};

