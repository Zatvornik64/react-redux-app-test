import React from 'react';
import { connect } from 'react-redux'
import { ItemsList } from '../components/ItemsList'
import { Card } from '../components/Card'
import { incCounter, decCounter, nullCounter, nullAllCounter } from '../actions/counter'
import { toCardOpen, toListOpen } from '../actions/visible'
class App extends React.Component {
  
render () {
  
  return (
      <React.Fragment>
        { !this.props.cardOpen && <ItemsList  
              data={this.props.items} 
              incCounter={this.props.incCounter}
              toCardOpen={this.props.toCardOpen}  />}
        
        { this.props.cardOpen && <Card 
                data={this.props.items} 
                decCounter={this.props.decCounter} 
                nullCounter={this.props.nullCounter}
                nullAllCounter={this.props.nullAllCounter} 
                toListOpen={this.props.toListOpen} /> }
      </React.Fragment>
    )
  }
  
}
const mapStateToProps = store => {
  return {
    cardOpen: store.cardOpen,
    items: store.items
  }
}
const mapDispatchToProps = dispatch => {
  return {
  incCounter: (id, items) => dispatch(incCounter(id, items)),
  decCounter: (id, items) => dispatch(decCounter(id, items)),
  nullCounter: (id, items) => dispatch(nullCounter(id, items)),
  nullAllCounter: (items) => dispatch(nullAllCounter(items)),
  toCardOpen: (cardOpen) => dispatch(toCardOpen(cardOpen)),
  toListOpen: (cardOpen) => dispatch(toListOpen(cardOpen)),
  }
  }
  


export default connect(mapStateToProps, mapDispatchToProps)(App)