// Eliminar mediciones anteriores al 01-10-2026 del dispositivo ESP32-001.
// Se limita la eliminación a un máximo de 10 documentos.
var medicionesIds = db.Mediciones.find(
  {
    $and: [
      { fecha_medicion: { $lt: ISODate("2026-10-01T00:00:00Z") } },
      { origen: { $eq: "Sensor IoT" } }
    ]
  },
  { _id: 1 }
).sort({ fecha_medicion: 1 }).limit(10).toArray().map(m => m._id);

print(`Se borrarán ${medicionesIds.length} mediciones`);

if (medicionesIds.length > 0) {
  db.Mediciones.deleteMany({ _id: { $in: medicionesIds } });
}


// Eliminar alertas que se encuentren en estado resuelto.
// Se limita la eliminación a un máximo de 10 documentos.
var alertasIds = db.Alertas.find(
  {
    $or: [
      { estado: { $eq: "Resuelto" } },
      { tipo_alerta: { $eq: "Humedad baja" } }]
  },
  { _id: 1 }
).limit(10).toArray().map(a => a._id);

print(`Se borrarán ${alertasIds.length} alertas`);

if (alertasIds.length > 0) {
  db.Alertas.deleteMany({ _id: { $in: alertasIds } });
}


// Eliminar dispositivos que se encuentren inactivos.
// Se limita la eliminación a un máximo de 10 documentos.
var dispositivosIds = db.Dispositivos.find(
  { estado: { $not: {$eq: "Activo"}} },
  { _id: 1 }
).limit(10).toArray().map(d => d._id);

print(`Se borrarán ${dispositivosIds.length} dispositivos`);

if (dispositivosIds.length > 0) {
  db.Dispositivos.deleteMany({ _id: { $in: dispositivosIds } });
}

// Eliminar mediciones de temperatura superiores a 40 °C.
// Se limita la eliminación a un máximo de 10 documentos.
var medicionesIds = db.Mediciones.find(
{
  $and: [
    { variable: { $regex: /^temperatura$/i } },
    { valor: { $gt: 40 } },
    { estado_medicion: { $eq: "Anormal" } }
  ]
},
  { _id: 1 }
).sort({ valor: -1 }).limit(10).toArray().map(m => m._id);

print(`Se borrarán ${medicionesIds.length} mediciones`);

if (medicionesIds.length > 0) {
  db.Mediciones.deleteMany({ _id: { $in: medicionesIds } });
}