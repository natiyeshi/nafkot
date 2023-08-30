import {useState} from 'react'
import Question from './Question'
const Faq = () => {
  
  let [bool,setBool] = useState(-1)

  return (
    <div className='py-24 px-c14 max-lg:px-4' id='faq'>
      
      <h1 className='text-center text-xl font-semibold'>Frequently Asked Questions</h1>
      <div>

        <div className='max-w-7xl mx-auto  md:grid md:grid-cols-2 max-lg:grid mt-14 justify-between gap-x-5 gap-y-10 flex-wrap'>

          <div className='flex flex-col gap-8'>
            <Question bool={bool}  num={0} setBool={setBool} />
            <Question bool={bool}  num={1} setBool={setBool} />
            <Question bool={bool}  num={2} setBool={setBool} />
            <Question bool={bool}  num={3} setBool={setBool} />
          </div>
          <div className='flex flex-col gap-8'>
            <Question bool={bool}  num={4} setBool={setBool} />
            <Question bool={bool}  num={5} setBool={setBool} />
            <Question bool={bool}  num={6} setBool={setBool} />
            <Question bool={bool}  num={7} setBool={setBool} />
          </div>     
      </div>


      </div>
    </div>
  )
}

export default Faq