// components/ContactForm.js
import { useState } from 'react'
import React from 'react'


const ContactForm = () => {
  const { dispatch } = contact()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const Contact = {name, email, message}
    
    const response = await fetch('/Contact', {
      method: 'POST',
      body: JSON.stringify(Contact),
      headers: {
        'Content-Type': 'application/json'
   
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setName('')
      setEmail('')
      setMessage('')
      dispatch({type: 'CREATE_MESSAGE', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Leave us a Message</h3>

      <label>Name</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Email:</label>
      <input 
        type="text" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className={emptyFields.includes('email') ? 'error' : ''}
      />

      <label>Message:</label>
      <input 
        type="text" 
        onChange={(e) => setMessage(e.target.value)} 
        value={message}
        className={emptyFields.includes('message') ? 'error' : ''}
      />

      <button className="btn portfolio-button" style={{backgroundColor:'#42A5F5', color:'white'}}>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ContactForm;