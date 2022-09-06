import React, { Component } from 'react';
import './PaginationTabs.css';

export default class PaginationTabs extends Component {

  createPageTabs(numberOfPages) {
    var tabs = [];
    for (var i = 0; i < numberOfPages; i++) {
      tabs.push(<div key={i} className={ i === 0 ? "page-tab active" : "page-tab" }>{i + 1}</div>);
    }
    return tabs;
  }

  render() {
    return (
      <div className='pagination-container'>
        <div className="page-tab-previous">
          <i className='fas fa-angle-left' style={{ fontSize: 16 }}></i>

        </div>
        {this.createPageTabs(this.props.pages)}
        <div className="page-tab-next">
          <i className='fas fa-angle-right' style={{ fontSize: 16 }}></i>
        </div>
      </div>
    )
  }
}
