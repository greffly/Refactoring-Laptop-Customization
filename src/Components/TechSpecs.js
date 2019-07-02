import React, { Component } from 'react';
import '../Style/TechSpecs.css';
import SpecOptions from './SpecOptions';

export default class TechSpecs extends Component {
  render() {
    const specs = this.props;
    return (
      <div className='feature' key={specs.key}>
        <div className='feature__name'>{specs.key}</div>
        <ul className='feature__list'>{specs.options}</ul>
      </div>
    );
  }
}
