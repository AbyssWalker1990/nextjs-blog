import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: 'Volodymyr\'s Blog',
  description: 'Created by Volodymyr Bordiian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
