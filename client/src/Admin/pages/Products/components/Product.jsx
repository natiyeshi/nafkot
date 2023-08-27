import React, {useEffect, useState} from 'react'
import Box from '../../common/components/Box'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {getAdminProducts, getLoading, getError, fetchContent} from '../../../../store/features/adminproductslice/adminProductsSlice'
import axios from "../../../hooks/axios"
import gif from "../../../../assets/gif/Pulse-1s-200px.gif"
import Loading from "../../common/components/Loading";

const Product = () => {
    const dispatch = useDispatch()

    const products = useSelector(getAdminProducts)
    const isLoading = useSelector(getLoading)
    const error = useSelector(getError)

    const [deleting, setDeleting] = useState(false)

    async function deleteItem(id) {
        try {
            setDeleting(true)
            const res = await axios.post("/deleteproduct/" + id);
            const deletedId = res.data._id
            setDeleting(false)
            return true

        } catch (e) {
            setDeleting(false)
            console.log(e)
            alert("something goes wrong!")
            return false
        }
    }

    useEffect(() => {
        dispatch(fetchContent())
    }, [])

    return (

        <div className=' mt-7 flex flex-wrap gap-3'>

            {deleting && <Loading message={"Deleting item"} loading={true} />}

            {
            isLoading ? <Loading message={"loading"} loading={true} />
            : error != null ? <div className='ms-5 '>
                {error}
                <br/>
                <button className='font-bold text-blue-600 mt-3'
                    onClick={
                        () => location.reload()
                }>
                    refresh here
                </button>
            </div> : products.map(data => <Box {...data}
                deleteItem={deleteItem}
                key={
                    data._id
                }/>)
        }
         </div>
    )
}

export default Product
