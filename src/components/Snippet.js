
import React from 'react';

export default ({ title, color, content, contentLength = 10 }) => (
  <div className="container">
    <div className="title">{title}</div>
    <pre className="content">{content}</pre>
    <style jsx>{`
      .container {
        text-align: left;
        font-family: monospace;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
        display: inline-flex;
        margin: 0 auto;
        background-color: white;
        border-radius: 3px;
      }

      .title {
        flex: 0 0 80px;
        padding: 10px;
        font-size: 13px;
        font-weight: bold;
        text-transform: uppercase;
        color: #00b3f2;
        background-color: #e6f8fc;
        border-right: 1px solid #cce1ed;
      }

      .content {
        margin: 0;
        color: ${color || '#3e3e3e'};
        font-family: monospace;
        padding: 10px;
        flex: 1;
        flex-basis: ${contentLength * 9}px;
        width: ${contentLength * 9}px;
      }
    `}</style>
  </div>
)
