import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../helper/TextField';
import pdf from '../assets/icons/pdf.png'
import TextArea from '../helper/TextArea';
import Footer from './Footer';

const documents = [
    { name: "WhitePaper", icon: pdf },
    { name: "Token Sale Terms", icon: pdf },
    { name: "Presentation", icon: pdf},
    { name: "Light Paper", icon: pdf},
  ];

const Contact = () => {
  return (
    <section className="flex flex-col w-full min-h-screen lg:px-10 bg-blue-black-gradient rounded-3xl">
      <div className="flex mb-[5rem] mt-[2rem] justify-center items-center w-full text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-text-gradient ">
          Ask Quick Questions
        </h1>
      </div>
      <div className="w-full mx-auto flex flex-col md:flex-row gap-12">
  {/* Left Section: Contact Form */}
  <div className="md:basis-3/5 bg-gray-800 rounded-lg p-8 shadow-lg">
    <h2 className="text-3xl font-semibold mb-6 text-center">Get In Touch Now</h2>
    <Formik
      initialValues={{
        Name: '',
        email: '',
        acceptedTerms: false,
        jobType: '',
      }}
      validationSchema={Yup.object({
        Name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <TextField
            label="Name"
            name="Name"
            type="text"
            placeholder="Your Name"
            className="flex-1"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="Your Email Address"
            className="flex-1"
          />
        </div>
        <div>
            <TextArea
            label="Message"
            name="massage"
            type="text"
            placeholder="Enter your message"
            className="flex-1"
            />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-gray-900 rounded-lg font-semibold hover:bg-teal-400 transition"
        >
          Send Message
        </button>
      </Form>
    </Formik>
  </div>

  {/* Right Section: Documents */}
  <div className="md:basis-2/5 bg-gray-800 rounded-lg p-8 shadow-lg">
  <h2 className="text-3xl font-semibold mb-6 text-center">Read Documents</h2>
  <div className="grid grid-cols-2 gap-6 mb-6">
    {documents.map((doc, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center  "
      >
        <div className="border-2 border-gray-500 rounded-lg p-4 mb-4 flex items-center justify-center">
          <img
            src={doc.icon}
            alt={`${doc.name} icon`}
            className="w-12 h-12"
          />
        </div>
        <p className="text-sm font-semibold  hover:text-teal-400 transition text-center">{doc.name}</p>
      </div>
    ))}
  </div>
  <button className="w-full py-3 bg-teal-500 text-gray-900 rounded-lg font-semibold hover:bg-teal-400 transition">
    Download All
  </button>
</div>

</div>

        
         {/* Footer */}
         <Footer/>
       
    </section>
  )
}

export default Contact