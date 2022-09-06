import React, { Component } from 'react'
import './BlogCard.css';

export default class BlogCard extends Component {


    render() {
        return (
            <div className='blog-card' style={{...this.props.style}}>
                <div className='blog-card-image'>
                    <img src={this.props.src} alt=""/>
                </div>
                <div className='blog-card-details'>
                    <h4 className='blog-card-title'>
                        {this.props.title}
                    </h4>
                    <p className='blog-card-description'>
                        {this.props.description.slice(0, 100)}...
                    </p>
                    <div>
                        <a className='blog-card-readpost' href>Read Post</a>
                    </div>
                </div>
            </div>
        )
    }
}
