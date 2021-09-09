import React, { useContext } from 'react';
import Context from '../global/context';

const History = () => {
    const { value } = useContext(Context);



    return <div className="history">
        <div className="historyHeader">Search History</div>
        <div className="historyHeader">{value}</div>
    </div>
}


export default History;