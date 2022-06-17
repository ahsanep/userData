import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormDialog from './Modal';
import { Button } from '@mui/material';


function Datatable() {


    const [data, setData] = useState([])
    const [inputval, setInputval] = useState("")

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log("Datat", response.data);
            const responseData = response.data
            console.log(responseData)
            setData(responseData)

        } catch (error) {
            alert("Something went wrong....")
            console.error(error);

        }
    }


    function getInputValue(e) {
        console.log(e.target.value)
        setInputval(e.target.value)
        search(data)

    }

    function plus() {
        console.log("hello")
    }

    function search(data){
       
        return data.filter((item) => {
    
            return (
             item.name.toLowerCase().includes(inputval)
            )
        }
        )
    }


    return (
        <>

            <div className='search'>
                <input type="text"  id="" placeholder='Search...' onChange={getInputValue} />

                <table>
                    <tbody>
                        <tr>
                            <th className='name'>Name</th>
                            <th className='username'>UserName</th>
                            <th className='email'>Email</th>
                            <th className='website'>Website</th>

                        </tr>

                        { data.map((value) => {
                            return (
                                <tr key={value.id}>
                                    <td className='name'>{value.name}</td>
                                    <td className='username'>{value.username}</td>
                                    <td className='email'>{value.email}</td>
                                    <td className='website'>{value.website} </td>

                                    <td><Button onClick={plus}>+</Button></td>
                                    <td><Button><FormDialog /></Button></td>
                                </tr>
                            )
                        }) 
                        }




                    </tbody>

                </table>
            </div>

        </>
    )


}


export default Datatable;


