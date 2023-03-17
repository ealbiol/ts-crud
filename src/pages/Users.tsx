import React, { useState, useEffect } from 'react';
import { getUsers } from '../api/user';
import { User } from '../types/User';

export default function Users() {

  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    (async () => {
        try {
            const response = await getUsers();
            const users: Array<User> = response;
            console.log("users", response);
            setUsers(users)
        } catch (error) {

        }
    })()
}, [])

  return (
    <div>Users</div>
  )
}
