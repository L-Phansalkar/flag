import axios from 'axios'
const GET_ALL_FLAGS = 'GET_ALL_FLAGS'
const GET_SINGLE_FLAG = 'GET_SINGLE_FLAG'

const setFlags = flags => ({type: GET_ALL_FLAGS, flags})
const gotAFlag = flags => ({
  type: GET_SINGLE_FLAG,
  flags
})

export const getAllFlags = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/flags')
    dispatch(setFlags(data))
  }
}
export const fetchGroupFlag = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/flags/${id}`)
      dispatch(gotAFlag(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function flagsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_FLAGS:
      return action.flags
    case GET_SINGLE_FLAG:
      return action.flags
    default:
      return state
  }
}
