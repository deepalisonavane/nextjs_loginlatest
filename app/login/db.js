// // import { useEffect, useState } from 'react';
// import pool from '../db';

// const IndexPage = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     pool.connect().then(() => {
//       pool.request().query('SELECT username, password FROM users').then(result => {
//         setUserData(result.recordset);
//       });
//     });

//     return () => {
//       pool.close();
//     };
//   }, []);

//   return (
//     <div>
//       {userData && userData.map((user, index) => (
//         <div key={index}>
//           <p>Username: {user.username}</p>
//           <p>Password: {user.password}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default IndexPage;

import sql from 'mssql'
console.log("jjjjjjjjjjjjjj")
// import mssql from 'mssql'
// const config = {
//   server: 'localhost',
//   database: 'cucms_bsnl',
//   user: 'sa',
//   password: 'pass@123',
//   options: {
//     encrypt: true
//   }
// }

// const pool = new sql.ConnectionPool(config)


const connection = async () => {
    try {
        // make
        console.log('hi') 
        await sql.connect('Server=192.168.100.75,1433;Database=cucms_bsnl;User Id=sa;Password=pass@123;Encrypt=true')
        const result = await sql.query`select * from user`
        console.dir(result)
    } catch (err) {
       console.log(`error${err}`)
    }
}
export default connection