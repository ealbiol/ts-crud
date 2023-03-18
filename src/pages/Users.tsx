import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../api/user';
import { User } from '../types/User';
import { Confirm } from "semantic-ui-react";
import BasicModal from '../components/BasicModal';
import UserForm from '../components/UserForm';

export default function Users() {
  const initUser: User = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: ""
  }
  const logoUrl = "https://source.unsplash.com/random/?person"

  const [users, setUsers] = useState<Array<User>>([]);

  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [reload, setReload] = useState(false);


  const [selectedUser, setSelectedUser] = useState<User>(initUser)

  const onOpenCloseModal = () => {
    if (showModal) setSelectedUser(initUser);
    setShowModal((prevState => !prevState))
  };

  const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);
  const onReload = () => {
    setReload((prevState) => !prevState);
  };

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
  }, [reload])

  const onUpdateUser = (user: User) => {
    console.log("USER", user);
    setSelectedUser(user);
    onOpenCloseModal();
  }

  const onDeleteUser = (id: number) => {
    deleteUser(id);
    onOpenCloseConfirm();
    onReload();
  }

  return (
    <div className='main-margin-page mt-5% pb-7%'>
      <div className='button-black w-52 h-14 mt-40px mb-3%' onClick={onOpenCloseModal}>
        New User
      </div>
      <div className="my-7%">
        {users.map((user, id) => (
          <div className="flex mb-150px" key={id}>
            <div className="min-w-60%">
              <div className='text-xxl font-black max-w-80%'>{user.firstName} {user.lastName}</div>
              <div className='mb-40px'>{user.email}</div>
              <div className='text-slate-500 text-md max-w-80%'>Nickname: {user.userName}</div>
              <div className='flex max-w-80% gap-5'>
                <div className='button-black w-56 mt-20px h-14' onClick={() => onUpdateUser(user)}>
                  Update User
                </div>
                <div
                  className='button-black w-56 mt-20px'
                  onClick={() => {
                    setSelectedUser(user);
                    setShowConfirm(true);
                  }}>
                  Delete User
                </div>
              </div>
            </div>
            <div className="min-w-40% ">
              <img alt='logo' className='rounded' style={{ minWidth: "100%" }} src={String(logoUrl + "?" + id)} />
            </div>
          </div>
        ))}
      </div>
      <BasicModal
        show={showModal}
        close={onOpenCloseModal}
        title={selectedUser.id ? "Update user" : "Create new user"}
        size="large"
      >
        <UserForm
          user={selectedUser}
          onClose={onOpenCloseModal}
          onReload={onReload}
        />
      </BasicModal>
      <Confirm
        open={showConfirm}
        onCancel={onOpenCloseConfirm}
        onConfirm={() => onDeleteUser(selectedUser.id || 0)}
        content={`Delete ${selectedUser.email} ?`}
        size="mini"
      />
    </div>
  )
}
