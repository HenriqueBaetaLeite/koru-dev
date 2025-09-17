import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logoutAction } from "./logoutActions";

export default async function Dashboard() {
  // Lê cookies no server
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    // Se não tiver cookie, redireciona pro login
    redirect("/login");
  }

  // Pega dados do usuário (o cookie vem como JSON em string)
  const user = JSON.parse(userCookie.value);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-600">
      <h1 className="text-2xl font-bold">Boas vindas, {user.nome} 👋</h1>
      <p className="text-gray-400">Email: {user.email}</p>

      <form action={logoutAction}>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
