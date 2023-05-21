import React from 'react'
import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {        
        key: "6cd400b5183d4064bcf12595763fc758"
    }
})
