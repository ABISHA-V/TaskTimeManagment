import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TaskDashboardPage = () => {
  const [items, setItems] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setItems(JSON.parse(savedTasks));
    }
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "in progress") return item.status === "in progress";
    if (filter === "completed") return item.status === "completed";
  });

  console.log(filteredItems); // Debugging output

  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <div style={styles.filterContainer}>
          <select value={filter} onChange={handleFilterChange} style={styles.filter}>
            <option value="all">All Tasks</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div style={styles.listContainer}>
          {filteredItems.length === 0 ? (
            <p>No tasks found.</p>
          ) : (
            filteredItems.map((item) => (
              <div style={styles.itemContainer} key={item.id}>
                <div style={styles.itemContent}>
                  <h4 style={styles.itemTitle}>{item.title}</h4>
                  <p style={styles.itemDesc}>{item.description}</p>
                  <p style={styles.itemDueDate}>Due Date: {new Date(item.dueDate).toLocaleString()}</p>
                  <p style={styles.itemReminder}>Reminder: {new Date(item.reminder).toLocaleString()}</p>
                  <p style={{ ...styles.itemStatus, color: item.status === "completed" ? "green" : "red" }}>
                    Status: {item.status}
                  </p>
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
  filterContainer: { display: "flex", justifyContent: "flex-end", padding: "20px 0" },
  filter: { padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" },
  listContainer: { padding: "20px" },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    marginBottom: "20px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContent: { flex: 1 },
  itemTitle: { fontSize: "20px", color: "#333", marginBottom: "8px" },
  itemDesc: { color: "#666", marginBottom: "8px" },
  itemDueDate: { color: "#888", marginBottom: "8px" },
  itemReminder: { color: "#888", marginBottom: "8px" },
  itemStatus: { color: "#666", marginBottom: "8px" },
};

export default TaskDashboardPage;
