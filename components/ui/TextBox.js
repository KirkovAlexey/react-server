import React, { DOM } from 'react';

const TextBox = (props) => (
  DOM.span(
    null,
    props.text
  )
);

export default TextBox;