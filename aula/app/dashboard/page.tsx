import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  const user = JSON.parse();

  if (!userCookie) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Boas vindas, {user.nome}</h1>
    </div>
  )
}
