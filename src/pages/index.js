
import React from 'react';
import cowsay from 'cowsay-browser';

import Snippet from '../components/Snippet';

const saying = cowsay.say({ text: 'hi there!' });
const length = saying.split('\n').reduce((a, b) => (a.length > b.length ? a : b)).length;

export default () => (
  <div>
    <Snippet
      title="Cowsay"
      color="#526af0"
      content={saying}
      contentLength={length}
    />

    <style global jsx>{`
      body {
        -webkit-font-smoothing: antialiased;
        text-align: center;
        background-color: #fafbfd;
      }
    `}</style>
  </div>
);
