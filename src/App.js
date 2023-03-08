import {useState} from 'react'
import './style.css'
function App(){
  const [titulo, setTitulo] = useState()
  const [descricao, setDescricao] = useState()
  //const [data, setData] = useState()
  const [lista, setLista] = useState([])
  
  function HandleAddItem(){
    const item = {'titulo': titulo, 'descricao': descricao, 'data': new Date().toISOString()}
    setLista([item, ...lista]) 
  }
  return(
    <div>
      <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder='Título'></input>
      <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder='Descrição'></input>
      <button onClick={HandleAddItem}>Adicionar</button>
      <ul>
        {lista.map(t => (
          <li><div>
          <h1>{t.titulo}</h1>
          <p>{t.descricao}</p>
          <p>{t.data}</p>
      </div></li>
        ))}
      </ul>
    </div>
  )
}
export default App;