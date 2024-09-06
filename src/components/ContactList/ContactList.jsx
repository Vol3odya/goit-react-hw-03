import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContactList({data, onDelete}) {
  return (
    <ul className={css.main}>
      {data.map(value => {
        return (
          <li key={value.id} className={css.list}>
            <Contact
              id={value.id}
              name={value.name}
              number={value.number}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  )
}
