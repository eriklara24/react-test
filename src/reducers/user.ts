import { Action } from "../interfaces";

const User = (state: any = {}, action: Action): any => {
    switch(action.type) {
        case "set-user":
            return {
                ...state,
                ...action.payload,
                loggedIn: true
            }
        case "logout":
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state;
    }
}

export default User;
