import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
export default function Admin(){
  const [profiles,setProfiles]=useState([])
  useEffect(()=>{ load() },[])
  async function load(){
    let {data} = await supabase.from('profiles').select('*').limit(100)
    setProfiles(data || [])
  }
  async function suspend(id, val){
    await supabase.from('profiles').update({suspended:val}).eq('id', id)
    load()
  }
  return (<div style={{padding:20}}>
    <h2>Admin Panel</h2>
    <ul>
      {profiles.map(p=>(
        <li key={p.id}>{p.display_name} — {p.email}
          <button onClick={()=>suspend(p.id, true)}>Suspend</button>
          <button onClick={()=>suspend(p.id, false)}>Unsuspend</button>
        </li>
      ))}
    </ul>
  </div>)
}
