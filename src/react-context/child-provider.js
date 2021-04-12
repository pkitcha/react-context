import * as React from 'react'
import { node } from 'prop-types'

const ChildContext = React.createContext()
export function useChildContext(){
    return React.useContext(ChildContext);
}

const initialState = 0
function ChildContextProvider({ children }){
    const [count, setCount] = React.useState(initialState);

    function increment(state){
        setCount(() => state +1 );
    }

    const countStore = {
        count,
        countAction:{
            increment: increment,
        },
    };

    return (
        <ChildContext.Provider value={countStore}>{children}</ChildContext.Provider>
    );
}

ChildContextProvider.propTypes = {
    children: node.isRequired,
}

export default ChildContextProvider