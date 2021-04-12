import React, { Component } from 'react'
import MainComponent from './MainComponent'

import { useCountContext } from './react-context/count-context';
//import ReactContextProvider from './react-context/count-context';

function ReactContextExample() {

    const {count, countAction} = useCountContext();

    return (
     <div>
         <MainComponent count={count} handleFireClick={() => countAction.increment(count)} example='Context'  backGround='burlywood'/> 
     </div>
    );
}

 export default ReactContextExample;