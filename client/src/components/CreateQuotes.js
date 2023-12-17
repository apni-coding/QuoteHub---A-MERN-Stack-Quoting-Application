import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CreateQuotes() {
  const [quote, setQuote] = useState('');
  const navigate  = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        toast('You are not sigin');
        navigate('/signin');
        return;
      }
      if(!quote){
        toast.info("Quote not be empty");
        return;
      }

      const quotesResponse = await axios.post('http://localhost:3000/createquote',{msg:quote},
      {
        headers: {
          Authorization: storedToken
        }
      }
      );

      if(quotesResponse.data){
        toast.success('Quote Added!!');
        setQuote('')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container my-container'>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='write your quote here'
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button className='btn #673ab7 deep-purple' type='submit'>Create</button>
      </form>

    </div>
  )
}
