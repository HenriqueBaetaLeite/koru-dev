import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script src="https://rawgit.com/WeiChiaChang/Easter-egg/master/easter-eggs-collection.js" strategy="lazyOnload" />
      <h1>Boas vindas ao nosso App</h1>
      <p>Esta é a home</p>
    </>
  )
}
