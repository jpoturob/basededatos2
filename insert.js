

// ==========================================
// 1. INSERTAR MEDICIONES
// ==========================================

db.Mediciones.insertMany([
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-001",
    temperatura: 24.5,
    humedad: 65,
    fecha_medicion: ISODate("2026-09-10T10:00:00Z")
  },
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-002",
    temperatura: 27.3,
    humedad: 70,
    fecha_medicion: ISODate("2026-09-15T12:00:00Z")
  },
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-003",
    temperatura: 30.1,
    humedad: 80,
    fecha_medicion: ISODate("2026-09-20T14:00:00Z")
  },
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-001",
    temperatura: 22.8,
    humedad: 60,
    fecha_medicion: ISODate("2026-10-15T10:00:00Z")
  },
  {
    _id: ObjectId(),
    id_dispositivo: "ESP32-002",
    temperatura: 25.2,
    humedad: 68,
    fecha_medicion: ISODate("2026-11-02T15:00:00Z")
  }
]);


// ==========================================
// 2. INSERTAR ALERTAS
// ==========================================

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


// ==========================================
// 3. INSERTAR DISPOSITIVOS
// ==========================================

db.Dispositivos.insertMany([
  {
    _id: ObjectId(),
    nombre: "Sensor de temperatura 01",
    tipo: "Temperatura",
    estado: "Inactivo",
    ubicacion: "Invernadero A"
  },
  {
    _id: ObjectId(),
    nombre: "Sensor de humedad 02",
    tipo: "Humedad",
    estado: "Inactivo",
    ubicacion: "Invernadero B"
  },
  {
    _id: ObjectId(),
    nombre: "Sensor ambiental 03",
    tipo: "Multisensor",
    estado: "Activo",
    ubicacion: "Invernadero C"
  },
  {
    _id: ObjectId(),
    nombre: "Sensor ambiental 04",
    tipo: "Multisensor",
    estado: "Activo",
    ubicacion: "Invernadero A"
  }
]);

print("Inserciones de prueba realizadas correctamente.");


// ==========================================
// 4. INSERTAR MEDICIONES
// ==========================================

db.Mediciones.insertMany([
  {
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 25.5,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-01T10:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Normal"
  },
  {
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 42.3,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-02T11:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Anormal"
  },
  {
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 45.8,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-03T12:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Anormal"
  },
  {
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 38.2,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-04T13:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Normal"
  },
  {
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 51.6,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-05T14:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Anormal"
  },
  {
    dispositivo_id: ObjectId("690000000000000000000002"),
    variable: "temperatura",
    valor: 30.0,
    unidad: "°C",
    fecha_medicion: ISODate("2026-11-06T15:00:00Z"),
    origen: "Sensor IoT",
    estado_medicion: "Normal"
  }
]);

print("Mediciones de prueba insertadas correctamente.");