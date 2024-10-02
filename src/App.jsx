import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import Plus from './assets/plus.svg'
import { PlusIcon } from './components/PlusIcon'
import { Empty } from './components/Empty'
import { ToDo } from './components/ToDo'
import { useEffect, useState } from 'react'

function App() {
  const [toDo, setToDo] = useState(['Peo', 'comer maracusaj', 'mandioca'])
  const [input, setInput] = useState('')
  const [countTask, setCountTask] = useState(0)
  const [erro, setErro] = useState('')

  function createNewToDo(e) {
    try {
      if(input.length > 200) throw 'Não é possível cadastrar tarefa tão grande' 
      if (input === '') throw 'Não pode cadastrar tarefa vazia'
      toDo.map(task => {
        if (task === input) throw 'Não pode cadastrar a mesma tarefa'
      })
      setToDo([...toDo, input])
      setInput('')
    } catch (error) {
      setErro(error)
    }

  }


  function deleteToDo(task) {
    let newToDoList = toDo.filter(content => {
      return content != task
    })
    setToDo(newToDoList)
  }

  useEffect(() => {
    if(erro != '')alert(erro)
    setInput('')
    setErro('')
  },[erro])

  return (
    <div>
      <Header />
      <div className={styles.toDoContainer}>
        <div className={styles.inputContainer}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Adicione uma nova tarefa' type="text" />
          <button onClick={createNewToDo}>
            <span>Criar</span>
            <PlusIcon color={'var(--gray-100)'} size={'1.25rem'} />
          </button>
        </div>
        <div className={styles.tasksContainer}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <span style={{ color: 'var(--blue)', fontWeight: 'bold' }}>Tarefas criadas</span>
              <span className={styles.counter}>{toDo.length}</span>
            </div>
            <div>
              <span style={{ color: 'var(--purple)', fontWeight: 'bold' }}>Concluídas</span>
              <span className={styles.counter}>{countTask > 0 ? `${countTask} de ${toDo.length}` : countTask}</span>
            </div>
          </div>

          {
            toDo.map(content => {
              return <ToDo key={content} content={content} onDeleteTask={deleteToDo} onSetCountTask={setCountTask} countTask={countTask} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
