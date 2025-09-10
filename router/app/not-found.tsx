import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#dc3545' }}>404 - Página Não Encontrada</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Não foi possível encontrar o recurso solicitado.</p>
      <Link href="/" style={{ padding: '0.8rem 1.5rem', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Voltar para o Início
      </Link>
    </div>
  );
}