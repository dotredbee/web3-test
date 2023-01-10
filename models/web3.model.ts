import Web3 from "web3"

const connectWeb3 = (host : string) => {
    const web3 = new Web3(
        new Web3.providers.HttpProvider(host)
    )    

    return web3
}

export = connectWeb3

