export async function fetchCatFacts(limit = 10) {
  const res = await fetch(
    `https://catfact.ninja/facts?limit=${limit}`,
    { next: { revalidate: 120 } } // 2 min
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  return data.data as { id: string; fact: string }[];
}