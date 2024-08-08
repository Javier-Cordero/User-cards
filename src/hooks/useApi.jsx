import { useEffect, useState } from 'react'
import axios from 'axios'
export function useApi(){
    const [user, setUser] = useState([])
    async function getData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUser(response.data);
      } catch (error) {
        console.error('Error:', error)
      }
    }
    useEffect(() => { getData() }, []);
    return {user};
  }