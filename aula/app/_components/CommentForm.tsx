'use client'

import { createComment } from '@/app/actions/posts'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        px-4 py-2 bg-green-500 text-white rounded-lg
        hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500
        disabled:bg-gray-300 disabled:cursor-not-allowed
      "
    >
      {pending ? 'Enviando...' : 'Enviar Comentário'}
    </button>
  )
}

interface CommentFormProps {
  postId: number
}

export default function CommentForm({ postId }: CommentFormProps) {
  // Criar uma action com o postId já vinculado
  const createCommentWithPostId = createComment.bind(null, postId)

  return (
    <form action={createCommentWithPostId} className="space-y-4 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Seu Nome
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="
              w-full px-3 py-2 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
            "
            placeholder="Seu nome"
          />
        </div>
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Comentário
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={3}
          className="
            w-full px-3 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
          "
          placeholder="Escreva seu comentário..."
        />
      </div>

      <SubmitButton />
    </form>
  )
}
