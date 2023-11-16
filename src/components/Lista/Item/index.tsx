import style from './Item.module.scss'

export default function Item(props: any) {
  const { tarefa, tempo } = props
  return (
    <li className={style.item}>
      <h2>{tarefa}</h2>
      <span>{tempo}</span>
    </li>
  )
}
