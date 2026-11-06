// Eliminar mediciones antiguas (anteriores al 01-10-2026).
// Se limita la eliminación a un máximo de 10 documentos.
var medicionesIds = db.Mediciones.find(
  { fecha_medicion: { $lt: ISODate("2026-10-01T00:00:00Z") } },
  { _id: 1 }
).limit(10).toArray().map(m => m._id);

print(`Se borrarán ${medicionesIds.length} mediciones`);

if (medicionesIds.length > 0) {
  db.Mediciones.deleteMany({ _id: { $in: medicionesIds } });
}


// Eliminar alertas que se encuentren en estado resuelto.
// Se limita la eliminación a un máximo de 10 documentos.
var alertasIds = db.Alertas.find(
  { estado: "Resuelto" },
  { _id: 1 }
).limit(10).toArray().map(a => a._id);

print(`Se borrarán ${alertasIds.length} alertas`);

if (alertasIds.length > 0) {
  db.Alertas.deleteMany({ _id: { $in: alertasIds } });
}


// Eliminar dispositivos que se encuentren inactivos.
// Se limita la eliminación a un máximo de 10 documentos.
var dispositivosIds = db.Dispositivos.find(
  { estado: "Inactivo" },
  { _id: 1 }
).limit(10).toArray().map(d => d._id);

print(`Se borrarán ${dispositivosIds.length} dispositivos`);

if (dispositivosIds.length > 0) {
  db.Dispositivos.deleteMany({ _id: { $in: dispositivosIds } });
}
