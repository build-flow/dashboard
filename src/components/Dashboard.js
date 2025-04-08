import React, { useState } from 'react';
import Modal from 'react-modal';
import './Dashboard.css';

// Bind modal to the app element for accessibility
Modal.setAppElement('#root');

function Dashboard() {
  const [view, setView] = useState('calendar');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [newUnit, setNewUnit] = useState({
    name: '',
    type: '',
    startDate: '',
    endDate: '',
  });

  // Sample data for the Gantt chart (Calendar View)
  const tasks = [
    {
      month: 'January',
      activities: [
        { start: 5, end: 10, color: '#00C4B4' },
        { start: 15, end: 20, color: '#FFD700' },
      ],
    },
    {
      month: 'February',
      activities: [
        { start: 1, end: 8, color: '#00C4B4' },
        { start: 10, end: 15, color: '#FFD700' },
        { start: 20, end: 25, color: '#FF6347' },
      ],
    },
    {
      month: 'March',
      activities: [
        { start: 5, end: 15, color: '#4682B4' },
        { start: 20, end: 25, color: '#FFD700' },
      ],
    },
    {
      month: 'April',
      activities: [
        { start: 1, end: 10, color: '#00C4B4' },
        { start: 15, end: 20, color: '#4682B4' },
      ],
    },
    {
      month: 'May',
      activities: [
        { start: 5, end: 15, color: '#4682B4' },
        { start: 20, end: 25, color: '#FFD700' },
      ],
    },
    {
      month: 'June',
      activities: [
        { start: 1, end: 10, color: '#00C4B4' },
        { start: 15, end: 20, color: '#FF6347' },
      ],
    },
    {
      month: 'July',
      activities: [
        { start: 5, end: 10, color: '#00C4B4' },
        { start: 15, end: 20, color: '#FFD700' },
      ],
    },
    {
      month: 'August',
      activities: [
        { start: 1, end: 10, color: '#00C4B4' },
        { start: 15, end: 20, color: '#FF6347' },
      ],
    },
    {
      month: 'September',
      activities: [
        { start: 1, end: 10, color: '#00C4B4' },
        { start: 15, end: 20, color: '#4682B4' },
      ],
    },
    {
      month: 'October',
      activities: [
        { start: 5, end: 15, color: '#4682B4' },
        { start: 20, end: 25, color: '#FFD700' },
      ],
    },
    {
      month: 'November',
      activities: [
        { start: 5, end: 15, color: '#4682B4' },
        { start: 20, end: 25, color: '#FFD700' },
      ],
    },
    {
      month: 'December',
      activities: [
        { start: 1, end: 10, color: '#00C4B4' },
        { start: 15, end: 20, color: '#4682B4' },
      ],
    },

  ];

  // Sample data for the Unit View
  const [units, setUnits] = useState([
    {
      name: 'Unit 1',
      type: 'Residential',
      startDate: '2025-01-01',
      endDate: '2025-03-01',
      status: 'Completed',
    },
    {
      name: 'Unit 2',
      type: 'Commercial',
      startDate: '2025-02-01',
      endDate: '2025-04-01',
      status: 'In Progress',
    },
    {
      name: 'Unit 3',
      type: 'Industrial',
      startDate: '2025-03-01',
      endDate: '2025-05-01',
      status: 'Not Started',
    },
    {
      name: 'Unit 4',
      type: 'Residential',
      startDate: '2025-04-01',
      endDate: '2025-06-01',
      status: 'In Progress',
    },
  ]);

  // Sample data for the Kanban View
  const kanbanTasks = {
    todo: [
      {
        name: 'Task 1',
        description: 'Plan project timeline',
        status: 'To Do',
        statusColor: '#FF6347',
      },
      {
        name: 'Task 2',
        description: 'Gather requirements',
        status: 'To Do',
        statusColor: '#FF6347',
      },
    ],
    inProgress: [
      {
        name: 'Task 3',
        description: 'Design architecture',
        status: 'In Progress',
        statusColor: '#FFD700',
      },
      {
        name: 'Task 4',
        description: 'Develop prototype',
        status: 'In Progress',
        statusColor: '#FFD700',
      },
    ],
    done: [
      {
        name: 'Task 5',
        description: 'Initial research',
        status: 'Done',
        statusColor: '#00C4B4',
      },
    ],
  };

  const days = Array.from({ length: 30 }, (_, i) => i + 1); // 1 to 30 days

  const openModal = () => {
    setModalIsOpen(true);
    setSuccessMessage(''); // Reset success message when opening modal
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setNewUnit({ name: '', type: '', startDate: '', endDate: '' }); // Reset form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUnit((prevUnit) => ({
      ...prevUnit,
      [name]: value,
    }));
  };

  const handleSaveUnit = () => {
    // Add the new unit to the units list
    setUnits((prevUnits) => [
      ...prevUnits,
      { ...newUnit, status: 'Not Started' }, // Default status
    ]);
    setSuccessMessage('Saved successfully');
    setTimeout(() => {
      closeModal();
      setSuccessMessage('');
    }, 1000); // Close modal after 1 second
  };

  return (
    <div className="dashboard">
      <div className="dashboard-actions">
        <button className="add-unit-btn" onClick={openModal}>
          Add Unit
        </button>
        <div className="view-toggle">
          <button
            className={view === 'calendar' ? 'active' : ''}
            onClick={() => setView('calendar')}
          >
            Calendar View
          </button>
          <button
            className={view === 'unit' ? 'active' : ''}
            onClick={() => setView('unit')}
          >
            Unit View
          </button>
          <button
            className={view === 'kanban' ? 'active' : ''}
            onClick={() => setView('kanban')}
          >
            Kanban View
          </button>
        </div>
      </div>

      {/* Modal for Adding a Unit */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Add New Unit</h2>
        <div className="modal-form">
          <div className="form-group">
            <label htmlFor="name">Unit Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newUnit.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Unit Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={newUnit.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={newUnit.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={newUnit.endDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-buttons">
            <button className="save-btn" onClick={handleSaveUnit}>
              Save
            </button>
            <button className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </Modal>

      {view === 'calendar' && (
        <div className="gantt-chart">
          <div className="gantt-header">
            <div className="gantt-label">20XX</div>
            {days.map((day) => (
              <div key={day} className="gantt-day">
                {day}
              </div>
            ))}
          </div>
          {tasks.map((task, index) => (
            <div key={index} className="gantt-row">
              <div className="gantt-label">{task.month}</div>
              <div className="gantt-timeline">
                {days.map((day) => (
                  <div key={day} className="gantt-cell">
                    {task.activities.map((activity, i) => {
                      if (day >= activity.start && day <= activity.end) {
                        return (
                          <div
                            key={i}
                            className="gantt-task"
                            style={{
                              backgroundColor: activity.color,
                              width: '100%',
                              height: '20px',
                            }}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'unit' && (
        <div className="unit-view">
          <table className="unit-table">
            <thead>
              <tr>
                <th>Unit Name</th>
                <th>Unit Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit, index) => (
                <tr key={index}>
                  <td>{unit.name}</td>
                  <td>{unit.type}</td>
                  <td>{unit.startDate}</td>
                  <td>{unit.endDate}</td>
                  <td>
                    <span
                      className={`status ${
                        unit.status === 'Completed'
                          ? 'completed'
                          : unit.status === 'In Progress'
                          ? 'in-progress'
                          : 'not-started'
                      }`}
                    >
                      {unit.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'kanban' && (
        <div className="kanban-view">
          <div className="kanban-board">
            <div className="kanban-column">
              <h3 className="kanban-column-title">To Do</h3>
              {kanbanTasks.todo.map((task, index) => (
                <div key={index} className="kanban-card">
                  <h4>{task.name}</h4>
                  <p>{task.description}</p>
                  <div
                    className="kanban-status-bar"
                    style={{ backgroundColor: task.statusColor }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="kanban-column">
              <h3 className="kanban-column-title">In Progress</h3>
              {kanbanTasks.inProgress.map((task, index) => (
                <div key={index} className="kanban-card">
                  <h4>{task.name}</h4>
                  <p>{task.description}</p>
                  <div
                    className="kanban-status-bar"
                    style={{ backgroundColor: task.statusColor }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="kanban-column">
              <h3 className="kanban-column-title">Done</h3>
              {kanbanTasks.done.map((task, index) => (
                <div key={index} className="kanban-card">
                  <h4>{task.name}</h4>
                  <p>{task.description}</p>
                  <div
                    className="kanban-status-bar"
                    style={{ backgroundColor: task.statusColor }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;