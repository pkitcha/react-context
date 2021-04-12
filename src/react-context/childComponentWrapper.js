import React, { Component } from 'react'
import ChildComponent from './child-component';
import ChildProvider from './child-provider';

function ChildComponentWrapper() {

    return (
     <ChildProvider>
        <ChildComponent />
      </ChildProvider>
    );
}

 export default ChildComponentWrapper;