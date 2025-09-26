const ethers = require('ethers');
// https://codeshare.io/5NmB31

const provider = new ethers.providers.JsonRpcProvider('HTTP://0.0.0.0:7545');
const pvtKey = '0x188380c867c3f27ea8332597f82ee42e60a81db891df47ebee9a47efec85de29';
const wallet = new ethers.Wallet(pvtKey, provider);

async function main() {
    const contractAddress = '0x725CEe48aFEC750749b7aB18828df1CAF2EA77Cd';
    const contractArtifact = require('../artifacts/contracts/NamasteDuniya.sol/NamasteDuniya.json');
    const contract = new ethers.Contract(contractAddress, contractArtifact.abi, wallet);
    const result = await contract.get();
    console.log(result);
}

main().then(() => {
    console.log('done');
}).catch((error) => {
    console.log(error);
}).finally(() => {
    process.exit(0);
});
