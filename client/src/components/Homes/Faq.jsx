import {useState} from 'react'
import Question from './Question'
const Faq = () => {
  
  const [show,setShow] = useState(false)

  return (
    <div className='py-24 px-c14 max-md:px-4' id='faq'>
      
      <h1 className='text-center text-xl font-semibold'>Frequently Asked Questions</h1>
      
      <div className='md:grid md:grid-cols-2 max-md:grid mt-14 justify-between gap-x-5 gap-y-10 flex-wrap'>

          <div className='flex flex-col gap-8'>
            <Question />
            <Question />
            <Question />            
            <Question />
          </div>
          <div className='flex flex-col gap-8'>
            <Question />
            <Question />
            <Question />
            <Question />
          </div>

        

        

        

        

        

        

        


      </div>
    </div>
  )
}

export default Faq