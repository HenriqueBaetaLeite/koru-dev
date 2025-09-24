// app/components/PostForm.tsx

'use client'

import { createPost } from '@/app/actions/posts'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        w-full px-4 py-2 bg-blue-500 text-white rounded-lg
        hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
        disabled:bg-gray-300 disabled:cursor-not-allowed
      "
    >
      {pending ? 'Criando...' : 'Criar Post'}
    </button>
  )
}

export default function PostForm() {
  return (
    <form action={createPost} className="space-y-4 text-black">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="
            w-full px-3 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          "
          placeholder="Digite o título do post"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Conteúdo
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={4}
          className="
            w-full px-3 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          "
          placeholder="Escreva o conteúdo do seu post..."
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          Autor
        </label>
        <input
          type="text"
          id="author"
          name="author"
          required
          className="
            w-full px-3 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          "
          placeholder="Seu nome"
        />
      </div>

      <SubmitButton />
    </form>
  )
}
