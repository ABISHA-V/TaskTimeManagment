// src/CalendarPage.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from './Navbar';
import Footer from './Footer';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div><Navbar/>
    <div style={styles.pageContainer}>
      
      <div style={styles.content}>
        <h2 style={styles.header}>Calendar</h2>
        <div style={styles.calendarWrapper}>
          <Calendar
            onChange={handleDateChange}
            value={date}
            style={styles.calendar}
          />
        </div>
        <p style={styles.dateDisplay}>Selected Date: {date.toDateString()}</p>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: '50px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minHeight: '1vh', // Ensure the container takes up the full height of the viewport
    paddingTop: '90px', // Adjust this value based on the height of the Navbar
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center', // Center align the text and calendar
  },
  header: {
    color: '#333',
    marginBottom: '20px',
  },
  calendarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '160px',
  },
  calendar: {
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  dateDisplay: {
    color: '#555',
  },
};

export default CalendarPage;
