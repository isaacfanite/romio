import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
export default function ProfilePage(){
  const r = useRouter(); const { id } = r.query
  const [profile,setProfile]=useState(null)
  useEffect(()=>{
    if(!id) return
    supabase.from('profiles').select('*').eq('id', id).single().then(({data,error})=>{
      if(error) return console.error(error)
      setProfile(data)
    })
  },[id])
  if(!profile) return <div>Loading...</div>
  return (<div style={{padding:20}}>
    <h2>{profile.display_name}</h2>
    <p>{profile.bio}</p>
    <p>Gender: {profile.gender}</p>
    <p>Birthdate: {profile.birthdate}</p>
    {profile.can_view_contact ? <p>Contact: (hidden - implement retrieval)</p> : (
      <form method="POST" action="/api/easypay/initiate">
        <input type="hidden" name="user_id" value={profile.id} />
        <button type="submit">Pay to view contact</button>
      </form>
    )}
  </div>)
}
