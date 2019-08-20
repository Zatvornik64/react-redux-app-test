import React from 'react';

class ItemListArticle extends React.Component {
  
  subHandler = (evt) => {
    this.props.countSubHandler(evt);
  }

    render() {
     return (
         <tr>
           <td className="items_name">{this.props.data.name}</td>
           <td className="items_price">${this.props.data.price}</td>
           <td className="items_count">{this.props.data.count}</td>
           <td><button className="count_add" onClick={this.subHandler} id={this.props.data.id} >+</button></td>
         </tr>
       )
   }}
   export { ItemListArticle }