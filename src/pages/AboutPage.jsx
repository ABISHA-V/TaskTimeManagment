import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Footer from './Footer'; // Assuming you have a Footer component

const AboutPage = () => {
  return (
    <>
      
      <section className="px-10 py-8 bg-white min-h-screen mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">About OptiTime</h1>
          <p className="text-lg mb-4">
            OptiTime is a comprehensive task and time management application designed to help individuals and teams stay organized and productive. Our platform provides a user-friendly interface to manage tasks efficiently, track progress, and meet deadlines.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-8">
            <li className="mb-2">✔ Create, update, and delete tasks with ease.</li>
            <li className="mb-2">✔ Track the status of each task (In Progress, Complete).</li>
            <li className="mb-2">✔ Set deadlines and reminders to keep you on track.</li>
            <li className="mb-2">✔ Filter and sort tasks based on various criteria.</li>
            <li className="mb-2">✔ View and manage tasks in an intuitive dashboard.</li>
            <li className="mb-2">✔ Collaborate with team members by assigning tasks and tracking progress.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At TaskMaster, our mission is to empower individuals and teams by providing tools that enhance productivity and streamline task management. We believe in making work more manageable and helping users achieve their goals more efficiently.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            If you have any questions, feedback, or need support, feel free to reach out to us at <a href="mailto:support@taskmaster.com" className="text-blue-500">support@taskmaster.com</a>. We’d love to hear from you!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
