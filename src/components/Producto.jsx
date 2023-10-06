

import { useState, useEffect } from 'react';
import Card from './card';


const Producto = ({palabra}) => {
  const [datos, setDatos] = useState()
  const urlApi = 'https://fakestoreapi.com/products'


 

 /*  useEffect(() => {
     fetch(urlApi)
       .then((res) => res.json())
       .then((p) => {
         setDatos(p);
       });
  }, []) */


  useEffect(() => {
    getData()
  })

  const getData = async () => {
    const res = await fetch(urlApi)
    const data = await res.json()
    setDatos(data)
  }
  

  let resultado = ''

  if (!palabra) {
    resultado = datos
  } else {
    resultado = datos.filter((item) => {
      return item.title.toLowerCase().includes(palabra.toLowerCase())
    })
  }


  return (
    <div>
      <div>
        {resultado && resultado.length > 0 ? (
          resultado?.map((item) => {
            return <Card key={item.id} item={item} />
          })
        ): (
          <h1>No hay datos que coincidan con la busqueda</h1>
        )}
      </div>
    </div>
  )
}

export default Producto
