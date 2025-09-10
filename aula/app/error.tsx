"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Algo deu errado aqui</h2>
      <p>{JSON.stringify(error.message)}</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}
