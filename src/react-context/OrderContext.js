import * as React from 'react'
import { node } from 'prop-types'
import { useAlgoContext } from './AlgoContext'
import { useCountContext } from './count-context'


const OrderContext = React.createContext();

export function useOrderContext(){
    return React.useContext(OrderContext);
}

const initialState = []

function OrderContextProvider({ children }){
    const { algo } = useAlgoContext();

    const [order, setOrder] = React.useState(initialState);
    const {count} = useCountContext();

    function setOrderTrading(order){
        setOrder((currentState) =>  [...currentState ,{ order } ])
    }

    function updateAlgo(order){

        var cnt = count;
        var index = algo.findIndex(x => x.id === order.id);
        if(index > -1)
        {       
            algo[index].side = order.side;  
            algo[index].orderId = order.orderId;  
            algo[index].orderStatus = order.orderStatus;  
            algo[index].leavesQty = order.leavesQty;  
            algo[index].orderStatus = order.orderStatus;  
            algo[index].lastQty = order.lastQty;  
            algo[index].cumulativeQty = order.cumulativeQty;  
            algo[index].text = order.text;  
        }
    }

    const countStore = {
        order,
        orderAction:{
            updateAlgo: updateAlgo,
            setOrder: setOrderTrading
        },
    };

    return (
        <OrderContext.Provider value={countStore}>{children}</OrderContext.Provider>
    );
}

OrderContextProvider.propTypes = {
    children: node.isRequired,
}

export default OrderContextProvider