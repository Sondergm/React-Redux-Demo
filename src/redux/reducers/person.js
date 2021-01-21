const initState = [
  {
    name: "小张",
    age: 19,
  },
  {
    name: "小李",
    age: 20,
  }
]

export default function person (preState = initState, action) {
  const {type, data} = action
  switch (type) {
    case "addPerson":
      return [data, ...preState]
    default:
      return preState
  }
}