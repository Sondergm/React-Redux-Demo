export const increment = data => ({type: 'add', data})
export const decrement = data => ({type: 'minus', data})
export const incrementAsync = (data, time) => { // 异步action
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}