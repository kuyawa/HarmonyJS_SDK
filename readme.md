Github: [https://github.com/harmony-one/sdk](https://github.com/harmony-one/sdk)

# HarmonyJS SDK

HarmonyJS SDK is a javascript library that provides an easy way to interact with Harmony's blockchain.

This library contains a few packages:

- @harmony-js/account
- @harmony-js/contract
- @harmony-js/core
- @harmony-js/crypto
- @harmony-js/network
- @harmony-js/staking
- @harmony-js/transaction
- @harmony-js/utils

## Installation

Here be dragons...


## What do you want to learn?
- How to use as wallet developer
- How to use as Dapp developer
- How to integrate in exchange


### How to use as wallet developer

As a wallet developer you will be able to:

- generate addresses
- store private keys and mnemonic phrases
- import and export keys
- get balance from address
- get tx history
- add tokens
- send tokens
- change networks
- connect wallet to dapps


## Accounts

The first thing you want to do is create an account to send and receive ONE as the native asset in the network:

``` JS
let { Harmony } = require('@harmony-js/core') // Import HarmonyJS SDK

let net = 'https://api.s0.t.hmny.io/'         // Harmony mainnet server url
let opt = { chainType: 'hmy', chainId: 1 }    // Network identifier
let hmy = new Harmony(net, opt)               // Server connect
let mnm = hmy.wallet.newMnemonic()            // Generates new mnemonic
let act = hmy.wallet.addByMnemonic(mnm)       // Adds account to wallet
console.log('account ', act.bech32Address)    // ONE address
console.log('address ', act.address)          // Hex ethereum like address
console.log('pubkey  ', act.publicKey)        // Public key
console.log('privkey ', act.privateKey)       // Private key to sign transactions
console.log('mnemonic', mnm)                  // Mnemonic to recreate account
```

Now save this program as account.js and run it to generate ONE addresses:

`$ node account.js`

This is the result, a Harmony account for your use (do not share the private key):

```
$ node account.js
account  one1em2uj8rr7k8z3wyfdm3jmyxt855425880jt6er
address  0xced5c91c63f58e28b8896ee32d90cb3d295550e7
pubkey   0x0272ff742cc7903072a2a09554cda836fdf5b97c3caedd0c7eb0c4e8b58b7f7cc5
privkey  0x0a3a6a981fc510b5003d75b10ab70e13c60aac99490911e23bddab63ef4c8dc9
mnemonic claw sad lecture alley retire divorce flavor carpet fresh relief empty isolate
```

More fierce dragons here, beware...

`To be continued`