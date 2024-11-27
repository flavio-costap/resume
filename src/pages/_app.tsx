import "../styles/globals.css";
import localFont from "next/font/local";
import { AppProps } from "next/app";
import Head from "next/head";
import { VisitorProvider } from "@/context/VisitorContext";
import { LanguageProvider } from "@/context/LanguageContext";

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
        <meta
          name="description"
          content="Esse é meu currículo interativo, fique a vontade para entrar em contato comigo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Flávio Costa Engenharia de Software"
        ></meta>
        <meta property="og:site_name" content="flavio-costap"></meta>
        <meta
          property="og:description"
          content="Site currículo de um especialista em front-end"
        />
        <meta property="og:url" content="https://flaviocosta-eng.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VisitorProvider>
          <LanguageProvider>
              <Component {...pageProps} />
          </LanguageProvider>
        </VisitorProvider>
      </main>
    </div>
  );
}
