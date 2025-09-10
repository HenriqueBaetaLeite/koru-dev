export const posts = [
  { id: '1', slug: 'meu-primeiro-post', title: 'Meu Primeiro Post', content: 'Conteúdo do primeiro post.' },
  { id: '2', slug: 'outro-post', title: 'Outro Post Interessante', content: 'Conteúdo do segundo post.' },
];

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
};

export function getPosts() {
  return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return new Promise((resolve) => setTimeout(() => {
    const post = posts.find(p => p.slug === slug);
    resolve(post);
  } , 2000))
}

export function getResumo() {
  return { totalPosts: posts.length, atualizadoEm: new Date().toLocaleString('pt-BR') };
}