import Education from "../components/Education";
import Head from 'next/head'


export default function EducationPage() {
    return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Devansh Chaubey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto mt-16 antialiased">
      <Education/>
      </main>
    </div>
    )
}