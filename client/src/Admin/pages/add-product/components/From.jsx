import React, {useState, useEffect, useRef} from 'react'
import {GrAdd} from "react-icons/gr"
import {checkString} from '../../../../core/functions/common'

const From = () => {

    const imgRef = useRef()

    const initialHeaders = {
        title: "",
        tag: ""
    }
    const [headers, setHeaders] = useState(initialHeaders)
    const [headersErr, setHeadersErr] = useState(initialHeaders)
    const initialItems = {
        itemName: "",
        itemAmount: 0,
        img: null
    }
    const initialItemsErr = {
        itemName: "",
        itemAmount: "",
        img: ""
    }
    const [items, setItems] = useState(initialItems)
    const [itemsErr, setItemsErr] = useState(initialItemsErr)

    const [mainData, setMainData] = useState([])

    const validateHeader = () => {
        if (!checkString(headers.title)) {
            setHeadersErr(val => ({
                ...val,
                title: "empty item name"
            }))
            return false
        } else {
            setHeadersErr(val => ({
                ...val,
                title: ""
            }))
        }

        if (!checkString(headers.tag)) {
            setHeadersErr(val => ({
                ...val,
                tag: "empty item name"
            }))
            return false
        } else {
            setHeadersErr(val => ({
                ...val,
                tag: ""
            }))
        }

    }

    const validateItems = () => {

        if (!checkString(items.itemName)) {
            setItemsErr(val => ({
                ...val,
                itemName: "empty item name"
            }))
            return false
        } else {
            setItemsErr(val => ({
                ...val,
                itemName: ""
            }))
        }

        if (items.itemAmount < 1) {
            setItemsErr(val => ({
                ...val,
                itemAmount: "empty amount"
            }))
            return false
        } else {
            setItemsErr(val => ({
                ...val,
                itemAmount: ""
            }))
        }

        if (items.img == null) {
            setItemsErr(val => ({
                ...val,
                itemAmount: "empty image"
            }))
            return false
        } else {
            setItemsErr(val => ({
                ...val,
                img: ""
            }))
        }
        return true

    }

    const submit = () => { 
        validateHeader()
        validateItems()
    }

    return (<div className='bg-white  rounded-lg px-10 w-fit mx-auto py-5'>
        <h3 className='text-lg my-5 font-semibold'>
            Add your product
        </h3>


        <form className='flex flex-col relative' action=""
            onSubmit={
                (e) => e.preventDefault()
        }>

            <div className='flex  gap-7'>
                <div className='flex flex-col gap-2 my-auto '>
                    <label htmlFor="" className='text-[14px]'>product title</label>
                    <input type="text" name='title'
                        onChange={
                            ({target}) => setHeaders(val => ({
                                ...val,
                                [target.name]: target.value
                            }))
                        }
                        value={
                            headers.title
                        }
                        placeholder='title'
                        className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>

                    <label htmlFor="" className='text-[14px]'>product tag</label>
                    <input type="text" name='tag'
                        onChange={
                            ({target}) => setHeaders(val => ({
                                ...val,
                                [target.name]: target.value
                            }))
                        }
                        value={
                            headers.tag
                        }
                        placeholder='tag'
                        className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>

                    <div className='text-redd'> {
                        headersErr.title
                    }
                        {
                        headersErr.tag
                    } </div>


                </div>

                <div className='flex flex-col  border w-fit  relative shadow-lg'>
                    <div className=' bg-gray-800 text-white py-3 ps-5 font-bold'>item {
                        mainData.length + 1
                    }</div>
                    <div className='px-5 flex flex-col gap-2 mt-4'>
                        <label htmlFor="" className='text-[14px]'>item name</label>
                        <input type="text"
                            onChange={
                                ({target}) => setItems({
                                    ...items,
                                    itemName: target.value
                                })
                            }
                            value={
                                items.itemName
                            }
                            placeholder='name'
                            name='itemName'
                            className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>
                        <label htmlFor="" className='text-[14px]'>item amount</label>
                        <input type="number"
                            onChange={
                                ({target}) => setItems({
                                    ...items,
                                    itemAmount: target.value
                                })
                            }
                            value={
                                items.itemAmount
                            }
                            placeholder='amount'
                            name='itemAmount'
                            className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>
                        <input type="file"
                            onChange={
                                (event) => setItems({
                                    ...items,
                                    img: event.target.files[0] ?? null
                                })
                            }
                            hidden
                            accept='image/*'
                            ref={imgRef}/>

                        <div onClick={
                                () => imgRef.current.click()
                            }
                            className={
                                `border border-gray-800  ${
                                    items.img && "bg-gray-800 text-white "
                                } mt-2 py-1 px-5 w-fit cursor-pointer rounded`
                        }> {
                            items.img ? "image added" : "Upload image"
                        } </div>

                        <div className='mb-1 py-1 text-redd'> {
                            itemsErr.itemAmount
                        }
                            {
                            itemsErr.itemName
                        }
                            {
                            itemsErr.image
                        } </div>
                        <button className='bg-transparent border font-semibold px-12 rounded py-2 mb-2 flex'>

                            <p>
                                Add More Item
                            </p>
                            <GrAdd className='my-auto ms-2 '/>

                        </button>

                    </div>
                </div>
            </div>
            <div className='flex mt-4 gap-1'>

                <button onClick={submit}
                    className='bg-gray-800 w-fit text-white font-semibold px-12 rounded py-2'>Finish</button>

            </div>


        </form>
    </div>)
}

export default From
