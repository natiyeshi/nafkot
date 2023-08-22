import React, {useState, useEffect, useRef} from 'react'
import {GrAdd} from "react-icons/gr"
import {FiRefreshCcw as Reset} from "react-icons/fi"
import {checkString} from '../../../../core/functions/common'

const From = () => {

    const imgRef = useRef()

    const initialHeaders = {
        title: "",
        tag: "",
        price: 0
    }
    const initialHeadersErr = {
        title: "",
        tag: "",
        price: ""
    }
    const [headers, setHeaders] = useState(initialHeaders)
    const [headersErr, setHeadersErr] = useState(initialHeadersErr)
    const [items, setItems] = useState([])
    const initialItem = {
        itemName: "",
        itemAmount: 0,
        img: null
    }
    const initialItemErr = {
        itemName: "",
        itemAmount: "",
        img: ""
    }
    const [item, setItem] = useState(initialItem)
    const [itemErr, setItemErr] = useState(initialItemErr)
    const [itemNum, setItemNum] = useState(0)
    const [mainData, setMainData] = useState({})

    const checkHeaderInput = (input) => {
        if (!checkString(headers[input])) {
            setHeadersErr(val => ({
                ...val,
                [input]: "empty " + input
            }))
            return false
        } else {
            setHeadersErr(val => ({
                ...val,
                [input]: ""
            }))
        }
        return true
    }
    const validateHeader = () => {
        if (!(checkHeaderInput("title") && checkHeaderInput("tag"))) 
            return false
        
        if (headers.price !== "" && headers.price > 0) {
            setHeadersErr(err => ({
                ...err,
                price: ""
            }))
            return true
        }
        setHeadersErr(err => ({
            ...err,
            price: "empty price"
        }))
        return false
    }
    const validateItem = () => {

        if (!checkString(item.itemName)) {
            setItemErr(val => ({
                ...val,
                itemName: "empty item name"
            }))
            return false
        } else {
            setItemErr(val => ({
                ...val,
                itemName: ""
            }))
        }

        if (item.itemAmount < 1) {
            setItemErr(val => ({
                ...val,
                itemAmount: "empty amount"
            }))
            return false
        } else {
            setItemErr(val => ({
                ...val,
                itemAmount: ""
            }))
        }

        if (item.img == null) {
            setItemErr(val => ({
                ...val,
                itemAmount: "empty image"
            }))
            return false
        } else {
            setItemErr(val => ({
                ...val,
                img: ""
            }))
        }

        return true

    }

    const changeHeader = ({target}) => setHeaders(val => ({
        ...val,
        [target.name]: target.value
    }))

    const submit = () => {

        const checker = validateHeader() && validateItem()
        if (checker == false) 
            return
        
        setItems(data => {
            let newDatas = [...data]
            newDatas[itemNum] = item
            setMainData({
                ...headers,
                newDatas
            })
            return newDatas
        })

    }
    const addMoreItem = () => {
        if (validateItem()) {
            setItemNum(num => num + 1)
            setItems(data => [
                ...data,
                item
            ])
            setItem(initialItem)
        }
    }

    const reset = () => {
        setHeaders(initialHeaders)
        setItem(initialItem)
        setItems([])
        setItemNum(0)
        setItemErr(initialItemErr)
        setHeadersErr(initialHeadersErr)
    }

    useEffect(() => {
        console.log(mainData)
    }, [mainData])

    return (
        <div className='bg-white   rounded-lg px-10 w-fit mx-auto py-5 shadow-xl'>

            <div className=' flex my-5 justify-between'>

                <h3 className='text-lg  font-semibold'>
                    Add your product
                </h3>
                <div onClick={reset} title='reset' className='bg-gray-50 cursor-pointer    hover:bg-gray-100 p-2 rounded'>
                    <Reset className='text-lg' />
                </div>

            </div>


            <form className='flex flex-col relative' action=""
                onSubmit={
                    (e) => e.preventDefault()
            }>

                <div className='flex  gap-7'>
                    <div className='flex flex-col gap-4 my-auto '>
                        <label htmlFor="" className='text-[14px]'>product title</label>
                        <input type="text" name='title'
                            onChange={changeHeader}
                            value={
                                headers.title
                            }
                            placeholder='title'
                            className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>

                        <label htmlFor="" className='text-[14px]'>product tag</label>
                        <input type="text" name='tag'
                            onChange={changeHeader}
                            value={
                                headers.tag
                            }
                            placeholder='tag'
                            className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>

                        <label htmlFor="" className='text-[14px]'>price</label>
                        <input type="number" name='price'
                            onChange={changeHeader}
                            value={
                                headers.price
                            }
                            placeholder='price'
                            className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>


                        <div className='text-redd'>
                            {
                            headersErr.title + " " + headersErr.tag + " " + headersErr.price
                        }
                            {} </div>


                    </div>

                    <div className='flex flex-col  border w-fit  relative shadow-lg'>
                        <div className=' bg-gray-800 text-white py-3 ps-5 font-bold'>item {
                            itemNum + 1
                        }</div>
                        <div className='px-5 flex flex-col gap-2 mt-4'>
                            <label htmlFor="" className='text-[14px]'>item name</label>
                            <input type="text"
                                onChange={
                                    ({target}) => setItem({
                                        ...item,
                                        itemName: target.value
                                    })
                                }
                                value={
                                    item.itemName
                                }
                                placeholder='name'
                                name='itemName'
                                className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>
                            <label htmlFor="" className='text-[14px]'>item amount</label>
                            <input type="number"
                                onChange={
                                    ({target}) => setItem({
                                        ...item,
                                        itemAmount: target.value
                                    })
                                }
                                value={
                                    item.itemAmount
                                }
                                placeholder='amount'
                                name='itemAmount'
                                className='py-1 w-60 px1 focus:outline-none bg-transparent border-b  border-gray-800 '/>
                            <input type="file"
                                onChange={
                                    (event) => setItem({
                                        ...item,
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
                                    `border border-gray-800 hover:bg-gray-200 duration-100  ${
                                        item.img && "bg-gray-800 hover:bg-gray-700 text-white "
                                    } mt-2 py-1 px-5 w-fit cursor-pointer rounded`
                            }>
                                {
                                item.img ? "image added" : "Upload image"
                            } </div>

                            <div className='mb-1 py-1 text-redd'>
                                {
                                itemErr.itemAmount
                            }
                                {
                                itemErr.itemName
                            }
                                {
                                itemErr.img
                            } </div>
                            <button onClick={addMoreItem}
                                className='bg-transparent border hover:bg-gray-200 duration-100 font-semibold px-12 rounded py-2 mb-2 flex'>

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
        </div>
    )
}

export default From
