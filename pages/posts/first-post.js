import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>HELLO MY NAME IS MINHYEOK KIM</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}