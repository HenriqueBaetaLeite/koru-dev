// lib/users.ts
import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data.json");

export interface User {
  nome: string;
  email: string;
  senha: string;
}

// Lê todos os usuários
export function getUsers(): User[] {
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw);
}

// Salva todos os usuários
export function saveUsers(users: User[]) {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

// Adiciona um novo usuário
export function addUser(user: User) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

// Procura usuário por email
export function findUserByEmail(email: string): User | undefined {
  const users = getUsers();
  return users.find((user) => user.email === email);
}

// Procura usuário por email e senha
export function findUserByCredentials(email: string, senha: string): User | undefined {
  const users = getUsers();
  return users.find((user) => user.email === email && user.senha === senha);
}
