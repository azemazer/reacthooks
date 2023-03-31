import React from 'react';
import UserTable from "./UserTable";
import UserSend from "./userSend"
import TableInsert from './TableInsert';



function Appreal() {




    return <>
        <div class="container">
            <div class="row text-light bg-danger">
                <h1>CRUD App with Hooks</h1>
            </div>
            <div class="row">
                <div class="col bg-secondary text-light">
                    <h3>Add User</h3>
                    <UserSend></UserSend>
                </div>
                <div class="col">
                    <div class="row bg-secondary text-light">
                        <h3>View users</h3>
                    </div>
                    <div class="row">
                        <div class="col bg-secondary text-light">
                            <h4>Name</h4>
                        </div>
                        <div class="col bg-secondary text-light">
                            <h4>Username</h4>
                        </div>
                        <div class="col bg-secondary text-light">
                            <h4>Actions</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col bg-secondary text-light">
                            <p>Name</p>
                        </div>
                        <div class="col bg-secondary text-light">
                            <p>Username</p>
                        </div>
                        <div class="col bg-secondary text-light">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                    <UserTable></UserTable>
                    <TableInsert></TableInsert>
                </div>
            </div>
        </div>
    </>
}

export default Appreal