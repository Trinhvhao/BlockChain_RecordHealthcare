import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);

    // shorten address
    function shortenAddress(address, length = 6) {
        if (!address) return '';
    
        const start = address.substring(0, length);
        const end = address.substring(address.length - length);
    
        return `${start}...${end}`;
    }
    
    useEffect(() => {
        let isMounted = true; // Flag to track whether the component is mounted

        async function fetchTransactionsData() {
            try {
                const web3 = new Web3('http://127.0.0.1:7575');
                const latestBlockNumber = await web3.eth.getBlockNumber();
                let transactionsData = [];

                for (let blockNumber = latestBlockNumber; blockNumber >= 0; blockNumber--) {
                    const block = await web3.eth.getBlock(blockNumber, true);
                    const transactions = block.transactions;

                    transactions.forEach(transaction => {
                        transactionsData.push({
                            from: transaction.from,
                            to: transaction.to,
                            gas: transaction.gas,
                            value: transaction.value,
                            minedBlock: blockNumber
                        });
                    });
                }

                // Check if the component is still mounted before updating state
                if (isMounted) {
                    setTransactions(transactionsData);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        fetchTransactionsData();

        // Cleanup function to run when the component is unmounted
        return () => {
            isMounted = false; // Update the flag when the component is unmounted
        };
    }, []);
    return (
        <div className="overflow-x-auto">
            <table className="table table-xl table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th></th>
                        <th>From Address</th>
                        <th>To Address</th>
                        <th>Gas</th>
                        <th>Value</th>
                        <th>Mined Block</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody> {/* Add tbody */}
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{shortenAddress(transaction.from)}</td>
                            <td>{shortenAddress(transaction.to)}</td>
                            <td>{transaction.gas}</td>
                            <td>{transaction.value}</td>
                            <td>{transaction.minedBlock}</td>
                            <td>{index + 1}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>From Address</th>
                        <th>To Address</th>
                        <th>Gas</th>
                        <th>Value</th>
                        <th>Mined Block</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
    
}

export default TransactionsTable;
