import './globals.css'
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>{children}</body>
      <footer className={"app-footer"}>
      <div>
        <a href="https://github.com/kashifumar">Kashif Umar</a><span>&copy; 2023.</span>
      </div>        
    </footer>
    </html>
  )
}
