import {connect} from 'react-redux'

import Person from '../../pages/Person'
import { addPerson } from '../../redux/actions/person'

const mapStateToProps = state => {
  return {...state}
}

const mapDispatchToProps = {
  addPerson,
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)