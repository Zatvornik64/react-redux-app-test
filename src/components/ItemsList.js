import React from 'react';
import '../css/ItemsList.css';
import { ItemListArticle } from './ItemListArticle'

class ItemsList extends React.Component {

  
    cardOpenHandler = () => {
      this.props.toCardOpen()
    }
  
    addCountHandler = (evt) => {
        const addId = evt.target.id
        this.props.incCounter(addId, this.props.data)
    }
          
    render() {
      let itemsTemplate = this.props.data.map((item) => {
       return (
         <ItemListArticle countSubHandler={this.addCountHandler} key={item.id} data={item}/>
       )})
  

      return (
        <React.Fragment>
        <div className="table_border">
          <table>
          <tbody  >
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