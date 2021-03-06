export const RESERVATION_LOADING = 'RESERVATION_LOADING'
export const RESERVATION_SUCCESS = 'RESERVATION_SUCCESS'
export const RESERVATION_FAILURE = 'RESERVATION_FAILURE'
export const RESERVATION_FINISHED = 'RESERVATION_FINISHED'
export const RESERVATION_DATA = 'RESERVATION_DATA'

export const RESTAURANT_ID_RESERVATION = 'RESTAURANT_ID_RESERVATION'
export const RESTAURANT_NAME_RESERVATION = 'RESTAURANT_NAME_RESERVATION'
export const RESTAURANT_LOGO_RESERVATION = 'RESTAURANT_LOGO_RESERVATION'
export const RESTAURANT_DEPOSIT_RESERVATION = 'RESTAURANT_DEPOSIT_RESERVATION'
export const RESTAURANT_MENU_ID = 'RESTAURANT_MENU_ID'
export const RESTAURANT_ADDRESS = 'RESTAURANT_ADDRESS'

export const RESERVATION_BRANCH = 'RESERVATION_BRANCH' 
export const RESERVATION_DATE = 'RESERVATION_DATE' 
export const RESERVATION_TIME = 'RESERVATION_TIME' 
export const RESERVATION_RANGE = 'RESERVATION_RANGE' 
export const RESERVATION_PEOPLE = 'RESERVATION_PEOPLE' 
export const RESERVATION_AGREE = 'RESERVATION_AGREE' 

export const initialState = {
  idRestaurantReservation: '',
  nameRestaurantReservation: '',
  address: '',
  menuRestaurantId: '',
  restaurantLogo: '',
  deposit: 0,
  branch: '',
  date: '',
  time: '',
  range: '',
  people: '',
  agree: '',
  loading: false,
  error: null,
  messageReservation: '',
  restaurantList: []
}

export function reservationReducer (state = initialState, action ) {
  switch (action.type) {
    case RESERVATION_DATA:
      return {
        ...state,
        restaurantList: action.payload 
      }
    case RESTAURANT_ID_RESERVATION:
      return {
        ...state,
        idRestaurantReservation: action.payload 
      }
    case RESTAURANT_NAME_RESERVATION:
      return {
        ...state,
        nameRestaurantReservation: action.payload 
      }
    case RESTAURANT_ADDRESS: 
      return {
        ...state,
        address: action.payload
      }
    case RESTAURANT_LOGO_RESERVATION:
      return {
        ...state,
        restaurantLogo: action.payload
      }
    case RESTAURANT_MENU_ID:
      return {
        ...state,
        menuRestaurantId: action.payload
      }
    case RESTAURANT_DEPOSIT_RESERVATION:
      return {
        ...state,
        deposit: action.payload 
      }
    case RESERVATION_BRANCH:
      return {
        ...state,
        branch: action.payload
      }
    case RESERVATION_DATE:
      return {
        ...state,
        date: action.payload
      }
    case RESERVATION_TIME:
      return {
        ...state,
        time: action.payload
      }
    case RESERVATION_RANGE:
      return {
        ...state,
        range: action.payload
      }
    case RESERVATION_PEOPLE:
      return {
        ...state,
        people: action.payload
      }
    case RESERVATION_AGREE:
      return {
        ...state,
        agree: action.payload
      }
    case RESERVATION_LOADING:
      return {
        ...state,
        loading: true
      }
    case RESERVATION_SUCCESS:
      return {
        ...state,
        messageReservation: action.payload
      }
    case RESERVATION_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case RESERVATION_FINISHED:
      return{
        ...state,
        loading: false
      }
    default:
      return state
  }
}
