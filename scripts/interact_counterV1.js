const ethers = require('ethers');
// https://codeshare.io/5NmB31

const provider = new ethers.providers.JsonRpcProvider('HTTP://0.0.0.0:7545');
const pvtKey = '0x188380c867c3f27ea8332597f82ee42e60a81db891df47ebee9a47efec85de29';
// const pvtKey = '0x022de6c59e884641d98200ccaae4d323b8b4649a4396d27312fb202dba173c98';
const wallet = new ethers.Wallet(pvtKey, provider);

async function main() {
    const contractAddress = '0x200fD034d8f1E7a4aDE7B3ae87f42446D1883094';
    const contractArtifact = require('../artifacts/contracts/CounterV2.sol/CounterV2.json');
    const contract = new ethers.Contract(contractAddress, contractArtifact.abi, wallet);

    let result;
    let tx, rec;

    result = await contract.getCount();
    console.log("count:", result.toNumber());

    tx = await contract.increment();
    rec = await tx.wait();
    // console.log(rec);

    result = await contract.getCount();
    console.log("count:", result);


    tx = await contract.decrement();
    rec = await tx.wait();
    // console.log(rec);

    result = await contract.getCount();
    console.log("count:", result);

    tx = await contract.increment();
    rec = await tx.wait();
    // console.log(rec);

    result = await contract.getCount();
    console.log("count:", result);
}

main().then(() => {
    console.log('done');
}).catch((error) => {
    console.log(error);
}).finally(() => {
    process.exit(0);
});
