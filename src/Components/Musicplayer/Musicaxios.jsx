import React, { useEffect, useState } from 'react'
import axios from 'axios'
   
const   Musicaxios = (url) => {

    const [data, setdata] = useState(null);
const [loading, setloading] = useState(true)

// import axios from 'axios'



    useEffect(() => {
      try {
        axios.get(url)
        .then((res)=>{
            console.log(res);
            setdata(res.data)
            console.log(data);
            setloading(false)
        }).catch((err)=>{
            console.log(err);
        })
      } catch (error) {
        console.log(error);
      }
    }, [url])
    return {data, loading}
  return (
    <>

    </>
  )

}

export default Musicaxios
