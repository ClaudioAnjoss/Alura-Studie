export default function Lista() {
  const tarefas = [
    {
      tarefa: 'React',
      tempo: '02:00:00',
    },
    {
      tarefa: 'javascript',
      tempo: '01:00:00',
    },
    {
      tarefa: 'TypeScript',
      tempo: '03:00:00',
    },
  ]
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(({ tarefa, tempo }, index) => (
          <li key={index}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
