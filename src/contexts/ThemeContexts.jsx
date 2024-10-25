import { useState, createContext } from "react";

// there are 2 ways to create a context
// creating the context and
// using or passing the context
// the first is to create a new context and then create a new context with the same name and properties as the old context and   the new context will be created with the same name and properties as the old context    
export const PageTheme = createContext({
    theme: "light",
    toggleTheme: ()=>{},
}) 

//provider functions
export const ThemeContext = ({children})=>{
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light"? "dark" : "light"))
    }

    return (
        <PageTheme.Provider value={{theme, toggleTheme }}>
            {children}
        </PageTheme.Provider>
    )
}

// export default PageTheme,{ ThemeContext } 