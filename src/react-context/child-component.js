import * as React from 'react'

import { useChildContext }  from './child-provider'
import MainComponent from '../MainComponent'

function ChildComponent() {

    const {count, countAction} = useChildContext();

    return (
     <div>
         <MainComponent count={count} handleFireClick={() => countAction.increment(count)} example='Context'  backGround='burlywood'/> 
     </div>
    );
}

 export default ChildComponent;