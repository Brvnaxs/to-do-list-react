import {useState} from 'react'
import {BiSun} from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import {BiUser} from "react-icons/bi";
import {BiCheckSquare} from "react-icons/bi";
import {CiStar} from "react-icons/ci";
import {CiRepeat} from "react-icons/ci";
import { TiHeartOutline} from "react-icons/ti";
import './main.css'
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
        <p>{new Date().toDateString()}</p>
      </header>
      <div className="add-task-container">
        <h1> Bem-vindo! <TiHeartOutline/></h1>
        <h2>Comece a agendar suas tarefas diárias.</h2>
        <p><BiSun className='icon'/>My Day</p>
        <p><CiStar className='icon'/>Important</p>
        <p><BiCalendarAlt className='icon'/>Planned</p>
        <p><CiRepeat className='icon'/>All</p>
        <p><BiCheckCircle className='icon'/>Completed</p>
        <p><BiUser className='icon'/>Assigned to me</p>
        <p><BiCheckSquare className='icon'/>Tasks</p>
      </div>
        <section className='tasks-timeline'>
          <div className='task'>
            <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder='Digite aqui...'></input>
            <button type="button" onClick={HandleAddItem}>Adicionar</button>
          </div>
              {lista.map(t => (
                  <div className="task">
                    <input type='checkbox' className='check'></input>
                    <p>{t.descricao}</p>
                    <span>{t.data}</span>
                  </div>
                ))}
        </section>  
    </div>
  )
}
export default App;