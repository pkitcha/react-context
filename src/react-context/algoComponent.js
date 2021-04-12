import React, { useEffect }  from 'react'

import { useAlgoContext }  from './AlgoContext'
import { useOrderContext }  from './OrderContext'


function AlgoComponent() {

    const { algo, algoAction } = useAlgoContext();
    const { order, orderAction } = useOrderContext();

    useEffect(() =>{

        for(let i =0; i < 5; i++)
        {
            algoAction.setAlgo({
            id: i,           
            correlationId : i,
            algo : "LIMIT:" ,
            clientOrderId : i + 1 ,
            msgSequenceNumber : 0 ,
            orderId : "",
            account : "030000821",
            symbol : "KBANK",
            price : 100,
            enterId : "6099",
            orderQty : 300
            });         
        }

    }, []);

    
    useEffect(() =>{

        for(let i =0; i < 1; i++)
        {
            orderAction.updateAlgo({
				id: i
                side : "BUY"  ,
                orderId: "5"  ,
                orderStatus: "FILLED",
                leavesQty: 100  ,
                lastQty: 100  ,
                cumulativeQty : 100,
                text: ""
            });
        }

    }, []);

    return (
     <div>
         { 
            algo.map(item => 
            <div>
                <p> {item.id} </p>                    
            </div>) 
          }
     </div>
    );
}

 export default AlgoComponent;