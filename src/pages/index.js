
import React from 'react';
import cowsay from 'cowsay-browser';

import Head from '../components/Head';
import Example from '../components/Example';

const saying = cowsay.say({ text: 'hi there!' });
const length = saying.split('\n').reduce((a, b) => (a.length > b.length ? a : b)).length;

export default () => (
  <div>
    <Head title="Home" />
    <Example
      title="Cowsay"
      color="#526af0"
      content={saying}
      contentLength={length}
    />
  </div>
);
