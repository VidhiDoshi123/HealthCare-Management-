//import { Connect } from 'uport-connect'
import { Connect, SimpleSigner } from 'uport-connect'
//import { Connect, SimpleSigner } from 'uport-connect'

    export let uport = new Connect('medrec1', {
      clientId: '2ognWq3AiKteRQTYZKJuGD4pZ8vqx6EVurK',
      network: 'rinkeby',
      signer: SimpleSigner('dca39b98665f9b3c46bce75bf4ffe98da0639df3e6b503c846b32c5439a3a6f8')
    })
    
//export let uport = new Connect('TruffleBox')
export const web3 = uport.getWeb3()
