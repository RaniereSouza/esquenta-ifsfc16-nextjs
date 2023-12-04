import './style.css'

type Pagina1LayoutProps = {
  children: React.ReactNode
}

export default function Pagina1Layout({ children }: Pagina1LayoutProps) {
  return (
    <body>
      <nav>
        <ul>
          <li><a href="">React</a></li>
          <li><a href="">Next</a></li>
          <li><a href="">Vercel</a></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </body>
  )
}
