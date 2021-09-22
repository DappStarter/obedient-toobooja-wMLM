require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind mistake hunt beach swift stairs'; 
let testAccounts = [
"0x996ff7cb96ad7b96b6c66c611e2ddce27e0cbc483a37e58ca5000a4925e6d97a",
"0x69ee5ba746c2bc683223fa08caf31fa53d969eb227362c8d1cca58b9f8b85c16",
"0x2c63cffb2c03a418cfd71fec1da6bab0a65aa23bfb8bc12802002542f400d69d",
"0x7cb26d94e4fe3352d0d2ddcc6992addafdc9aba9c5e6e288e41f54397e237a57",
"0x43f26052bfed6bfb0c864eb48b30020b36fc5959310a9c1017313f69039fb2dd",
"0x7f2592107dfa24f3110b7aaf52f1c6b85e2c6587921ffde4526cbf11b3731c3e",
"0xed284712c88a07893f9cad8e2d88fb162a7422471aa7904ff5df3d758dee25e2",
"0x500eb9e12e307052f8d49dc39c053d992afb84d62625938c1308449509c2f064",
"0xc2e972b19542a2333236156bad3c1f5b2ed7535816f5ccaa0a2dbf0af823a546",
"0xa7f7aa337788aa1df587d8e5763c3853d93ab91d850a8bdadf475e371537460a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

