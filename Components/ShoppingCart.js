import React, { Component } from 'react';
import '../Style/ShoppingCart.css';

export default class ShoppingCart extends Component {
  render() {
    return <div className='shopping-cart' />;
    // const summary = this.props;
    // return Object.keys(summary.selected).map(key => (
    //   <div className='summary__option' key={key}>
    //     <div className='summary__option__label'>{key} </div>
    //     <div className='summary__option__value'>
    //       {this.state.selected[key].name}
    //     </div>
    //     <div className='summary__option__cost'>
    //       {new Intl.NumberFormat('en-US', {
    //         style: 'currency',
    //         currency: 'USD'
    //       }).format(this.state.selected[key].cost)}
    //     </div>
    //   </div>
    // ));
  }
}
