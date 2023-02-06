/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="MinhaCena" />
        <link rel="icon" href="/favicon.ico" />
        <title>MinhaCena</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
