import Botao from '../Botao'

export default function Formulario() {
  return (
    <form action="">
      <div>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que voce quer estudar?"
          required
        />
      </div>
      <div>
        <label htmlFor="">Tempo</label>
        <input
          type="time"
          step="1"
          name="tepo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Botao />
    </form>
  )
}
