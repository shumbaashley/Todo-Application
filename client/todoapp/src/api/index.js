import axios from 'axios'

const url = 'http://localhost:5000/api/todos'

export const fetchTodos = async () => {
    try {
        const { data } = await axios.get(url)
        return data;
    } catch (error) {
        
    }
}

export const postTodo = async (data) => {
    try {
        const todoData = { todo : data }
        const response = await axios.post(url, todoData)
        return response;
    } catch (error) {
        
    }
} 


export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${url}/${id}`)
        console.log("Successfully deleted!")
        return response
    } catch (error) {
        
    }

}

export const toggleComplete = async (id, done) => { 
    try {
        const response = await axios.put(`${url}/${id}`, {"done" : done})
        console.log("Successfully updated!")
        return response
    } catch (error) {
        
    }
    

}