import React, { useContext } from 'react'
import { myContext } from './Context'

const Form = () => {

  const { setUsername, setPassword, submitFun } = useContext(myContext)

  return (
    <form className='container p-5' onSubmit={submitFun}>
      <input type="text" className='form-control' placeholder='Enter Username' onChange={e => setUsername(e.target.value)}/>
      <input type="text" className='form-control my-3' placeholder='Enter Password' onChange={e => setPassword(e.target.value)}/>
      <input type="submit" className='form-control btn btn-primary' />
    </form>
  )
}

export default Form
