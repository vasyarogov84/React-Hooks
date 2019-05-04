import React, { useContext, useState } from 'react';
import AuthContext from '../auth-context';

const Header = (props) => {
    const [name, changeName] = useState('Viktor');
    const auth = useContext(AuthContext);

    const changePersonName = () => {
        if (name === 'Viktor') {
            changeName('Iryna');
        } else {
            changeName('Viktor')
        }
    }
    return (
        <div>
            <button className="todos"
            disabled={!auth.status}
            onClick={props.onLoadTodos}
            >Todos</button>
            |
            <button
            onClick={props.onLoadAuth}
            >Auth</button>
            |
            <button 
              className="test"
              onClick={changePersonName}
              >
                {name === 'Viktor' ? 'Viktor' : 'Iryna'}
            </button>
        </div>
    );
}

export default Header;

























































// import React, { useContext } from 'react';
// import AuthContext from "../auth-context";

// const Header = (props) => {
//     const auth = useContext(AuthContext);
//     return (
//         <div>
//             {auth.status ? <button
//               onClick={props.onLoadTodos}
//             >Todos</button> : ''} | <button
//               onClick={props.onLoadAuth}
//             >Auth</button>
//             <hr />
//         </div>
//     );
// }

// export default Header;