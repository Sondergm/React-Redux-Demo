import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'  // 使用异步action需要引入redux-thunk，applyMiddleware
import count from '../reducers/count'

export default createStore(count, applyMiddleware(thunk)) // 用applyMiddleware包装thunk，传给createStore