import React, { Component } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';
import CategoryTabs from '../../Components/CategoryTabs/CategoryTabs';
import PaginationTabs from '../../Components/PaginationTabs/PaginationTabs';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { blogs: [] }
  }

  // This functiomn is triggered after the component is mounted -- meaning that it is in the DOM
  componentDidMount() {
    // Mock data
    const blogResults = [
      {
        title: 'Jimmys new Blog Post ,Testing post long title Testing',
        description: 'This is the test description This is the test description This is the test description This is the test descriptionThis is the test description This is the test description This is the test description This is the test description This is the test descriptionThis is the test descriptionThis is the test descriptionThis is the test descriptionThis',
        src: 'https://i.etsystatic.com/33048631/r/il/1ee24e/3741760520/il_fullxfull.3741760520_es39.jpg'
      },
      {
        title: 'Jimmys new Blog Post',
        description: 'This is the test description This is the test description This is the test description This is the test description',
        src: 'https://i.etsystatic.com/33048631/r/il/1ee24e/3741760520/il_fullxfull.3741760520_es39.jpg'
      },
      {
        title: 'Jimmys new Blog Post',
        description: 'This is the test description This is the test description This is the test description This is the test description',
        src: 'https://i.etsystatic.com/33048631/r/il/1ee24e/3741760520/il_fullxfull.3741760520_es39.jpg'
      },
      {
        title: 'Jimmys new Blog Post',
        description: 'This is the test description This is the test description This is the test description This is the test description',
        src: 'https://i.etsystatic.com/33048631/r/il/1ee24e/3741760520/il_fullxfull.3741760520_es39.jpg'
      },
      {
        title: 'Jimmys new Blog Post',
        description: 'This is the test description This is the test description This is the test description This is the test description',
        src: 'https://i.etsystatic.com/33048631/r/il/1ee24e/3741760520/il_fullxfull.3741760520_es39.jpg'
      },
      {
        title: 'Jimmys new Blog Post',
        description: 'This is the test description This is the test description This is the test description This is the test description',
        src: 'https://i.etsystatic.com/33048631/r/il/1ee24e/3741760520/il_fullxfull.3741760520_es39.jpg'
      }
    ]

    // Will set the state of the blog to the blogResults
    this.setState({ blogs: blogResults })
  }

  render() {
    return (
      <div className='screen'>
        <div className='dashbaord-header'>
          <div className='dashboard-title-container'>
            <h1 className='dashboard-title'> Our mission is to make knowledge and news accessible for everyone.</h1>
          </div>
          <div className='dashboard-description-container'>
            <p className='dashboard-description'>
              With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.
            </p>
          </div>
        </div>
        <div className='categoryTabs-container'>
          <CategoryTabs tabs={['All Categories', 'Technology', 'Development', 'Marketing', 'Start-up']} />
        </div>
        <div className='dashboard-post-container'>
          {
            // Loop through the blogs state and render the cards
            this.state.blogs.map((blog, key) =>
              <div key={key} className='dashboard-post-card'>
                <BlogCard title={blog.title} description={blog.description} src={blog.src} />
              </div>
            )
          }
        </div>
        <div className='dashboard-pagination-container'>
            <PaginationTabs pages={4} />
        </div>
      </div>
    )
  }
}
