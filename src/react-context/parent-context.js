import * as React from 'react'
import { node } from 'prop-types'

import ChildContextProvider from 'child-provider'


const ParentContext = React.createContext();

export function useParentContext(){
    return React.useContext(ParentContext);
}

const initialState = [{ChildContextProvider}]

function ParentContextProvier({ children }){
    const [childContext, setChild] = React.useState(initialState);

    function Add(state){
        setChild(() => state +1 );
    }

    const store = {
        child: childContext,
        childAction:{
            Add: Add,
        },
    };

    return (
        <ParentContext.Provider value={store}>{children}</ParentContext.Provider>
    );
}

ParentContextProvier.propTypes = {
    children: node.isRequired,
}

export default ParentContextProvier