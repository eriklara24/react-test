import { User } from "../interfaces"

const setUser = (user: User) => {
    return {
        type: "set-user",
        payload: user
    }
}

const logOut = () => {
    return {
        type: "logout"
    }
}

const userActions = {
  setUser,
  logOut
}
export default userActions;
