import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Oswald, Source_Sans_3, Barlow_Condensed } from 'next/font/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${oswald.variable} ${source_sans.variable} ${barlow_condensed.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

const oswald =  Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source'
});

const barlow_condensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
