import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/allquote');
        // console.log(response.data.quotes)
        setQuotes(response.data.quotes)
      } catch (error) {
        console.log('Error fetching data', error)
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      {
        quotes.map((quote) => (
          <blockquote key={quote.id}>
            <h6>{quote.msg}</h6>
            <p className='right-align'>{quote.user}</p>
          </blockquote>
          )
        )
      }
    </div>
  )
}
