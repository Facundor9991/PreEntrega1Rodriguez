import{ useState, createContext, useContext} from "react";


const DarkModeContext = createContext () //creacion del contexto


export const useDarkModeContext = () => useContext(DarkModeContext)


export const DarkModeProvider = (props) => { //forma de proveeer el contexto


     const [darkMode, setDarkMode] = useState(false)

    //FUnciones para la modificacion

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)


        //agregar clases de css por temas de boostwatch

        if(!darkMode) {
            document.body.classList.add('darkMode')
        } else {
            document.body.classList.remove('darkMode')
        }
    }
        return(
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
          {props.children}
            </DarkModeContext.Provider>
        )
    
}