import React from 'react';
import { Article2 } from './Article2'
class Card extends React.Component {
   
    decCountHandler = (evt) => {
      if (evt.target.classList.contains('count_sub')) {
         const decId = evt.target.id
         this.props.decCounter(decId, this.props.data)
        }
      if (evt.target.classList.contains('count_null')) {
          const nullId = evt.target.id
          this.props.nullCounter(nullId, this.props.data)
         }
      }

    nullAllHandler = (evt) => {
      this.props.nullAllCounter(this.props.data)
    }
    listOpenHandler = (mainvisible) => {
       this.props.listOpen(mainvisible)
    }
  
    render() {
      let itemsTemplate = this.props.data.map(function(item) {
       return (
         <Article2 key={item.id} data={item}/>
       )})
       
      return (
        <React.Fragment>
        <div className="table_border" >
          <table>
          <tbody  onClick={this.decCountHandler}>
            <tr >
              <th>Название</th>
              <th>Цена</th>
              <th>Количество</th>
              <th></th>
            </tr>
          {itemsTemplate}
          </tbody>
        </table>
        </div>
        <button className="card_btn card_button" onClick={this.listOpenHandler}>Список покупок</button>
        <button className="card_btn card_button" onClick={this.nullAllHandler}>Очистить все</button>
        </React.Fragment>
      )
    }}
   export { Card }