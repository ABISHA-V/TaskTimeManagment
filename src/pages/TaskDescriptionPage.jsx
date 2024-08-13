import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const TaskDescriptionPage = () => {
  const { id } = useParams(); // Get the task ID from the URL
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTaskDetails(); // Fetch task details when the component mounts
  }, [id]);

  const fetchTaskDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/tasks/${id}`);
      const taskData = await response.json();
      setTask(taskData);
    } catch (error) {
      console.error('Error fetching task details:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        {task ? (
          <>
            <h2 style={styles.title}>{task.title}</h2>
            <p style={styles.description}>{task.description}</p>
            <p style={styles.dueDate}>
              Due Date: {new Date(task.dueDate).toLocaleString()}
            </p>
            <p style={styles.reminder}>
              Reminder: {new Date(task.reminder).toLocaleString()}
            </p>
            <p
              style={{
                ...styles.status,
                color: task.status === 'completed' ? '#28a745' : '#dc3545',
              }}
            >
              Status: {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </p>
          </>
        ) : (
          <p>Loading task details...</p>
        )}
      </div>
      
    </>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 200px)', // Adjust based on Navbar and Footer heights
    margin: '0 auto',
    padding: '20px',
    maxWidth: '900px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#242f47',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  dueDate: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '10px',
  },
  reminder: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '10px',
  },
  status: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
};

export default TaskDescriptionPage;
