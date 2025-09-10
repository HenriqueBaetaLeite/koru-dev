import { notFound } from 'next/navigation';
import { getPost } from '../../_lib/data';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const id = await params.slug;
  const post = await getPost(id);

  if (!post) {
    notFound(); // Renderiza a página not-found.tsx
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
