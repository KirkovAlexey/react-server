import React from 'react';

import BlogList from '../ui/BlogList';

const elements = [
  {
    image: { src: "http://weknowyourdreams.com/images/snow/snow-01.jpg", width: "179px", height: "101px", alt: "Winter" },
    desc: { text: 'Winter is comming, first' }
  },
  {
    image: { src: "http://weknowyourdreams.com/images/snow/snow-02.jpg", width: "179px", height: "101px", alt: "Winter" },
    desc: { text: 'Winter is comming, second' }
  },
  {
    image: { src: "http://weknowyourdreams.com/images/snow/snow-03.jpg", width: "179px", height: "101px", alt: "Winter" },
    desc: { text: 'Winter is comming, third' }
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elements };
  }

  render() {
    const { elements } = this.state;
    return React.createElement(BlogList, { elements });
  }
}

export default BlogPage;
