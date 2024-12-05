import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../componentes/sidebar';
import '../assets/styles/TareasDisponibles.css';
import Pantallapc from '../assets/img/pantallapc.avif';
import Bateriamovil from '../assets/img/bateriacelular.jpeg';

const TareasDisponibles = () => {
  // Lista de tareas
  const tareas = [
    {
      id: 1,
      detalle: 'Reparación de pantalla',
      dispositivo: 'Computadora',
      estado: 'Pendiente',
      fechaInicio: '2024-12-01',
      fechaFin: '2024-12-10',
      imagen: Pantallapc,
      valor: 200,
      idCliente: 1,
      idEmpleado: null // No asignado
    },
    {
      id: 2,
      detalle: 'Reemplazo de batería',
      dispositivo: 'Teléfono',
      estado: 'En progreso',
      fechaInicio: '2024-12-05',
      fechaFin: '2024-12-15',
      imagen: Bateriamovil,
      valor: 100,
      idCliente: 2,
      idEmpleado: null // No asignado
    },
    // Agregar más tareas aquí
  ];

  // Lista de empleados disponibles (esto puede venir de la base de datos)
  const empleados = [
    { id: 1, nombre: 'Feliciano' },
    { id: 2, nombre: 'Maximiliano' },
    // Más empleados aquí
  ];

  // Estado para manejar el modal y el cliente seleccionado
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Abrir el modal y pasar la tarea seleccionada
  const openModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  // Manejar el cambio de los campos del cliente y empleado asignado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedTask({
      ...selectedTask,
      [name]: value,
    });
  };

  // Manejar la asignación de tarea a un empleado
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tarea asignada:', selectedTask);
    // Aquí enviarías los datos al backend para asignar la tarea
    closeModal();
  };

  return (
    <div className="client-dashboard">
      <Sidebar />
      <div className="client-profile">
        <h1 className="client-title">Tareas Disponibles</h1>

        <div className="tasks-list">
          <div className="cards-container">
            {tareas.map((tarea) => (
              <div key={tarea.id} className="task-card">
                <img src={tarea.imagen} alt={tarea.detalle} className="task-image" />
                <div className="task-details">
                  <h3>{tarea.detalle}</h3>
                  <p><strong>Dispositivo:</strong> {tarea.dispositivo}</p>
                  <p><strong>Estado:</strong> {tarea.estado}</p>
                  <p><strong>Fecha Inicio:</strong> {tarea.fechaInicio}</p>
                  <p><strong>Fecha Fin:</strong> {tarea.fechaFin}</p>
                  <p><strong>Valor:</strong> ${tarea.valor}</p>
                  <button onClick={() => openModal(tarea)} className="btn">Asignar Tarea</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de asignación de tarea */}
      {showModal && selectedTask && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Asignar Tarea</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="detalle">Detalle:</label>
                <p>{selectedTask.detalle}</p>
              </div>
              <div className="form-group">
                <label htmlFor="dispositivo">Dispositivo:</label>
                <p>{selectedTask.dispositivo}</p>
              </div>
              <div className="form-group">
                <label htmlFor="estado">Estado:</label>
                <p>{selectedTask.estado}</p>
              </div>
              <div className="form-group">
                <label htmlFor="fechaInicio">Fecha de Inicio:</label>
                <p>{selectedTask.fechaInicio}</p>
              </div>
              <div className="form-group">
                <label htmlFor="fechaFin">Fecha de Fin:</label>
                <p>{selectedTask.fechaFin}</p>
              </div>
              <div className="form-group">
                <label htmlFor="valor">Valor:</label>
                <p>${selectedTask.valor}</p>
              </div>
              <div className="form-group">
                <label htmlFor="empleado">Empleado Asignado:</label>
                <select
                  id="empleado"
                  name="idEmpleado"
                  value={selectedTask.idEmpleado || ''}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar Empleado</option>
                  {empleados.map((empleado) => (
                    <option key={empleado.id} value={empleado.id}>
                      {empleado.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn">Asignar Tarea</button>
                <button type="button" className="btn-cancel" onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TareasDisponibles;


