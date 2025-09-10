import Link from 'next/link';

const linkStyle = "hover:text-amber-300 transition-colors duration-200";

const Header = () => (
  <header className="bg-stone-500 text-black font-bold p-4 shadow-md">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-2xl md:text-3xl">Meu Aplicativo Incrível</h1>
      <nav className="mt-2 md:mt-0 space-x-4">
        <Link
          href="/"
          className={linkStyle}
        >
          Início
        </Link>
        <Link
          href="/dashboard"
          className={linkStyle}
        >
          Painel
        </Link>
        <Link
          href="/blog"
          className={linkStyle}
        >
          Blog
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;