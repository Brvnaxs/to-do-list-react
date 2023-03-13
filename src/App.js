import {useState} from 'react'
import './style.css'
function App(){
  const [titulo, setTitulo] = useState()
  const [descricao, setDescricao] = useState()
  //const [data, setData] = useState()
  const [lista, setLista] = useState([])
  
  function HandleAddItem(){
    const item = {'titulo': titulo, 'descricao': descricao, 'data': new Date().toLocaleDateString()}
    setLista([item, ...lista])
    
  }
  return(
    <div className="main-content">
      <header>
        <section className="text">
        <h1>Bem-vindo!</h1>
        <h2>Comece a agendar suas tarefas diárias.</h2>
        </section>
        <p class="data-header">{new Date().toDateString()}</p>
      </header>
      <section className="main-section">
      <div className="add-task-container">
        <h2>Criar nova tarefa:</h2>
      <div className="add-task">
      <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder='Título'></input>
      <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder='Descrição'></input>
      <button type="button" onClick={HandleAddItem}>Adicionar</button>
      </div>
      </div>
      <section className="feed">
        {lista.map(t => (
          <div className="tarefa">
          <h1>{t.titulo}</h1>
          <h2>{t.descricao}</h2>
          <p>{t.data}</p>
      </div>
        ))}
      </section>
      </section>
    </div>
  )
}
export default App;