import web3 from './infuraConnection.js';

const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

web3.eth.getBalance(address)
  .then(balance => {
    console.log(`Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
  })
  .catch(error => {
    console.error('Error fetching balance:', error);
  });

web3.eth.subscribe('newBlockHeaders')
  .on('data', (blockHeader) => {
    console.log(`New block header: ${blockHeader.number}`);
  })
  .on('error', (error) => {
    console.error('Error with newBlockHeaders subscription:', error);
  });
