import style from './Botao.module.scss'

export default function Botao(props: any) {
  return <button className={style.botao}>{props.children}</button>
}
