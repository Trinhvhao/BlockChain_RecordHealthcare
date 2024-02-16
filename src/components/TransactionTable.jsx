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
        async function fetchTransactionsData() {
            try {
                // Khởi tạo provider của Web3 với địa chỉ của Ganache
                const web3 = new Web3('http://127.0.0.1:7575');

                // Lấy số lượng block đã được mined
                const latestBlockNumber = await web3.eth.getBlockNumber();

                let transactionsData = [];

                // Duyệt qua các block để lấy thông tin của các giao dịch
                for (let blockNumber = latestBlockNumber; blockNumber >= 0; blockNumber--) {
                    // Lấy thông tin của mỗi block
                    const block = await web3.eth.getBlock(blockNumber, true);

                    // Lấy thông tin của các giao dịch trong block
                    const transactions = block.transactions;

                    // Duyệt qua các giao dịch trong block
                    transactions.forEach(transaction => {
                        // Thêm thông tin của giao dịch vào mảng
                        transactionsData.push({
                            from: transaction.from,
                            to: transaction.to,
                            gas: transaction.gas,
                            value: transaction.value,
                            minedBlock: blockNumber
                        });
                    });
                }

                // Cập nhật state với dữ liệu giao dịch
                setTransactions(transactionsData);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        // Gọi hàm để lấy dữ liệu của các giao dịch
        fetchTransactionsData();
    }, []); // Tham số thứ hai truyền vào useEffect để đảm bảo hàm này chỉ chạy một lần sau khi component được render

    return (
        <div className="overflow-x-auto">
            <table className="table table-xl table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th></th>
                        <td>From Address</td>
                        <td>To Address</td>
                        <td>Gas</td>
                        <td>Value</td>
                        <td>Mined Block</td>
                        <th></th>
                    </tr>
                </thead>
   
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{shortenAddress(transaction.from)}</td>
                            <td>{shortenAddress(transaction.to)}</td>
                            <td>{transaction.gas}</td>
                            <td>{transaction.value}</td>
                            <td>{transaction.minedBlock}</td>
                            <th>{index + 1}</th>
                        </tr>
                    ))}
        
                <tfoot>
                    <tr>
                        <th></th>
                        <td>From Address</td>
                        <td>To Address</td>
                        <td>Gas</td>
                        <td>Value</td>
                        <td>Mined Block</td>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default TransactionsTable;
