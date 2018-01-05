import * as types from '../constants/ActionTypes'

const event = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_EVENT_SUCCESS:
      return action.event

    default:
      return state
  }
}

export default event
