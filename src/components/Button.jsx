function Button({operator, fn}) {

  return (
    <button
        type='button'
        className='px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-600'
        onClick={fn}
    >{operator}</button>
  )
}

export default Button