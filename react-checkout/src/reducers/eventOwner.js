import * as types from '../contants/ActionTypes'

const eventOwner = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_EVENT_OWNER_SUCCESS:
      return action.eventOwner

    default:
      return state
  }
}

export const eventOwner
