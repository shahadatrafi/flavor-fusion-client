import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleDelete = item => {
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
                fetch(`http://localhost:5000/carts/${item._id}`, {
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
        <div className='container mx-auto'>
            <div className='flex justify-evenly items-center mt-40 mb-10'>
                <h4 className='text-4xl font-semibold'>Total Items: {cart.length}</h4>
                <h4 className='text-4xl font-semibold'>Total Price: $ <span> {total}</span></h4>
                <button className="btn bg-[#D1A054] border-0">Pay</button>
            </div>

            <div className="overflow-x-auto mx-12">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr>
                                
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost text-xl text-white bg-red-600 hover:bg-red-700"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyCart;