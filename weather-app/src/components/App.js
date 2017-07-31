// ./src/components/App.js
import React  from 'react';

const App = (props) => {
  return (
    <div style={{margin: -8}}>
      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

export default App;
