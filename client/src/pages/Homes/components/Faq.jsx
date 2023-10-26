import {useState} from 'react'
import Question from './Question'
const Faq = () => {
  
  let [bool,setBool] = useState(-1)
  const faq = [
    {
      question: "What types of products does Nafkot offer?",
      answer: "Nafkot offers a wide range of high-quality Ethiopian products, including coffee, tea, spices, traditional clothing, jewelry, art, home decor, and more."
    },
    {
      question: "How do I place an order with Nafkot?",
      answer: "To place an order with Nafkot, simply visit our website and browse our selection of products. Once you've found the items you'd like to purchase, simply add them to your cart and proceed to checkout. You'll be prompted to enter your shipping and payment information, and your order will be processed and shipped to you in a timely manner."
    },
    {
      question: "What payment methods does Nafkot accept?",
      answer: "Nafkot accepts all major credit and debit cards, as well as PayPal and other popular payment methods."
    },
    {
      question: "How long will it take to receive my order?",
      answer: "The length of time it takes to receive your order will depend on your location and the shipping method you choose at checkout. We strive to process and ship all orders as quickly as possible, and you'll receive a tracking number once your order has been shipped."
    },
    {
      question: "Can I return or exchange items I've purchased from Nafkot?",
      answer: "Yes, we want all of our customers to be completely satisfied with their purchases. If for any reason you're not happy with an item you've purchased, you can return or exchange it within 30 days of receiving it. Please see our returns and exchanges policy for more information."
    },
    {
      question: "Does Nafkot offer international shipping?",
      answer: "Yes, we ship our products worldwide. However, please note that shipping rates and delivery times may vary depending on your location."
    },
    {
      question: "Are Nafkot's products sustainable and ethically sourced?",
      answer: "Yes, we are committed to ensuring that all of our products are sustainably sourced and ethically produced. We work closely with our suppliers to ensure that they adhere to fair labor practices and use environmentally friendly materials and production methods."
    },
    {
      question: "How can I get in touch with Nafkot's customer service team?",
      answer: "If you have any questions or concerns about your order, you can contact our customer service team via email or phone. Our customer service representatives are available to assist you during normal business hours, and we strive to respond to all inquiries in a timely manner."
    },
    {
      question: "Does Nafkot offer gift wrapping or personalization services?",
      answer: "Yes, we offer gift wrapping and personalization services for many of our products. Please see the product description for more information or contact us for assistance."
    },
    {
      question: "Does Nafkot offer wholesale or bulk pricing?",
      answer: "Yes, we offer wholesale and bulk pricing for many of our products. Please contact us for more information about our wholesale program."
    }
  ];
  var leftPage = []
  var rightPage = []
  for(let i = 0; i < faq.length; i++){
    if(i < (faq.length / 2)){
      leftPage.push(<Question bool={bool} key={i}  num={i} setBool={setBool} question={faq[i].question} answer={faq[i].answer} />);
    } else {
      rightPage.push(<Question bool={bool} key={i} num={i} setBool={setBool} question={faq[i].question} answer={faq[i].answer} />);
    }
  }
  return (
    <div className='py-24 px-c14 max-lg:px-4' id='faq'>
      
      <h1 className='text-center text-xl font-semibold'>Frequently Asked Questions</h1>
      <div>

        <div className='max-w-7xl mx-auto  md:grid md:grid-cols-2 max-lg:grid mt-14 justify-between gap-x-5 gap-y-10 flex-wrap'>

          <div className='flex flex-col gap-8'>
            {leftPage}
          </div>
          <div className='flex flex-col gap-8'>
            {rightPage}

          </div>     
      </div>


      </div>
    </div>
  )
}

export default Faq