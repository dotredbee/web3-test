const web3Modules = {
    accounts : async (web3 : any) => {
        try{
            return await web3.eth.getAccounts() 
        }catch(e) {
            return e
        }
    }
}

export = web3Modules