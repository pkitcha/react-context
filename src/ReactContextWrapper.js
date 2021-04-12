import React, { Component } from 'react'
import ReactContextExample from './ReactContextExample';
import ReactContextProvider from './react-context/count-context';

function ReactContextWrapper() {

    return (
     <ReactContextProvider>
        <ReactContextExample />
      </ReactContextProvider>
    );
}

 export default ReactContextWrapper;