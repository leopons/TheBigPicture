
export const SERVER_ADDR = process.env.NODE_ENV !== 'production' ? "http://localhost:8000/api/" : "/api/"
export const SAFE_METHODS = ["GET", "HEAD", "OPTIONS"]

export const GUEST_NAME = "Invité"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const SET_BIG_PICTURE = "SET_BIG_PICTURE"

export const ACTIVATE_MODAL = "ACTIVATE_MODAL"
export const DEACTIVATE_MODAL = "DEACTIVATE_MODAL"
export const CREATE_BIG_PICTURE_MODAL = "CREATE_BIG_PICTURE_MODAL"
export const EDIT_BIG_PICTURE_MODAL = "EDIT_BIG_PICTURE_MODAL"
export const CREATE_ARGUMENT_MODAL = "CREATE_ARGUMENT_MODAL"
export const CREATE_RESOURCE_MODAL = "CREATE_RESOURCE_MODAL"
export const LOGIN_MODAL = "LOGIN_MODAL"

export const NOTIFICATION = "NOTIFICATION"

export const SELECT_BIG_PICTURE = "SELECT_BIG_PICTURE"
export const UNSELECT_BIG_PICTURE = "UNSELECT_BIG_PICTURE"
export const ADD_BIG_PICTURE = "ADD_BIG_PICTURE"
export const ADD_ARGUMENT = "ADD_ARGUMENT"
export const ADD_RESOURCE = "ADD_RESOURCE"
export const ADD_RESOURCE_TO_BIG_PICTURE = "ADD_RESOURCE_TO_BIG_PICTURE"

export const DELETE_BIG_PICTURE = "DELETE_BIG_PICTURE"
export const DELETE_ARGUMENT = "DELETE_ARGUMENT"
export const DELETE_RESOURCE = "DELETE_RESOURCE"

export const PRO_ARGUMENT = 1
export const CON_ARGUMENT = 2