import styles from './atoms.module.scss'
import useValidation from '@/app/hooks/useValidations'

export default function Input ({ label, placeholder = '', id, name, min = 0, max = 20, required = true, ...props }) {
  const { handleChange, value } = useValidation()
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${styles.input} ${styles.input__text}`}
        id={id}
        maxLength={max}
        minLength={min}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        value={value}
        {...props}
      />
    </>
  )
}
