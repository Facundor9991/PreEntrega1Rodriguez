export const Item = (item) => {
  return(

<div className="card" style={{ width: '18rem' }}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">Marca: {item.marca}</p>
                <p className="card-text">$Valor: {item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <button className="btn btn-dark">Ver detalles</button>
                <button className="btn btn-dark">Quiero!</button>

            </div>
        </div>

  )
}

