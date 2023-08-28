import React from 'react'
import SectionHead from './SectionHead'
import {faqs} from '../data'
import {FaCrown} from 'react-icons/fa'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className="faqs">
        <div className='container faqs__container'>
            <SectionHead icon={<FaCrown/>} title="FAQs"/>
            <div className="faqs__wrapper">
            {
                faqs.map(({id, question, answer}) =>{
                    return <FAQ key={id} question={question} answer={answer}/>
                    
                })
            }
            </div>
        </div>
    </section>
  )
}

export default FAQs
