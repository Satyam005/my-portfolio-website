import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="web developer, front-end developer, portfolio, projects"
        />
        <meta name="author" content="Satyam Negi"></meta>
        <link
          rel="canonical"
          href="https://satyamnegi-portfolio.netlify.app/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
