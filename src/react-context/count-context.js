import * as React from 'react'
import { node } from 'prop-types'

const CountContext = React.createContext();

export function useCountContext(){
    return React.useContext(CountContext);
}

const initialState = 5

function ReactContextProvider({ children }){
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
        <CountContext.Provider value={countStore}>{children}</CountContext.Provider>
    );
}

ReactContextProvider.propTypes = {
    children: node.isRequired,
}

export default ReactContextProvider