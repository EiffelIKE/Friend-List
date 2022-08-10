import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetchAPI = (url) => {
  const [data, setCofee] = useState([])
  useEffect(() => {
    axios.get(url).then(
      (response) => {
        setCofee(response.data)
      }
    ).catch((error) => alert(error))
  }, [url])
  return { data }
}

export default useFetchAPI
