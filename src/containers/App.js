import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import { ItemsList } from '../components/ItemsList'
import { Card } from '../components/Card'
import {items, visible} from '../components/ItemData.js'

class App extends React.Component {
  /*state = {mainVisible: visible}

  changeHandler = () => {
    this.setState({mainVisible: visible})
  }*/

render () {
  return (
      <React.Fragment>
        { this.state.mainVisible.list && <ItemsList onMenu={this.changeHandler} data={items}  />}
        { this.state.mainVisible.card && <Card onMenu={this.changeHandler} data={items} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => {
  return {
    mainVisible: store.visible,
    items: store.items
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setVisible: visible => dispatch (setVisible(visible)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)