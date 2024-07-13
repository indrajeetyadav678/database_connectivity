// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const User_list = () => {
//   const [val, setVal] = useState([]);


//   const load = () => {
//     const url = "http://127.0.0.1:8000/login/";
//     axios.get(url)
//       .then(res => {
//         setVal(res.data);
//         console.log("33333333333333333333333", res.data)
//       })
//   };
//   console.log("222222222222222222", val)
//   useEffect(() => {
//     load();
//   }, []);

//   const ans = val.map((user) => {
//     console.log("999999999999999999",user)
//     return (
//       <>
//         <tr>
//           <td>{user.name}</td>
//           <td>{user.user_id}</td>
//           <td>{user.password}</td>
//         </tr>
//       </>
//     )
//   });

//   return (
//     <>
//       <table>
//         <thead id='user_datahead'>
//           <tr>
//             <th>Name</th>
//             <th>User ID</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody id='user_databody'>
//           {ans}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default User_list;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User_list = () => {
    const [val, setVal] = useState([]);

    useEffect(() => {
        const load = () => {
            const url = "http://127.0.0.1:8000/login/";
            axios.get(url).then(res => {
                setVal(res.data);
            });
        };

        const ws = new WebSocket('ws://127.0.0.1:8000/ws/chat/');
        ws.onmessage = (event) => {
            const newUser = JSON.parse(event.data);
            setVal(prevVal => [...prevVal, newUser]);
        };

        load();
    }, []);

    const ans = val.map((user) => (
        <tr key={user.user_id}>
            <td>{user.name}</td>
            <td>{user.user_id}</td>
            <td>{user.password}</td>
        </tr>
    ));

    return (
        <table>
            <thead id='user_datahead'>
                <tr>
                    <th>Name</th>
                    <th>User ID</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody id='user_databody'>
                {ans}
            </tbody>
        </table>
    );
};

export default User_list;
