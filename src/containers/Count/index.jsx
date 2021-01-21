import { connect } from 'react-redux'
import Count from '../../pages/Count'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

// 将存在store中的state传入props中
const mapStateToProps = state => {
  return {...state}
}

// 将操作state的方法传入props中
const mapDispatchToProps = {
  add: increment,
  minus: decrement,
  addAsync: incrementAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(Count) // 使用connect包装UI组件，将store传给UI组件