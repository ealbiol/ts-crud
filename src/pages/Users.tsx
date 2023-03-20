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
        setUsers(users)
      } catch (error) {
      }
    })()
  }, [reload])

  const onUpdateUser = (user: User) => {
    setSelectedUser(user);
    onOpenCloseModal();
  }
  const onDeleteUser = (id: number) => {
    deleteUser(id);
    onOpenCloseConfirm();
    onReload();
  }

  return (
    <div className='units-wrapper'>
      <div className='units-new-unit-button' onClick={onOpenCloseModal}>
        New User
      </div>
      <div className="my-7%">
        {users.map((user, id) => (
          <div className="unit-wrapper" key={id}>
            <div className="unit-text">
              <div className='unit-text-main'>{user.firstName} {user.lastName}</div>
              <div className='unit-text'>{user.email}</div>
              <div className='unit-text-final'>Nickname: {user.userName}</div>
              <div className='unit-text-buttons'>
                <div className='unit-text-button' onClick={() => onUpdateUser(user)}>
                  Update User
                </div>
                <div className='unit-text-button'
                  onClick={() => {
                    setSelectedUser(user);
                    setShowConfirm(true);
                  }}>
                  Delete User
                </div>
              </div>
            </div>
            <div className="unit-image-wrapper">
              <img alt='logo' className='unit-image' src={String(logoUrl + "?" + id)} />
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
