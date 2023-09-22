import React, { Component, component } from 'react'

class Welcome extends Component {
    render () {
        return <h1>Hey {this.props.name} {this.props.heroName}</h1>
    }
}

export default Welcome;