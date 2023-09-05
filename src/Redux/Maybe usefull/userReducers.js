import {
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    SET_ERRORS,SIGNING_UP_USER,
    USER_SIGNED_UP, PRESSED_GYM, CLEAR_ERRORS, LOADING_USER, STOP_LOADING_USER,SET_ERRORS_INFO_SENT,
    CLEAR_ERRORS_INFO,INFO_SENT,SENDING_INFOS,INFO_SENT_DONE,TICKET_SENT,CLEAR_ERRORS_TICKET,
    SET_ERRORS_TICKET_SENT
} from './Types';

const initialState = {
    authenticated: false,
    error: "",
    loadingUser: false,
    signingUp: false,
    signedUp: false,
    selectedGym: -1,
    infoSent: false,
    sendingInfo:false,
    ticketSent:false,

    errorTicket: "",

};

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            // console.log("SET_AUTHENTICATED", state);
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            // console.log("SET_UNAUTHENTICATED", state);
            return initialState;

        case LOADING_USER:
            // console.log("LOADING_USER", state);
            return {
                ...state,
                loadingUser: true
            };

        case STOP_LOADING_USER:
            // console.log("STOP_LOADING_USER", state)
            return {
                ...state,
                loadingUser: false
            };

        case SET_ERRORS:
            // console.log("SET_ERRORS", state);
            return {
                ...state,
                error: action.payload
            };

        case SET_ERRORS_INFO_SENT:
            console.log("SET_ERRORS_INFO_SENT", state);
            return {
                ...state,
                errorInfo: action.payload
            };
        case CLEAR_ERRORS:
            // console.log("CLEAR_ERRORS", state);
            return {
                ...state,
                errorLogin: ""
            };
        case SIGNING_UP_USER:
            // console.log("SIGNING_UP_USER", state);
            return {
                ...state,
                signingUp: true
            };

        case USER_SIGNED_UP:
            // console.log("USER_SIGNED_UP", state);
            return {
                ...state,
                signingUp: false,
                signedUp: true
            };
        case PRESSED_GYM:
            // console.log("PRESSED_GYM", state);
            return {
                ...state,
                selectedGym: action.payload
            };
        case CLEAR_ERRORS_INFO:
            // console.log("CLEAR_ERRORS_INFO", state)
            return {
                ...state,
                errorInfo: ""
            };



        case SENDING_INFOS:
            // console.log("SENDING_INFOS", state)
            return {
                ...state,
                sendingInfo:true
            };
        case INFO_SENT:
            // console.log("INFO_SENT", state)
            return {
                ...state,
                infoSent:true,
                sendingInfo:false
            };

        case TICKET_SENT:
            return {
                ...state,
                ticketSent:true,
                sendingTicket:false
            };

        case CLEAR_ERRORS_TICKET:
            return {
                ...state,
                errorTicket: ""
            };

        case SET_ERRORS_TICKET_SENT:
            return {
                ...state,
                errorTicket: action.payload
            };

        case INFO_SENT_DONE:
            return {
                ...state,
                infoSent:false
            };
        default:
            return state;
    }
}
