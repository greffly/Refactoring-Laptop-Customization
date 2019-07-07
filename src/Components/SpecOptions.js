import React, { Component } from 'react';
import '../Style/SpecOptions.css';
import TechSpecs from './TechSpecs';

//each list item could be its own component
export default class SpecOptions extends Component {
  render() {
    console.log(this.props.features);
    const features = Object.keys(this.props.features).map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass =
          item.name === this.props.selected[key].name
            ? 'feature__selected'
            : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
          //this is its own component
          <li key={index} className='feature__item'>
            <div
              className={featureClass}
              onClick={e => this.props.updateFeature(key, item)}
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
      return <TechSpecs id={key} options={options} key={key} />;
    });
    return (
      <section className='main__form'>
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    );
  }
}
