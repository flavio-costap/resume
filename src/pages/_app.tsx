import "../styles/globals.css";
import localFont from "next/font/local";
import { AppProps } from "next/app";
import Head from "next/head";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Head>
        <title>Flávio Costa</title>
        <meta name="description" content="Esse é meu currículo interativo, fique a vontade para entrar em contato comigo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
