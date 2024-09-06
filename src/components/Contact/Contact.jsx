import css from "./Contact.module.css"


export default function Contact({id, name, number, onDelete}) {

  return (
    <div className={css.cart}>
      <div>
        <p className={css.text}>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.button} onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}
