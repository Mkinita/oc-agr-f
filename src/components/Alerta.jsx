const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? ' from-red-400 to-red-600': 
    'from-lime-700 to-lime-600' }
    bg-gradient-to-r text-center p-3 rounded-xl uppercase
     text-white text-sm mb-10 `}>
        {alerta.msg}
    </div>
  )
}

export default Alerta