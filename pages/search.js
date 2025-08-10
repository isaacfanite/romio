import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
export default function Search(){
  const [profiles,setProfiles]=useState([])
  const [gender,setGender]=useState('')
  const [minAge,setMinAge]=useState(18)
  const [maxAge,setMaxAge]=useState(99)
  const [lat,setLat]=useState(null); const [lng,setLng]=useState(null)
  useEffect(()=>{ navigator.geolocation?.getCurrentPosition(p=>{ setLat(p.coords.latitude); setLng(p.coords.longitude) }) },[])
  async function fetchProfiles(){
    // server-side would do radius search; this is a simple client-side call
    let { data, error } = await supabase.from('profiles').select('*').limit(50)
    if(error) return alert(error.message)
    setProfiles(data)
  }
  useEffect(()=>{ fetchProfiles() },[])
  return (<div style={{padding:20}}>
    <h2>Search</h2>
    <div>
      <label>Gender filter:</label>
      <select value={gender} onChange={e=>setGender(e.target.value)}>
        <option value=''>Any</option>
        <option>male</option><option>female</option><option>nonbinary</option>
      </select>
    </div>
    <div>
      <label>Age</label>
      <input type='number' value={minAge} onChange={e=>setMinAge(e.target.value)} /> - <input type='number' value={maxAge} onChange={e=>setMaxAge(e.target.value)} />
    </div>
    <button onClick={fetchProfiles}>Refresh</button>
    <ul>
      {profiles.map(p=>(
        <li key={p.id}>
          <a href={'/profile/'+p.id}>{p.display_name || 'Unnamed'}</a>
          {p.can_view_contact ? <span> (contact available)</span> : <span> (locked)</span>}
        </li>
      ))}
    </ul>
  </div>)
}
