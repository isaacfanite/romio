import Link from 'next/link'
export default function Home(){
  return (
    <main style={{padding:40}}>
      <h1>Welcome to {process.env.SITE_NAME || 'MyDatingSite'}</h1>
      <p><Link href='/auth/login'>Login</Link> · <Link href='/auth/register'>Register</Link> · <Link href='/search'>Search</Link></p>
    </main>
  )
}
