import css from "./SearchBox.module.css"

export default function SearchBox({ value, onUpdate }) {
  const handleChange = (event) => {
    onUpdate(event.target.value);
  };

  return (
    <>
      <label className={css.label}>Find contact by name</label>
      <input type="text" className={css.input} value={value} onChange={handleChange}/>
    </>
  )
}

