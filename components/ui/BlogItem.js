import React, { DOM } from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  DOM.div(
    null,
    React.createElement(Image, props.image),
    React.createElement(TextBox, props.desc)
  )
);

export default BlogItem;