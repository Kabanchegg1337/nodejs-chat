import React, { Component } from 'react'

export default class Popup extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    toggle = () => {
        const {active} = this.state;
        this.setState({active: !active})
    }


  render() {
      const {active} = this.state;
      const {children} = this.props
    return (
      <div className={`popup ${active ? 'active' : ''}`}>
          <div className='close_wrapper' onClick={this.toggle}></div>
          <div className='content'>
              {children}
          </div>
      </div>
    )
  }
}
