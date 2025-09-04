import { blogs } from "../data/blogs";
import Link from "next/link";

export default function Blogs() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lista de Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">{blog.titulo}</h2>
            <p className="text-gray-400 ">{blog.autor}</p>
            <Link
              className="text-blue-500 hover:underline"
              href={`/blogs/${blog.id}`}
            >
              Ler mais →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
