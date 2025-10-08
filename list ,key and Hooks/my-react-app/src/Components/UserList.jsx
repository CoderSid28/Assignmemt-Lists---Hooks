import React from 'react'

function UserList() {
    const users = [
        {id:1, name:"Siddharth Mishra"},
        {id:2, name:"Rahul Sharma"},
        {id:3, name:"Bhavesh Patil"},
        {id:4, name:"Raj Singh"},
        {id:5, name:"Jay Patel"},
    ]
  return (
    <div>
      <h2>User List</h2>
      <ul>
        { users.map((user)=>(
            <li key={user.id}>   {user.name} (ID: {user.id})
</li>
  )) }
      </ul>
    </div>
  )
}

export default UserList;
