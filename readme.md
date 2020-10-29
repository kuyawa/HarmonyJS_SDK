Github: [https://github.com/harmony-one/sdk](https://github.com/harmony-one/sdk)

# HarmonyJS SDK

Harmony JS SDK is a javascript library that provides an easy way to interact with Harmony's blockchain.

This library contains a few packages:

- @harmony-js/account
- @harmony-js/contract
- @harmony-js/core
- @harmony-js/crypto
- @harmony-js/network
- @harmony-js/staking
- @harmony-js/transaction
- @harmony-js/utils

## Instalation

Here be dragons...

## Accounts

The first thing you want to do is create an account to send and receive ONE as the native asset in the network:

``` JS
let { Harmony } = require('@harmony-js/core') // Import HarmonyJS SDK

let net = 'https://api.s0.t.hmny.io/'         // Harmony mainnet server url
let opt = { chainType: 'hmy', chainId: 1 }    // Network identifier
let hmy = new Harmony(net, opt)               // Server connect
let nem = hmy.wallet.newMnemonic()            // Generates new mnemonic
let act = hmy.wallet.addByMnemonic(nem)       // Adds account to wallet
console.log('account ', act.bech32Address)    // ONE address
console.log('address ', act.address)          // Hex ethereum like address
console.log('pubkey  ', act.publicKey)        // Public key to receive assets
console.log('privkey ', act.privateKey)       // Private key to sign transactions
console.log('mnemonic', nem)                  // Mnemonic to recreate account
```

More dragons here, beware...

`To be continued`