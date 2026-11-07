db.Mediciones.insertMany([
  // Datos para probar la eliminación de mediciones antiguas
  {
    _id: ObjectId(),
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 25.5,
    unidad: "°C",
    fecha_medicion: ISODate("2026-09-10T10:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Normal"
  },
  {
    _id: ObjectId(),
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "humedad",
    valor: 65,
    unidad: "%",
    fecha_medicion: ISODate("2026-09-15T12:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Normal"
  },

  // Datos para probar la eliminación de temperaturas anormales
  {
    _id: ObjectId(),
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 42.3,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-02T11:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Anormal"
  },
  {
    _id: ObjectId(),
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 45.8,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-03T12:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Anormal"
  },
  {
    _id: ObjectId(),
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 51.6,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-05T14:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Anormal"
  },
  {
    _id: ObjectId(),
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 38.2,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-04T13:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Normal"
  }
]);

db.Alertas.insertMany([
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-001",
    tipo_alerta: "Temperatura elevada",
    descripcion: "Temperatura superior al límite establecido",
    estado: "Resuelto",
    fecha_alerta: ISODate("2026-09-10T10:30:00Z")
  },
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-002",
    tipo_alerta: "Humedad baja",
    descripcion: "Humedad inferior al nivel recomendado",
    estado: "Resuelto",
    fecha_alerta: ISODate("2026-09-15T12:30:00Z")
  },
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-003",
    tipo_alerta: "Temperatura elevada",
    descripcion: "Se detectó una temperatura crítica",
    estado: "Pendiente",
    fecha_alerta: ISODate("2026-10-20T14:00:00Z")
  },
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-001",
    tipo_alerta: "Humedad elevada",
    descripcion: "Humedad superior al límite establecido",
    estado: "En revisión",
    fecha_alerta: ISODate("2026-11-01T09:00:00Z")
  }
]);

db.Dispositivos.insertMany([
  {
    _id: ObjectId(),
    nombre: "Sensor Ambiental 02",
    tipo: "Multisensor",
    fabricante: "SensorTech",
    modelo: "ST-100",
    estado: "Inactivo",
    espacio_id: ObjectId("690000000000000000000001"),
    fecha_instalacion: ISODate("2026-09-01T10:00:00Z")
  },
  {
    _id: ObjectId(),
    nombre: "Sensor Ambiental 03",
    tipo: "Multisensor",
    fabricante: "SensorTech",
    modelo: "ST-100",
    estado: "Activo",
    espacio_id: ObjectId("690000000000000000000001"),
    fecha_instalacion: ISODate("2026-10-01T10:00:00Z")
  },
  {
    _id: ObjectId(),
    nombre: "Sensor Ambiental 04",
    tipo: "Multisensor",
    fabricante: "SensorTech",
    modelo: "ST-100",
    estado: "Inactivo",
    espacio_id: ObjectId("690000000000000000000001"),
    fecha_instalacion: ISODate("2026-10-15T10:00:00Z")
  }
]);