import React, { Component } from 'react';
import '../Style/TechSpecs.css';

export default class TechSpecs extends Component {
  render() {
    const { id, options } = this.props;
    return (
      <div className='feature' key={id}>
        <div className='feature__name'>{id}</div>
        <ul className='feature__list'>{options}</ul>
      </div>
    );
  }
}
