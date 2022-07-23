import { createContext } from 'react';

const UserContext = createContext({
  userValue: [],
  updateUserValue: () => {}
})

const UserProvider = ({ children }) => {
  let userValue = [
    { key: 0, id: 0, name: "이름", value: "none" },
    { key: 1, id: 0, name: "영문", value: "none" },
    { key: 2, id: 0, name: "성별", value: "none" },
    { key: 3, id: 0, name: "생년월일", value: "none" },
    { key: 4, id: 0, name: "연락처", value: "none" },
    { key: 5, id: 0, name: "이메일", value: "none" },
    { key: 6, id: 0, name: "주소", value: "none" },
    { key: 7, id: 0, name: "사진", value: "none" }
  ]

  const updateUserValue = (data) => {
    userValue = data
    console.log(userValue)
  }

  return (
      <UserContext.Provider value={{userValue, updateUserValue}}>
        {children}
      </UserContext.Provider>
  )
}

export { UserContext, UserProvider }