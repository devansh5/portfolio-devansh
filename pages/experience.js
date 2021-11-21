import Head from 'next/head';
import Experience from "../components/Experience";



export default function ExperiencePage () {
    return ( 
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Devansh Chaubey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto mt-16 antialiased">
      <Experience/>
      </main>
    </div>
    )
}