// app/page.tsx

import Link from 'next/link'
import { getPosts } from './actions/posts'
import PostForm from './_components/PostForm'

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📝 Meu Blog com Prisma
          </h1>
          <p className="text-gray-600">
            Criando posts com Next.js e Prisma ORM
          </p>
        </div>

        {/* Formulário para criar post */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Criar Novo Post</h2>
          <PostForm />
        </div>

        {/* Lista de posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Posts Recentes</h2>

          {posts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500">Nenhum post encontrado</p>
              <p className="text-sm text-gray-400 mt-1">
                Crie seu primeiro post acima!
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Ver detalhes →
                  </Link>
                </div>

                <p className="text-gray-600 mb-3 line-clamp-2">
                  {post.content}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Por: {post.author}</span>
                  <div className="flex gap-4">
                    <span>{post.comments.length} comentários</span>
                    <span>
                      {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
