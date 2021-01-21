const initState = 0
const count = (preState = initState, action) => {
  const { type, data } = action
  switch (type) {
    case "add":
      return preState + data
    case "minus":
      return preState - data
    default:
      return preState
  }
}

export default count