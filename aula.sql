CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email, password) VALUES 
  ('xablau', 'xablau@email.com', 'xablau123');

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  author_id INTEGER NOT NULL,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO users (username, email, password) VALUES 
  ('maria_tech', 'maria@email.com', 'senha456'),
  ('pedro_code', 'pedro@email.com', 'senha789'),
  ('ana_silva', 'ana@email.com', 'senha321');

INSERT INTO posts (title, content, author_id) VALUES
    ('Meu primeiro post', 'Olá mundo! Estou aprendendo SQL e é incrível!', 1),
    ('Dicas de SQL', 'Hoje aprendi sobre JOINs e relacionamentos...', 1);

INSERT INTO posts (title, content, author_id) VALUES
    ('Introdução ao Next.js', 'Next.js é um framework React poderoso...', 2),
    ('Deploy na Vercel', 'Fazer deploy na Vercel é super simples!', 2),
    ('Git para iniciantes', 'Comandos essenciais do Git que você precisa saber...', 3);
