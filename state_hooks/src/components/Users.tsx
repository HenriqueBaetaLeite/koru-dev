import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=2")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) return <p>Carrengado usuários ...</p>

  return (
    <div>      
      {users.map((user) => (
        <li key={user.id}>
          <span>{user.email}</span>
        </li>
      ))}

    </div>
  )
}

export default Users;
