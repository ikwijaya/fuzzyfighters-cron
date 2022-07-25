const axios = require('axios')
const { utils } = require('../utils')
const { API_URL, API_KEY, RAFFLE_ENDPOINT } = process.env

const raffle = async () => {
    try {
        const endpoint = RAFFLE_ENDPOINT;
        const headers = { apikey: API_KEY }
        const response = await axios.default.get(API_URL+endpoint, { headers: headers })
            .catch(e => { throw (e) });

        if(response.status != 200) return utils.failed(`Error when access API`, response.data);
        return utils.success(`success`, response.data)
    } catch (error) {
        console.log(`error: `,error)
    }
}

module.exports = raffle