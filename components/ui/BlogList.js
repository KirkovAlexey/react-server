import React, { DOM } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ elements }) => (
  DOM.div(
    null,
    _.map(
      elements,
      (element, key) => (
        React.createElement(BlogItem, Object.assign({ key }, element))
      )
    )
  )  
);

export default BlogList;