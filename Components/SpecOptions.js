import React, { Component } from 'react';
import '../Style/SpecOptions.css';

export default class SpecOptions extends Component {
  render() {
    const specOptions = this.props;
    const features = Object.keys(this.props.features).map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass =
          item.name === this.state.selected[key].name
            ? 'feature__selected'
            : '';
        const featureClass = 'feature__option ' + selectedClass;
        console.log(this);
        return (
          <li key={index} className='feature__item'>
            <div
              className={featureClass}
              onClick={e => this.updateFeature(key, item)}
            >
              {item.name}(
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(item.cost)}
              )
            </div>
          </li>
        );
      });

      //techspecs
      return (
        <div className='feature' key={key}>
          <div className='feature__name'>{key}</div>
          <ul className='feature__list'>{options}</ul>
        </div>
      );
    });
  }
}
