import Web3 from 'web3';

// Replace with your Infura API key
const INFURA_API_KEY = 'b6d29dd298f94fc485627ad54eac8d78';

// Connect to Ethereum network using Infura WebSockets
const web3 = new Web3(new Web3.providers.WebsocketProvider(`wss://mainnet.infura.io/ws/v3/b6d29dd298f94fc485627ad54eac8d78`));

// Export the web3 instance for use in other files
export default web3;
