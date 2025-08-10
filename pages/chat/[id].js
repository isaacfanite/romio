import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ChatPage(){
  const r = useRouter(); const { id } = r.query
  useEffect(()=>{
    // Initialize CometChat SDK client-side and join conversation with user id
    // See README for CometChat integration steps and server token generation
  },[id])
  return (<div style={{padding:20}}>
    <h2>Chat with {id}</h2>
    <div id="cometchat"></div>
  </div>)
}
