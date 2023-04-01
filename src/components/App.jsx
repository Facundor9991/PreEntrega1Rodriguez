import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="cuerpo1">
    <h1 className='txtcuerpo'>DutyShop</h1>
    <div className='enlaces'>
    
      <button>Alfombras</button> 
             <button>Insumoss</button> 
             <button>Maquinariaa</button> 
             <input type="text" placeholder='Buscar' />      
    </div>
<NavBar />
<ItemListContainer greeting={"Ingresar"} /> 
</div>
  );
}

export default App;
