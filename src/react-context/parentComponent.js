import * as React from 'react'

import { useParentContext }  from './parent-context'
import MainComponent from '../MainComponent'

function ChildComponent() {

    const {count, countAction} = useParentContext();

    return (
     <div>
         <button count={count} onClick={() => countAction.add(count)}>Click Me</button> 
     </div>
    );
}

 export default ChildComponent;