import optionsImg from './assets/options-img.png';
import decentralizedTradingImg from './assets/dex-trading.png';
import liquidityPoolsImg from './assets/liquidity_pools.png';
import smartContractsImg from './assets/smart_contract.png';

export const CORE_CONCEPTS = [
    {
        image: optionsImg,
        title: 'Options',
        description:
            'Trade options contracts on crypto assets. Define the contract terms like expiration date and strike price directly on the blockchain.',
    },
    {
        image: decentralizedTradingImg,
        title: 'DEX Trading',
        description:
            'Experience secure, transparent trading without intermediaries. Our protocol uses decentralized exchanges for all trades.',
    },
    {
        image: liquidityPoolsImg,
        title: 'Liquidity Pools',
        description:
            'Provide liquidity to earn rewards. Our pools support a variety of options contracts, enhancing liquidity and enabling efficient trading.',
    },
    {
        image: smartContractsImg,
        title: 'Smart Contracts',
        description:
            'Our protocol is powered by smart contracts that automate and enforce the terms of options contracts, ensuring trustless execution.',
    },
];

export const EXAMPLES = {
    optionsContracts: {
        title: 'Options Contracts',
        description:
            'Options contracts give you the right, but not the obligation, to buy or sell an asset at a predetermined price within a set timeframe.',
        code: `
// Schrödinger's Call Option Contract
function exerciseOption() payable {
  return (market.isUp()) ? "To the moon 🚀" : "Oops, cat's dead ☠️";
}`,
    },
    decentralizedTrading: {
        title: 'Decentralized Trading',
        description:
            'Decentralized trading allows for direct peer-to-peer transactions, cutting out traditional financial intermediaries.',
        code: `
// "Flip-a-Coin" DEX Trade Execution
function executeTrade(tokenA, tokenB, amount) {
return (Math.random() > 0.5) ? "Trade executed! 🎉" : "Try again! 🪙";
        }`,
    },
    liquidityPools: {
        title: 'Liquidity Pools',
        description:
            'Liquidity pools are collections of funds locked in a smart contract, facilitating decentralized trading by providing liquidity.',
        code: `
// "Make-It-Rain" Liquidity Addition
function addLiquidity(tokenA, tokenB, amountA, amountB) {
return (amountA > 0 && amountB > 0) ? "Liquidity shower! 🌧️" : "No drops to add! 💧";
}`,
    },
    smartContracts: {
        title: 'Smart Contracts',
        description:
            'Smart contracts are self-executing contracts with the terms of the agreement directly written into lines of code.',
        code: `
// "Do-Nothing" Smart Contract
contract MyContract {
function doLiterallyNothing() public {
// Congratulations, you've achieved nothing!
}`,
    },
};