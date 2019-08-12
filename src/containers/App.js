import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { ItemsList } from '../components/ItemsList'
import { Card } from '../components/Card'
import { incCounter, decCounter, nullCounter, nullAllCounter } from '../actions/counter'
import { cardOpen, listOpen } from '../actions/visible'
class App extends React.PureComponent {
  
render () {
  
  return (
      <React.Fragment>
        { this.props.mainvisible.list && <ItemsList  
              data={this.props.items} 
              incCounter={this.props.incCounter}
              cardOpen={this.props.cardOpen}  />}
        
        { this.props.mainvisible.card && <Card 
                data={this.props.items} 
                decCounter={this.props.decCounter} 
                nullCounter={this.props.nullCounter}
                nullAllCounter={this.props.nullAllCounter} 
                listOpen={this.props.listOpen} /> }
      </React.Fragment>
    )
  }
  
}
const mapStateToProps = store => {
  return {
    mainvisible: store.mainvisible,
    items: store.items
  }
}
const mapDispatchToProps = dispatch => {
  return {
  incCounter: (id, items) => dispatch(incCounter(id, items)),
  decCounter: (id, items) => dispatch(decCounter(id, items)),
  nullCounter: (id, items) => dispatch(nullCounter(id, items)),
  nullAllCounter: (items) => dispatch(nullAllCounter(items)),
  cardOpen: (mainvisible) => dispatch(cardOpen(mainvisible)),
  listOpen: (mainvisible) => dispatch(listOpen(mainvisible)),
  }
  }
  


export default connect(mapStateToProps, mapDispatchToProps)(App)