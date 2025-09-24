// app/actions/posts.ts

'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// ===== POSTS =====

// Criar novo post
export async function createPost(formData: FormData) {
  try {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const author = formData.get('author') as string

    // Validação básica
    if (!title || !content || !author) {
      throw new Error('Todos os campos são obrigatórios')
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        author
      }
    })

    revalidatePath('/')
    return { success: true, post }
  } catch (error) {
    console.error('Erro ao criar post:', error)
    return { success: false, error: 'Erro ao criar post' }
  }
}

// Buscar todos os posts
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        comments: true
      }
    })
    return posts
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return []
  }
}

// Buscar post por ID
export async function getPostById(id: number) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        comments: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })
    return post
  } catch (error) {
    console.error('Erro ao buscar post:', error)
    return null
  }
}

// Atualizar post
export async function updatePost(id: number, formData: FormData) {
  try {
    const title = formData.get('title') as string
    const content = formData.get('content') as string

    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content
      }
    })

    revalidatePath('/')
    revalidatePath(`/posts/${id}`)
    return { success: true, post }
  } catch (error) {
    console.error('Erro ao atualizar post:', error)
    return { success: false, error: 'Erro ao atualizar post' }
  }
}

// Deletar post
export async function deletePost(id: number) {
  try {
    await prisma.post.delete({
      where: { id }
    })

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Erro ao deletar post:', error)
    return { success: false, error: 'Erro ao deletar post' }
  }
}

// ===== COMENTÁRIOS =====

// Criar comentário
export async function createComment(postId: number, formData: FormData) {
  try {
    const content = formData.get('content') as string
    const author = formData.get('author') as string

    if (!content || !author) {
      throw new Error('Todos os campos são obrigatórios')
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        author,
        postId
      }
    })

    revalidatePath(`/posts/${postId}`)
    return { success: true, comment }
  } catch (error) {
    console.error('Erro ao criar comentário:', error)
    return { success: false, error: 'Erro ao criar comentário' }
  }
}

// Deletar comentário
export async function deleteComment(id: number, postId: number) {
  try {
    await prisma.comment.delete({
      where: { id }
    })

    revalidatePath(`/posts/${postId}`)
    return { success: true }
  } catch (error) {
    console.error('Erro ao deletar comentário:', error)
    return { success: false, error: 'Erro ao deletar comentário' }
  }
}
