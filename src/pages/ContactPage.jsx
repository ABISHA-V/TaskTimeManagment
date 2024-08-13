// import React, { useState } from 'react';
// import Navbar from './Navbar'; // Assuming you have a Navbar component
// import Footer from './Footer'; // Assuming you have a Footer component
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Here you can implement the actual form submission logic
//       // For example, sending the form data to an API endpoint

//       // Assuming the form submission was successful
//       toast.success('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       toast.error('Error sending message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
      
//       <section className="px-10 py-8 bg-white min-h-screen mt-16">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
//           <p className="text-lg mb-4 text-center">
//             We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
//           </p>
//           <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md shadow-md">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 rows="4"
//                 required
//               ></textarea>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Sending POST request to the Spring Boot backend
      const response = await axios.post('http://localhost:8080/api/contacts', formData);
      
      // Assuming the form submission was successful
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="px-10 py-8 bg-white min-h-screen mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-lg mb-4 text-center">
            We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
