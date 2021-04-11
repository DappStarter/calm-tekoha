require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom arena brave foot edge remember sad around coral light army gift'; 
let testAccounts = [
"0xb7b0a9669cd48448c4542ed3f2adad86343dcd58e3a14b1bcb0dc40f456536bb",
"0xbba13639426d3be327760e642d381e6f08d9d51a204ad6dfb7fa105e10085ec3",
"0xe26c4d03718a9ca331c6aff7f846e550f6700220be2dc0af3835dad4d1888f34",
"0x4b5e2062e941455d0c398125f3717eebeb92753523bf913cef058b215c2b0840",
"0xe1b3b41c4706322f6c11b6f4fbfc87daaebe1a83b9a2bb434aed52ea4789097e",
"0xec0a6a2d84652aa1315bff3ef973154b495cb6217226045c792667fc241e255b",
"0xf1b5d1d431c9c1d9051c2053021010de9d9f0e8b76f98fc8ca4b5b714c77c63c",
"0xe45523f51cedf32ce5927f995395f5fc6fbd94430f31ab96674a44398dcce056",
"0xc2a855f73b353fe6a253a49ebca5135e8653f315f6c1ad4242144a4a25854f1d",
"0xd1ce60bf6a4e59a53adbe307df801839bd2273212f1eab11f67b7964e0421d79"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


