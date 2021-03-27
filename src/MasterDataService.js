const axios = require('axios')

const SCROLL_SIZE = 1000

// TODO: impl persistence for the cli
class MasterDataService {
    constructor({ account, entity, appKey, appToken }) {
        this.url = `https://${account}.myvtex.com/`
        this.entity = entity
        this.appKey = appKey
        this.appToken = appToken
        this.headers = this.genHeaders()
    }

    genHeaders = () => {
        return {
            'Content-type': 'application/json',
            Accept: 'application/vnd.vtex.ds.v10+json'
        }
    }

    /** 
     * TODO: impl
     * 1. The loop over the total number of documents
     * 2. The promises list so it can make multiple requests concurrently
     * 3. The parser for the fields option 
     * */
    download = async(fields = null) => {
        const scrollBaseUrl = `api/dataentities/${this.entity}/scroll`
        let queryStr = `_size=${SCROLL_SIZE}`
        if (fields) {
            let baseStr = `_fields=${fields.join(',')}`
        }
        let url = `${scrollBaseUrl}?${queryStr}`
        const docs = []
        let response = await axios.get(url, { headers: this.headers })
        const scrollToken = response.headers['x-vtex-md-token']
        // IMPL the next requests here
        return this
    }
}

module.exports = MasterDataService
