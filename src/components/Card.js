import React from 'react';
import '../css/Card.css';
import { CardArticle } from './CardArticle'
class Card extends React.Component {
   
    countSubHandler = (evt) => {
        const decId = evt.target.id
         this.props.decCounter(decId, this.props.data)
    }
    countNullHandler = (evt) => {
        const nullId = evt.target.id
          this.props.nullCounter(nullId, this.props.data)
    }

    nullAllHandler = (evt) => {
      this.props.nullAllCounter(this.props.data)
    }
    listOpenHandler = () => {
       this.props.toListOpen()
    }
  
    render() {
      let sum = 0;
      let itemsTemplate = this.props.data.map((item) => {
        sum += item.price * item.count;
       return (
        <React.Fragment key={item.id}>
          { item.count ? <CardArticle 
            countSubHandler={this.countSubHandler}
            countNullHandler={this.countNullHandler}
            data={item}/> : null }
         </React.Fragment>
       )})
       
      return (
        <React.Fragment>
        <div className="table_border" >
          <table>
          <tbody>
            <tr >
              <th>Название</th>
              <th>Цена</th>
              <th>Количество</th>
              <th></th>
            </tr>
          {itemsTemplate}
          </tbody>
        </table>
        <div className="sum">Общая стоимость :   $<b>{sum}</b></div>
        </div>
        <button className="card_btn card_button" onClick={this.listOpenHandler}>Список покупок</button>
        <button className="card_btn card_button" onClick={this.nullAllHandler}>Очистить все</button>
        </React.Fragment>
      )
    }}
   export { Card }