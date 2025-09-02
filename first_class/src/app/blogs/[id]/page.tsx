import Link from 'next/link';
import { blogs, blog } from '../../data/blogs';

interface BlogPageProps {
  params: { id: string };
}

export default async function BlogPage({ params }: BlogPageProps) {  
  const { id } = await params;

  const blog = blogs.find((b: blog) => b.id === Number(id));

  if (!blog) {
    return <h1 className="p-6 text-red-600">Blog não encontrado</h1>;
  }

  return (
    <main className="p-6 md:w-1/2">
      <h1 className="text-3xl font-bold mb-4">{blog.titulo}</h1>
      <p className="text-gray-400 mb-6">Autor: {blog.autor}</p>
      <p className="leading-relaxed">{blog.conteudo}</p>
      <Link className="text-blue-500 hover:underline m-4" href={'/blogs'}>Voltar</Link>
    </main>
  );
}
