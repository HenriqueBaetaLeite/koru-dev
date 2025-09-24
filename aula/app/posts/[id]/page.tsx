// app/posts/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostById } from "@/app/actions/posts";
import CommentForm from "../../_components/CommentForm";
import DeletePostButton from "../../_components/DeletePostButton";
import CommentList from "../..//_components/CommentList";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const postId = parseInt(id);
  const post = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navegação */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"
        >
          ← Voltar para posts
        </Link>

        {/* Post */}
        <article className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
            <DeletePostButton postId={post.id} />
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <span>Por: {post.author}</span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString("pt-BR")}</span>
            {post.updatedAt > post.createdAt && (
              <>
                <span>•</span>
                <span>
                  Atualizado:{" "}
                  {new Date(post.updatedAt).toLocaleDateString("pt-BR")}
                </span>
              </>
            )}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
          </div>
        </article>

        {/* Seção de comentários */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Comentários ({post.comments.length})
          </h2>

          {/* Formulário de comentário */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Adicionar Comentário</h3>
            <CommentForm postId={post.id} />
          </div>

          {/* Lista de comentários */}
          <CommentList comments={post.comments} postId={post.id} />
        </div>
      </div>
    </div>
  );
}
