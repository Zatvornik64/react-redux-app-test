import React from 'react';
import { Article } from './Article'

class ItemsList extends React.PureComponent {

  
    cardOpenHandler = (mainvisible) => {
      this.props.cardOpen(mainvisible)
    }
  
    addCountHandler = (evt) => {
      if (evt.target.classList.contains('count_add')) {
        const addId = evt.target.id
        this.props.incCounter(addId, this.props.data)
    }}
      

      
    render() {
      let itemsTemplate = this.props.data.map(function(item) {
       return (
         <Article key={item.id} data={item}/>
       )})
  

      return (
        <React.Fragment>
        <div className="table_border">
          <table>
          <tbody  onClick={this.addCountHandler}>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Количество</th>
              <th></th>
            </tr>
          {itemsTemplate}
          </tbody>
        </table>
        </div>
        <button className="card_btn" onClick={this.cardOpenHandler}>Корзина</button>
        </React.Fragment>
        )
      }
    }
    export { ItemsList }