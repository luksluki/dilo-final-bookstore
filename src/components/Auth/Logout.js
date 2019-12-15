import React from 'react'
import axios from 'axios'

const redirect = () => {
    window.location.replace('/')
}

const Logout = async () => {
    const userData = window.localStorage.getItem('userData')
        ? JSON.parse(window.localStorage.getItem('userData'))
        : {}

    await axios.post('http://localhost:3000/users/logout', {
        headers: {
            Authorization: `Bearer ${userData.token}`,
        },
    })

    window.localStorage.removeItem('userData')
    redirect()
}

export default Logout
