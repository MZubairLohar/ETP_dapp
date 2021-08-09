

let contractAddress_ETPToken = "0x1a62EF179916D73375629733E875E6eD69663F30"
let ABI_ETPToken = [{ "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "distributePayouts", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "feeCalculation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeCollector", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeDivider", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feePercentage", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxFeeAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "ecoAddress", "type": "address" }], "name": "transferFee", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }];

let contractAddress_ETPTokenSale = "0xb44dFA6F2eb4985CF61ce59C1D830FEA4c56f821";
let ABI_ETPTokenSale = [{ "inputs": [{ "internalType": "uint256", "name": "_rate", "type": "uint256" }, { "internalType": "address payable", "name": "_wallet", "type": "address" }, { "internalType": "contract IBEP20", "name": "_token", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "purchaser", "type": "address" }, { "indexed": true, "internalType": "address", "name": "beneficiary", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensPurchased", "type": "event" }, { "inputs": [], "name": "PauseSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "presaleEnded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenSold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_rate", "type": "uint256" }], "name": "updateRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "wallet", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "weiRaised", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

var tokenInstance;
var saleInstance;
var userAddress;
var chainId;
var tokenPrice = 0.0001;

const initialize = async () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log("Wallet Connected");
    console.log('this is token address: ', contractAddress_ETPToken);
    // await connectWallet();
  } else {
    alert("Please Use Dapp browser!")
  }

  async function connectWallet() {

    var web3 = new Web3(Web3.givenProvider);
    await Web3.givenProvider.enable();

    await ethereum.request({ method: 'eth_requestAccounts' })
      .then(async (res) => {
        chainId = await web3.eth.getChainId();

        if (chainId == "3") {
          userAddress = res[0];
          console.log('this is your address: ', userAddress);
          tokenInstance = new web3.eth.Contract(ABI_ETPToken, contractAddress_ETPToken);
          saleInstance = new web3.eth.Contract(ABI_ETPTokenSale, contractAddress_ETPTokenSale);
        } else {
          alert("you need to connect ropsten network")
        }
      });
  }

  $("#buy").click(async () => {
    await connectWallet();

    let inputValue = $('#amount').val();
    // let input = ethers.utils.parseEther(inputValue).toString();
    // console.log('This is Either Value: ', input);

    let cal = (await calcTokens(inputValue)).toString();
    console.log('Eth Paid!', cal)

    let ccc = ethers.utils.parseEther(cal).toString();
    console.log("Convert into Wei", ccc)

    await saleInstance.methods.buyTokens().send({
      from: userAddress,
      value: ccc
    }).then((res) => {
      console.log('this is final result:', res);
    })

  })


  async function calcTokens(token) {
    let calc = token * tokenPrice;
    // let res = calc * 1 ** 10;
    return calc;
  }

};
window.addEventListener('DOMContentLoaded', initialize);





