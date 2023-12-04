import RootLayout from '@/app/layout'

type WelcomeLayoutProps = {
  children: React.ReactNode
}

export default function WelcomeLayout({ children }: WelcomeLayoutProps) {
  return (
    <RootLayout theme={'dark'}>
      {children}
    </RootLayout>
  )
}
