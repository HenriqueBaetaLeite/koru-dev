import Link from "next/link";
import { blogs, blog } from '../data/blogs';

export default async function BlogsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Lista de Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog: blog) => (
          <li key={blog.id} className="border p-4 rounded-lg shadow-sm md:w-1/2">
            <h2 className="text-2xl font-semibold">{blog.titulo}</h2>
            <p className="text-gray-400">Autor: {blog.autor}</p>
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-500 hover:underline"
            >
              Ler mais →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
