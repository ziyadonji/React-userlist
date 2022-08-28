import React from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';


function App() {
  const [users,setUsers]=React.useState([{name:"John",age:30},{name:"Mary",age:31}]);
  const addUserhandler=(name, age)=>{
    console.log(name, age);
    console.log({name,age});
    setUsers(
       (prevUsers)=>{
          return [...prevUsers,{name,age}];
        }
    )
  }
  return (
    <div>
       <AddUser addUser={addUserhandler}></AddUser>
       <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
