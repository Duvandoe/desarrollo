import React, { useState } from 'react';
import { FaTools } from 'react-icons/fa';
import '../assets/styles/Reparaciones.css';

const DeviceRepair = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDevice, setNewDevice] = useState({
    name: '',
    status: 'En Proceso',
    image: '',
    details: '',
  });
  const [devicesInRepair, setDevicesInRepair] = useState([
    {
      id: '123',
      name: 'Laptop Dell XPS',
      status: 'En Proceso',
      employee: 'Feliciano',
      startDate: '2024-11-01',
      endDate: '2024-11-15',
      image: 'https://via.placeholder.com/150',
      details: 'Reemplazo de teclado y batería.',
    },
    {
      id: '124',
      name: 'iPhone 12',
      status: 'En Proceso',
      employee: 'Maximiliano',
      startDate: '2024-11-05',
      endDate: '2024-11-20',
      image: 'https://via.placeholder.com/150',
      details: 'Reemplazo de pantalla y limpieza interna.',
    },
  ]);

  const openModal = (device) => {
    setSelectedDevice(device);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDevice(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDevice({
      ...newDevice,
      [name]: value,
    });
  };

  const handleAddRepair = (e) => {
    e.preventDefault();
    const newRepair = { ...newDevice, id: `${Date.now()}` };
    setDevicesInRepair([...devicesInRepair, newRepair]);
    setNewDevice({
      name: '',
      status: 'En Proceso',
      image: '',
      details: '',
    });
    setShowAddModal(false); // Cerrar el modal después de añadir
  };

  return (
    <div className="device-repair-container">
      <h2>Mis Dispositivos en Reparación</h2>

      <div className="add-repair-btn-container">
        <button className="btn-añadir" onClick={() => setShowAddModal(true)}>
          Añadir Reparación
        </button>
      </div>

      <div className="device-cards">
        {devicesInRepair.map((device) => (
          <div className="device-card" key={device.id}>
            <img src={device.image} alt={device.name} className="device-image" />
            <div className="device-details">
              <h3>{device.name}</h3>
              <p><strong>Estado:</strong> {device.status}</p>
              <p><strong>Empleado responsable:</strong> {device.employee}</p>
              <p><strong>Fecha de inicio:</strong> {device.startDate}</p>
              <p><strong>Fecha de fin:</strong> {device.endDate}</p>
            </div>
            <button
              className="view-details-btn"
              onClick={() => openModal(device)}
            >
              <FaTools /> Ver detalles
            </button>
          </div>
        ))}
      </div>

      {/* Modal para Añadir Reparación */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Añadir Nueva Reparación</h2>
            <form onSubmit={handleAddRepair}>
              <div className="form-group">
                <label htmlFor="name">Nombre del Dispositivo:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newDevice.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="details">Detalles de la Reparación:</label>
                <textarea
                  id="details"
                  name="details"
                  value={newDevice.details}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Imagen del Dispositivo:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  value={newDevice.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-añadir">
                Añadir Reparación
              </button>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowAddModal(false)}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal para Ver Detalles */}
      {showModal && selectedDevice && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Detalles de la Reparación</h2>
            <img
              src={selectedDevice.image}
              alt={selectedDevice.name}
              className="device-image"
            />
            <p><strong>Nombre:</strong> {selectedDevice.name}</p>
            <p><strong>Estado:</strong> {selectedDevice.status}</p>
            <p><strong>Empleado responsable:</strong> {selectedDevice.employee}</p>
            <p><strong>Fecha de inicio:</strong> {selectedDevice.startDate}</p>
            <p><strong>Fecha de fin:</strong> {selectedDevice.endDate}</p>
            <p><strong>Detalles:</strong> {selectedDevice.details}</p>
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceRepair;




