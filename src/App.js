import React , { useEffect , useState } from 'react';
import Lenght from './components/Lenght';

export default function App() {

  const [data , setData] = useState('');
  const [err , setErr] = useState('');
  const [loading , setLoading] = useState(true);

  const baseUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchApi = async() => {
      try{
        const response = await fetch(baseUrl)
        const apiData = await response.json()
        setData(apiData)
        setLoading(false)
      }catch(err){
        setLoading(false)
        setErr(err)
      }
    }

    fetchApi()
  },[])

  return (
    <>
      <div>
        {
          loading ? (
            <p>Loading ...</p>
          ): err ? (
            <p>{err.message}</p>
          ):(
            <p>{data.length}</p>
          )
        }
      </div>
      <Lenght data={data} err={err} />
    </>
  );
}

