import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'  // 使用异步action需要引入redux-thunk，applyMiddleware
import count from '../reducers/count'
import person from '../reducers/person'

const reducers = combineReducers({ // 使用combineReducers将多个reducer合并
  count,
  person
})

export default createStore(reducers, applyMiddleware(thunk)) // 用applyMiddleware包装thunk，传给createStore