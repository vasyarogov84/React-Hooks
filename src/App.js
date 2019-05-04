import React, { useState, useContext } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Auth from "./components/Auth";
import AuthContext from './auth-context';

const App = () => {
  const [page, setPage ] = useState('auth');
  const [status, setStatus] = useState(false);
  const auth = useContext(AuthContext);
  const changePage = (pageName) => {
    setPage(pageName);
  } 

  const login = () => {
    setStatus(!status);
  }

  return (
    <div>
      <AuthContext.Provider value={{...auth, login, status}}>
        <Header 
          onLoadTodos={changePage.bind(this,'todos')}
          onLoadAuth={changePage.bind(this,'auth')}
        />
        {page === 'auth' ? <Auth /> : <Todo />}
      </AuthContext.Provider>
    </div>
  );
};

export default App;


















































































// const App = () => {
//   const [page, setPage] = useState("auth");
//   const [status, changeStatus] = useState(false);

//   const switchPage = pageName => {
//     setPage(pageName);
//   };

//   const login = () => {
//     changeStatus(!status);
//   };

//   return (
//     <div className="App">
//       <AuthContext.Provider value={{
//         status, login
//       }}>
//         <Header
//           onLoadTodos={switchPage.bind(this, "todos")}
//           onLoadAuth={switchPage.bind(this, "auth")}
//         />
//         {page === "auth" ? <Auth /> : <Todo />}
//       </AuthContext.Provider>
//     </div>
//   );
// };
