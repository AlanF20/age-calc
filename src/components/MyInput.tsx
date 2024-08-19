export function MyInput({ labelText, name, placeholder }: MyInput) {
  return (
    <label className="flex flex-col w-[30%]" htmlFor={name}>
      <span className="font-poppins font-bold tracking-[3px] text-[12px] text-[color:var(--Smokey-grey)] pb-1">{labelText}</span>
      <input placeholder={placeholder} type="number" className="border rounded-lg text-lg p-1 font-poppins font-extrabold" name={name} />
    </label>
  )
}