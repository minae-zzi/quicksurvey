import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const FullPageComponent = () => (
  <ReactFullpage
    navigation
    anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage']}
    sectionsColor={['#ff5f45', '#0798ec', '#fc6c7c', '#435b71']}
    render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">
          <div className="section">
            <h3>Section 1</h3>
          </div>
          <div className="section">
            <h3>Section 2</h3>
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
          <div className="section">
            <h3>Section 4</h3>
          </div>
        </div>
      );
    }}
  />
);

export default FullPageComponent;
