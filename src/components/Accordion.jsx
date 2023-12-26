import React from 'react';
import {useState} from 'react';
import './Accordion.css';

import {RiArrowDropDownLine} from 'react-icons/ri';
import {BsCheckCircle} from 'react-icons/bs';
const data = [
    {
        question: 'What does it mean that this software is SaaS',
        answer: "SaaS stands for Software as a Service. In simple terms, it means that our software is hosted in the cloud, and users can access it through the internet. You don't need to install or maintain any software locally; just log in from any device with an internet connection, and you're good to go."
    },
    {
        question:"How user-friendly is the software?",
        answer: "We've designed the software with user-friendliness in mind. Whether you're tech-savvy or not, our intuitive interface ensures that you can navigate through the system easily. No extensive training is required, allowing you to focus on your tasks rather than grappling with complex software."
    },
    {
        question: "How does this software provide users with full control over their tasks?",
        answer: "Our software empowers users by providing comprehensive control over their tasks. You can manage and track every aspect of your job seamlessly. Customization options, workflow controls, and real-time updates ensure that you're in the driver's seat, enabling efficient and effective task management."
    },
    {
        question: "How does the software handle document expiry, and how are users and their clients notified?",
        answer: "The software comes equipped with a robust alert system. You can set up notifications for document expirations, and these alerts can be delivered via email, SMS, or WhatsApp. This proactive feature ensures that both you and your clients stay informed well in advance, preventing any disruptions in your workflow."
    },
    {
        question: "Can you elaborate on the security features of the cloud-based system, especially regarding user access?",
        answer: "Our software operates in the cloud with top-notch security measures. Access is not only convenient from anywhere with an internet connection but is also highly secure. We employ IP-wise control, ensuring that access is restricted to authorized locations. This, coupled with other security features, guarantees a safe and controlled operating environment for users."
    },
]
const Accordion = () => {
    const [selected, setSelected] = useState(null);

const toggle = (i) => {
  if(selected === i){
    return setSelected(null)
  }
  setSelected(i)
}


  return (
    <div className='wrapper'>
         <div className='accordion'>
              {data.map((item, i) => (
                <div className='item border'>
                    <div className='title' onClick={() => toggle(i)}>
                       <h2 className='text-gray-400 flex flex-row-reverse gap-4 md:text-2xl sm:text-[10px]'>{item.question}
                       <BsCheckCircle fontSize={30} className='text-gray-500'/>
                       </h2>
                       <sapn ><RiArrowDropDownLine fontSize={30} className='text-gray-400' /></sapn>
                    </div>
                    <div className={selected === i ? 'content show text-xl' : 'content'}>
                        {item.answer}
                    </div>
                </div>
              ))}
         </div>
  
    </div>
  )
    
}

export default Accordion