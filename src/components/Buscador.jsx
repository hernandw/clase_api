


const Buscador = ({palabra, setPalabra}) => {
    
  return (
    <form>
          <label htmlFor="search">Buscar</label>
          <input type="text" placeholder="buscar..." value={palabra} onChange={(e) => setPalabra(e.target.value)}/>
    </form>
  )
}

export default Buscador
