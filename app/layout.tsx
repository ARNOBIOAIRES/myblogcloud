import Image from 'next/image'
import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})

{
      const header = (
      <header>
        <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
          <Image src="/logo.png" width={40} height={40} alt='logotipo' className='mx-auto mb-2' />
          <Link href='/'>
          <h1 className="text-3xl font-bold underlin text-white">Arnóbio Aire's Blog </h1>
          </Link>
          <p className="text-slate-300">👌Welcome to my tech blog</p>
          <br />
        </div>
      </header>
   )

   const footer = (
    <footer>
      <div className='border-t border-slate-400 mt-6 py-4 text-center'>
           <h3>Developed by Aires</h3>
      </div>
    </footer>

   )
   


  return (
    <html lang="en">
    <head />
      <body>
        <div className='mx-auto border max-w-2xl px-4'>
       {header}
        {children}
        {footer}
        </div>
      </body>
    </html>
  )
}
