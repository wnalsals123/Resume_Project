const { createContext, useState } = require("react");

const AddContext = createContext(null)

const AddProvider = ({children}) => {
  const [addEdu, setAddEdu] = useState([])
  const [addCar, setAddCar] = useState([])
  const [addCer, setAddCer] = useState([])
  const [addLan, setAddLan] = useState([])
  const [addInter, setaddInter] = useState([])

  return(
    <AddContext.Provider value={{
      addEdu, setAddEdu,
      addCar, setAddCar,
      addCer, setAddCer,
      addLan, setAddLan,
      addInter, setaddInter
    }}>
      {children}
    </AddContext.Provider>
  )
}

export { AddContext, AddProvider }