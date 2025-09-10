'use client';

export default function Error({ error, reset } : 
  {
    error: Error,
    reset: () => void;
  }
) {
  return (
    <div>
      <h2 className="text-red-500 font-bold">Deu algo errado aqui</h2>
      {JSON.stringify(error.message)}
      <button className="border bg-amber-100 text-black p-2 rounded-2xl cursor-crosshair" onClick={() => reset()}>Tente novamente</button>
    </div>
  )
}