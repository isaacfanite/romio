import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import Router from 'next/router'

export default function Register(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false)
  async function onSubmit(e){
    e.preventDefault()
    setLoading(true)
    const {error} = await supabase.auth.signUp({email,password})
    setLoading(false)
    if(error) return alert(error.message)
    alert('Check your email for confirmation / magic link.')
    Router.push('/auth/login')
  }
  return (<form onSubmit={onSubmit} style={{padding:20}}>
    <h2>Register</h2>
    <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
    <br />
    <input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
    <br/>
    <button disabled={loading}>Register</button>
  </form>)
}
