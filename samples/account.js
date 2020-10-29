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