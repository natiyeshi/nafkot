import React from 'react'
import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:1337'
// axios.defaults.baseURL = 'https://nafkot-us4u.onrender.com/'
axios.defaults.baseURL = window.location.origin;

export default axios