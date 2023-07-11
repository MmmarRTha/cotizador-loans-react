function Button({operator, fn, margin}) {
    const buttonStyle = 'flex justify-center w-10 h-10 text-2xl font-bold text-white bg-violet-500 rounded-full hover:bg-violet-600'
  return (
    <button
        type='button'
        className={ margin === 'ml-4' ? (buttonStyle + margin) : (buttonStyle + margin) }
        onClick={fn}
    >{operator}</button>
  )
}

export default Button