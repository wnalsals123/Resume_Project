import { createContext, useReducer } from 'react';

const initialState = {
  users: [
    { key: 0, id: 0, name: "이름", value: "none" },
    { key: 1, id: 0, name: "영문", value: "none" },
    { key: 2, id: 0, name: "성별", value: "none" },
    { key: 3, id: 0, name: "생년월일", value: "none" },
    { key: 4, id: 0, name: "연락처", value: "none" },
    { key: 5, id: 0, name: "이메일", value: "none" },
    { key: 6, id: 0, name: "주소", value: "none" },
    { key: 7, id: 0, name: "사진", value: "none" }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, value: "건어물"} : user
        )
      };
    default:
      return state;
  }
}

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  // let userValue = [
  //   { key: 0, id: 0, name: "이름", value: "none" },
  //   { key: 1, id: 0, name: "영문", value: "none" },
  //   { key: 2, id: 0, name: "성별", value: "none" },
  //   { key: 3, id: 0, name: "생년월일", value: "none" },
  //   { key: 4, id: 0, name: "연락처", value: "none" },
  //   { key: 5, id: 0, name: "이메일", value: "none" },
  //   { key: 6, id: 0, name: "주소", value: "none" },
  //   { key: 7, id: 0, name: "사진", value: "none" }
  // ]

  // const updateUserValue = (data) => {
  //   userValue = data
  //   console.log(userValue)
  // }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{users: state.users, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }