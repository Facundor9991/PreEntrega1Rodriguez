import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = (item) => {
  return (
    <div className="row g-0">
        <div className="col-md-4">
            <img src={item.img} alt={`imagen de ${item.nombre}`} className="img-fluid rounded-start"/>
        </div>
<div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">modelo: {item.modelo}</p>
        <p className="card-text">marca {item.marca}</p>
        <p className="card-text">precio {item.precio}</p>
        <p className="card-text">stock {item.stock}</p>
        <ItemCount ValInicial={1} min={1} max={item.stock} />
        <button className="btn btn-secondary">agregar al carrito</button>
    </div>
</div>
    </div>
  )
}