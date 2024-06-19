import { Sidebar } from '@/components/Sidebar'
import { inter } from '@/config/fonts'
import { metaData } from '@/config/meta'

import { FileInputProvider } from '@/context/file-input-context'
import '../styles/globals.css'

export const metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-app">
          <Sidebar />

          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:w-auto lg:px-8 lg:pt-8">
            <FileInputProvider>{children}</FileInputProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
