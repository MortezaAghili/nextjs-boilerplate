import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { incrementCount, decrementCount, resetCount } from '../store/actions'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

class Counter extends Component {
  increment = () => {
    const { incrementCount } = this.props
    incrementCount()
  }

  decrement = () => {
    const { decrementCount } = this.props
    decrementCount()
  }

  reset = () => {
    const { resetCount } = this.props
    resetCount()
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <Title>
          Count: <span>{count}</span>
        </Title>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { count } = state
  return { count }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount, decrementCount, resetCount }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
