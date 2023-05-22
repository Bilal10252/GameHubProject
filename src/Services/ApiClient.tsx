import React from 'react'
import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {        
        key: "04a62dbc7f814b0d90c849028d6985dd"
    }
})
