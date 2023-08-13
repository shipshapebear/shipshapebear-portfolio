import React, { useContext, useState, useEffect, createContext } from "react"
import useWindowSize from "../utils/WindowSize"


const defaultValues = {
    mobileMenuActive: false,
    setMobileMenuActive: () => { }
}

type GlobalContextType = { mobileMenuActive?: boolean, setMobileMenuActive: any}

const GlobalContext = createContext<GlobalContextType>(defaultValues)
const isBrowser = typeof window !== undefined

const GlobalProvider = ({ children }: any) => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const toggleMenu = () => {
        // get the body element tag
        let body = document.getElementsByTagName("body")[0];

        // apply the styles based on menu state
        if (mobileMenuActive) {
            body.style.overflow = "hidden";
        }
        else {
            body.style.overflow = "auto"

        }
    }
    const { width } = useWindowSize()

    useEffect(() => {
        return setMobileMenuActive(() => {
            return width < 768 && mobileMenuActive === true ? true : false
        })
    }, [width])

    useEffect(() => {
        toggleMenu()
    }, [mobileMenuActive])

    return (
        <GlobalContext.Provider
            value={{
                ...defaultValues,
                mobileMenuActive,
                setMobileMenuActive
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (context === undefined) {
        throw new Error("useStore must be used within StoreContext")
    }

    return context
}

export default GlobalProvider
