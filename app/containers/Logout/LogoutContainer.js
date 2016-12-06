import React, { PropTypes} from 'react'
import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'
import { connect } from 'react-redux'

const LogoutContainer = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  componentDidMount () {
    this.props.dispatch(logoutAndUnauth())
  },
  render () {
    return (
      <Logout />
    )
  },
})



export default connect()(LogoutContainer)