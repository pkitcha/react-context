import * as React from 'react'
import { node } from 'prop-types'

const AlgoContext = React.createContext();

export function useAlgoContext(){
    return React.useContext(AlgoContext);
}

const initialState = []

function AlgoContextProvider({ children }){
    const [algo, setAlgo] = React.useState(initialState);

    function setAlgoTrading(algo){
        setAlgo((currentState) =>  [...currentState ,{  
            id: algo.correlationId ,           
            correlationId : algo.correlationId,
            algo : algo.algo ,
            clientOrderId : algo.clientOrderId,
            msgSequenceNumber : 0 ,
            orderId : "",
            account : algo.account,
            symbol : algo.symbol,
            price : algo.price,
            enterId : algo.enterId,
            orderQty : algo.orderQty,
            origClientOrderID : "",
            leavesQty: 0,
            lastQty : 0,
            cumulativeQty: 0,
            lastPrice: 0,
            averagePrice: 0,
            side: algo.side,
            orderStatus: "Pending",
            text: ""} ])
    }

    const countStore = {
        algo,
        algoAction:{
            setAlgo: setAlgoTrading,
        },
    };

    return (
        <AlgoContext.Provider value={countStore}>{children}</AlgoContext.Provider>
    );
}

AlgoContextProvider.propTypes = {
    children: node.isRequired,
}

export default AlgoContextProvider