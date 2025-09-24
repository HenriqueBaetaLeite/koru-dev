'use client'

import { deletePost } from '@/app/actions/posts'
import { useRouter } from 'next/navigation'

interface DeletePostButtonProps {
  postId: number
}

export default function DeletePostButton({ postId }: DeletePostButtonProps) {
  const router = useRouter()

  async function handleDelete() {
    if (confirm('Tem certeza que deseja deletar este post?')) {
      const result = await deletePost(postId)
      if (result.success) {
        router.push('/')
      }
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 text-sm px-3 py-1 border border-red-300 rounded"
    >
      Deletar Post
    </button>
  )
}