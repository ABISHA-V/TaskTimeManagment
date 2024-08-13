import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const TaskCreationPage = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDueDate, setInputDueDate] = useState("");
  const [inputReminder, setInputReminder] = useState("");
  const [inputStatus, setInputStatus] = useState("in progress"); // Default status
  const [items, setItems] = useState([]);
  const [isEditItem, setIsEditItem] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [minDateTime, setMinDateTime] = useState(new Date().toISOString().slice(0, 16));

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tasks from backend
    axios.get("http://localhost:8080/api/tasks")
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  useEffect(() => {
    // Update local storage when items change
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    // Set reminders for tasks
    const now = new Date().getTime();
    items.forEach((task) => {
      if (task.reminder && new Date(task.reminder).getTime() > now) {
        const delay = new Date(task.reminder).getTime() - now;
        setTimeout(() => alert(`Reminder for task: ${task.title}`), delay);
      }
    });
  }, [items]);

  const handleInputTitle = (e) => setInputTitle(e.target.value);
  const handleInputDesc = (e) => setInputDesc(e.target.value);
  const handleInputDueDate = (e) => setInputDueDate(e.target.value);
  const handleInputReminder = (e) => setInputReminder(e.target.value);
  const handleInputStatus = (e) => setInputStatus(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputTitle || !inputDesc || !inputDueDate) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = {
      title: inputTitle,
      description: inputDesc,
      dueDate: inputDueDate,
      reminder: inputReminder,
      status: inputStatus,
    };

    if (inputTitle && !toggleSubmit) {
      axios.put(`http://localhost:8080/api/tasks/${isEditItem}`, newTask)
        .then(response => {
          const updatedItems = items.map((elem) =>
            elem.id === isEditItem ? response.data : elem
          );
          setItems(updatedItems);
          setToggleSubmit(true);
        })
        .catch(error => {
          console.error("Error updating task:", error);
        });
    } else {
      axios.post("http://localhost:8080/api/tasks", newTask)
        .then(response => {
          setItems([...items, response.data]);
        })
        .catch(error => {
          console.error("Error creating task:", error);
        });
    }

    setInputTitle("");
    setInputDesc("");
    setInputDueDate("");
    setInputReminder("");
    setInputStatus("in progress"); // Reset to default status
    setIsEditItem(null);
  };

  const handleEdit = (id) => {
    const taskToEdit = items.find((elem) => elem.id === id);
    setInputTitle(taskToEdit.title);
    setInputDesc(taskToEdit.description);
    setInputDueDate(taskToEdit.dueDate);
    setInputReminder(taskToEdit.reminder);
    setInputStatus(taskToEdit.status);
    setIsEditItem(id);
    setToggleSubmit(false);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/tasks/${id}`)
      .then(() => {
        const updatedItems = items.filter((elem) => elem.id !== id);
        setItems(updatedItems);
      })
      .catch(error => {
        console.error("Error deleting task:", error);
      });
  };

  const handleAdd = () => {
    setInputTitle("");
    setInputDesc("");
    setInputDueDate("");
    setInputReminder("");
    setInputStatus("in progress"); // Default status for new tasks
    setIsEditItem(null);
    setToggleSubmit(true);
  };

  const handleCreate = (id) => {
    navigate(`/task-details/${id}`);
  };

  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <div style={styles.newButtonContainer}>
          <button style={styles.newButton} onClick={handleAdd}>
            New Task
          </button>
        </div>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>{toggleSubmit ? "Add Task" : "Edit Task"}</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label htmlFor="title" style={styles.label}>
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Task Title"
              style={styles.input}
              onChange={handleInputTitle}
              value={inputTitle}
            />
            <label htmlFor="description" style={styles.label}>
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Task Description"
              style={styles.input}
              onChange={handleInputDesc}
              value={inputDesc}
            />
            <label htmlFor="dueDate" style={styles.label}>
              Due Date
            </label>
            <input
              type="datetime-local"
              id="dueDate"
              style={styles.input}
              onChange={handleInputDueDate}
              value={inputDueDate}
              min={minDateTime}
            />
            <label htmlFor="reminder" style={styles.label}>
              Reminder
            </label>
            <input
              type="datetime-local"
              id="reminder"
              style={styles.input}
              onChange={handleInputReminder}
              value={inputReminder}
              min={minDateTime}
            />
            <label htmlFor="status" style={styles.label}>
              Status
            </label>
            <select
              id="status"
              style={styles.input}
              onChange={handleInputStatus}
              value={inputStatus}
            >
              {toggleSubmit ? (
                <option value="in progress">In Progress</option>
              ) : (
                <>
                  <option value="in progress">In Progress</option>
                  <option value="completed">Completed</option>
                </>
              )}
            </select>
            <button type="submit" style={styles.submitButton}>
              {toggleSubmit ? "Save" : "Update"}
            </button>
          </form>
        </div>
        <div style={styles.listContainer}>
          {items.length === 0 ? (
            <p>No tasks found.</p>
          ) : (
            items.map((elem) => (
              <div style={styles.itemContainer} key={elem.id}>
                <div style={styles.itemContent}>
                  <h4 style={styles.itemTitle}>{elem.title}</h4>
                  <p style={styles.itemDesc}>{elem.description}</p>
                  <p style={styles.itemDueDate}>Due Date: {new Date(elem.dueDate).toLocaleString()}</p>
                  <p style={styles.itemReminder}>Reminder: {new Date(elem.reminder).toLocaleString()}</p>
                  <p style={{ ...styles.itemStatus, color: elem.status === "completed" ? "green" : "red" }}>
                    Status: {elem.status}
                  </p>
                </div>
                <div style={styles.itemActions}>
                  <button
                    style={styles.actionButton}
                    onClick={() => handleCreate(elem.id)}
                  >
                    View Details
                  </button>
                  <button style={styles.editButton} onClick={() => handleEdit(elem.id)}>
                    Edit
                  </button>
                  <button style={styles.deleteButton} onClick={() => handleDelete(elem.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  pageContainer: { marginTop: "60px", paddingBottom: "50px", padding: "0 20px" },
  newButtonContainer: { display: "flex", justifyContent: "flex-end", padding: "20px 0" },
  newButton: {
    backgroundColor: "#242f47",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s",
  },
  actionButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#242f47',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  formContainer: { maxWidth: "600px", margin: "auto", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
  formTitle: { textAlign: "center", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column" },
  label: { marginBottom: "8px", fontSize: "16px", fontWeight: "bold" },
  input: { padding: "10px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ddd" },
  submitButton: {
    backgroundColor: "#242f47",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s",
  },
  listContainer: { marginTop: "20px" },
  itemContainer: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContent: { flex: 1 },
  itemTitle: { fontSize: "18px", fontWeight: "bold", margin: "0" },
  itemDesc: { fontSize: "16px", margin: "5px 0" },
  itemDueDate: { fontSize: "14px", color: "#333" },
  itemReminder: { fontSize: "14px", color: "#666" },
  itemStatus: { fontSize: "14px", fontWeight: "bold" },
  itemActions: { display: "flex", gap: "10px" },
  editButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#242f47',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#ff4c4c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TaskCreationPage;
