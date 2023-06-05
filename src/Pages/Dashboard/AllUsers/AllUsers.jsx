import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method : "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(
                        'Updated!',
                        'Your file has been updated.',
                        'success'
                    )
            }
        })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='flex flex-col text-center items-center justify-center my-28'>
            <h4 className='text-4xl font-semibold mb-8'>Total Items: {users.length}</h4>
            <div className="overflow-x-auto mx-12">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>

                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>${user.email}</td>
                                
                                <td>{
                                        user.role === 'admin' ? 'admin' : <button onClick={ () => handleMakeAdmin(user._id)} className="btn btn-ghost text-xl text-white bg-yellow-600 hover:bg-yellow-700"><FaUserShield></FaUserShield></button>
                                    }</td>
                                
                                <th>
                                    <button onClick={() => handleDelete()} className="btn btn-ghost text-xl text-white bg-red-600 hover:bg-red-700"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;