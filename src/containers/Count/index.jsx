import { connect } from 'react-redux'
import Count from '../../pages/Count'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

// 将存在store中的state传入props中
const mapStateToProps = state => {
  return {
    count: state,
  }
}

// 将操作state的方法传入props中
const mapDispatchToProps = dispatch => {
  return {
    add: data => dispatch(increment(data)),
    minus: data => dispatch(decrement(data)),
    addAsync: (data, time) => dispatch(incrementAsync(data, time)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count) // 使用connect包装UI组件，将store传给UI组件