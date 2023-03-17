import React from 'react'
import style from "@/styles/component.module.css"

export default function InputField({label, value, setValue}) {
  return (
    <div className={style.inputGroup}>
      <label>{label}</label>
      <input value={value} onChange={setValue} type={"number"} />
    </div>
  )
}
