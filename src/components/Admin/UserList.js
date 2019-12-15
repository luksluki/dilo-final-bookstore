import React from "react";

const UserList = props => {
  const users = props.users;

  return (
    <div>
      {users.map((user, index) => (
        <div className="row" key={index}>
          <div class="column">
            <table class="table">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Nama</td>
                  <td>Email</td>
                  <td>Role Access</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
