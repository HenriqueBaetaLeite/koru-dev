export default function TaskInput({ handleSubmit, inputText, handleInputText }) {
  return (
    <form onSubmit={handleSubmit}>
       <input type='text' value={inputText} onChange={handleInputText} />
        <div>
          <button type='submit'>Adicionar tarefa</button>
        </div>
    </form>
  );
}
