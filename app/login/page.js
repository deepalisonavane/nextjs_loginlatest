

import React from 'react'
require('./db')
import sql from 'mssql'




// function UsersList({ users }) {
//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   )
// }

// function App() {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     async function fetchUsers() {
//       const request = pool.request()

//       const result = await request.query('SELECT * FROM users')

//       setUsers(result.recordset)
//     }

//     fetchUsers()
//   }, [])

//   return (
//     <div>
//       <h1>Users</h1>
//       <UsersList users={users} />
//     </div>
//   )
// }

// function UsersList({ users }) {
//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   )
// }


function App() {
  const [users, setUsers] = useState(false)
  const fetchDataApi = async()=>{
    try {
      setUsers(true);
      const response = await fetch("/api",{
        headers:{
          Accept:"application/json",
          method:"GET",

        }
      }) ;
      if(response){
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error)
    }finally{
      setUsers(false)
    }
  }
}
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const request = pool.request()

  //     const result = await request.query('SELECT username,password FROM users')

  //     setUsers(result.recordset)
  //   }

  //   fetchUsers()
  // }, [])

//   return (
//     <div>
//       <h1>Users</h1>
//       <UsersList users={users} />
//     </div>
//   )
// }

const sqlConfig = {
  user: 'sa',
  password: 'pass@123',
  database: 'cucms_bsnl',
  server: '192.168.100.75',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}
const page =  async () => {
 
const connection = async () => {
  try {
    
      console.log('hi') 
      await sql.connect(sqlConfig)
      
      // const user = await sql.query`select userid  from users `
      // const password = await sql.query`select password from users `

     
      // console.log(user)
  } catch (err) {
     console.log(`error${err}`)
  }
}
  
  return (
    <div className="login-page">
    <div className="form">
      <div className="login">
        <div className="login-header">
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login.</p>
        </div>
      </div>
      <form className="login-form"  >
        <input type="text" placeholder="username" name= "user"/>
        <input type="password" placeholder="password" name="password"/>
        <button onClick={(e)=>fetchDataApi()}  >login</button>
        
      </form>
    </div>
  </div>
      
  )
}

export default page