const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('HTTP://0.0.0.0:7545');
const pvtKey = '0x188380c867c3f27ea8332597f82ee42e60a81db891df47ebee9a47efec85de29';
const wallet = new ethers.Wallet(pvtKey, provider);

async function main() {
    console.log(wallet.address);

    const txn = await wallet.sendTransaction({
        to: '0xeC9207F016a101dce1112D4894a4499F1d8508a2',
        value: ethers.utils.parseEther('1'), // 10^18 = 1 ETH
    });

    console.log(txn);

    const rec = await txn.wait();
    console.log(rec);
}

main().then(() => {
    console.log('done');
}).catch((error) => {
    console.log(error);
}).finally(() => {
    process.exit(0);
});
