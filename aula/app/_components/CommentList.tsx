import { deleteComment } from '@/app/actions/posts'

interface Comment {
  id: number
  content: string
  author: string
  createdAt: Date
}

interface CommentListProps {
  comments: Comment[]
  postId: number
}

export default function CommentList({ comments, postId }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <p className="text-gray-500 text-center py-4">
        Nenhum comentário ainda. Seja o primeiro a comentar!
      </p>
    )
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="border-l-2 border-gray-200 pl-4 py-2">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">{comment.author}</span>
                <span className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString('pt-BR')}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>

            <form action={deleteComment.bind(null, comment.id, postId)}>
              <button
                type="submit"
                className="text-red-500 hover:text-red-700 text-sm px-2 py-1"
                title="Deletar comentário"
              >
                Excluir
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  )
}