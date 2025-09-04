import { blogs, blog } from "../../data/blogs";
import Link from "next/link";

interface BlogPageProps {
  params: { id: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const { id } = params;
  const blog = blogs.find((b: blog) => b.id === Number(id));

  if (!blog) {
    return <h1>Blog não existente.</h1>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{blog?.titulo}</h1>
      <p className="text-gray-400 mb-6">{blog?.autor}</p>
      <p className="leading-relaxed">{blog?.conteudo}</p>
      <Link href={"/blogs"}
        className="text-blue-500 hover:underline m-4">
        Voltar
      </Link>
    </main>
  );
}
