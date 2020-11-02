import React from 'react'
import axios from 'axios'

const url = 'http://localhost:5000/api/todos'

export const fetchTodos = async () => {
    try {
        const data = await axios.get(url)
        return data;
    } catch (error) {
        
    }
}

export const postTodo = (data) => {
    try {
        const response = await axios.post(url, data)
        return response;
    } catch (error) {
        
    }
} 