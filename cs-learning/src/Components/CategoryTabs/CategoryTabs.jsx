import React, { Component } from 'react';
import './CategoryTabs.css';

export default class CategoryTabs extends Component {

  // TODO: Need to make this component functional
  render() {
    return (
      <div className='tab-container'>
        {
            this.props.tabs.map((tab, key) => 
                <div className={key === 0 ? 'selected' : 'tab'} key={key}>
                    { tab }
                </div>
            ) 
        }
      </div>
    )
  }
}
