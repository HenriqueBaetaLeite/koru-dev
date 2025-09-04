// import myLogo from "../../public/next.svg";
// import Link from 'next/link';
// import Image from "next/image";
import Script from 'next/script';

export default function Home() {
  return (
    <main className="p-6 bg-gray-500">
      {/* <Link className='text-3xl'
      href={
        {
          pathname: '/contato',
          query: { termo: 'nextjs'}
        }
      }>Link de navegação</Link> */}

      <h1 className="text-3xl">Componentes do Next.js</h1>
      <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus doloremque dolores id ipsam, nulla nesciunt possimus ipsum maiores sequi quos corporis! Numquam laudantium consectetur adipisci illo nostrum. Totam, explicabo.</p>
      
      {/* <Image
        src="/next.svg"
        alt="next logo"
        priority
        width={200}
        height={200}
      /> */}
      <Script
        src="https://rawgit.com/WeiChiaChang/Easter-egg/master/easter-eggs-collection.js"
      />
    </main>
  );
}
