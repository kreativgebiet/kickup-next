
import React from 'react';
import cowsay from 'cowsay-browser';

export default () => (
  <div>
    <pre>{cowsay.say({ text: 'hi there!' })}</pre>
  </div>
);
