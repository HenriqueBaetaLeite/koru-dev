import { getPost } from '../../_lib/data';

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.id);
  return (
    <main>
      <h2>Ola Post</h2>
      <p>{params}</p>
      <p>{post?.title}</p>
      <p>{post?.content}</p>
    </main>
  )
}
