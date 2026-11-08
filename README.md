# Proyecto de base de datos

## Presentación

Este repositorio reúne los archivos del proyecto de MongoDB para administrar espacios de un campus y monitorear sus condiciones ambientales mediante dispositivos IoT. El conjunto de datos representa espacios, dispositivos, mediciones y alertas; los scripts asociados permiten consultar y realizar operaciones sobre esa información.

## Modelo de información

La base de datos utiliza cuatro colecciones principales:

| Colección | Contenido | Relación principal |
|---|---|---|
| `espacios` | Salas, laboratorios, biblioteca y otros espacios, con ubicación, capacidad y estado. | Un espacio puede tener dispositivos asociados. |
| `dispositivos` | Sensores, sus características, configuración de umbrales y estado. | `espacio_id` identifica el espacio asociado. |
| `mediciones` | Lecturas ambientales, como temperatura, humedad, CO2 y luminosidad, junto con valor, unidad, fecha y estado. | `dispositivo_id` identifica el sensor que generó la lectura. |
| `alertas` | Avisos derivados de las condiciones registradas, incluyendo tipo, gravedad, estado y fecha. | En el conjunto principal se relacionan con mediciones, dispositivos y espacios. |

MongoDB es una base de datos documental: los registros son documentos y pueden incluir objetos anidados, por ejemplo, la configuración de umbrales de un dispositivo.

## Archivos del repositorio

| Archivo | Propósito |
|---|---|
| [`Estructuradelosdatos.txt`](./Estructuradelosdatos.txt) | Ejemplos de la estructura de los documentos de las colecciones. |
| [`inserts.js`](./inserts.js) | Script ejecutable de carga de datos para espacios, dispositivos, mediciones y alertas, incluidas las inserciones complementarias. |
| [`insertsprincipales.txt`](./insertsprincipales.txt) | Archivo de texto original con las inserciones, conservado como referencia. |
| [`ScriptsFind.txt`](./ScriptsFind.txt) | Consultas de lectura y filtros sobre las colecciones. |
| [`ScriptsConsultasAvanzadas.txt`](./ScriptsConsultasAvanzadas.txt) | Consultas y agregaciones para analizar las mediciones y los espacios. |
| [`ScriptsUpdate.txt`](./ScriptsUpdate.txt) | Ejemplos de actualización de un documento y de varios documentos. |
| [`ScriptsDelete.js`](./ScriptsDelete.js) | Ejemplos de eliminación acotada de mediciones y alertas. Revisar la nota de ejecución segura antes de usarlo. |
| [`InformeMongo (1).pdf`](./InformeMongo%20(1).pdf) | Informe complementario del proyecto. |

## Preparación y carga de datos

Se requiere MongoDB Shell (`mongosh`), disponible desde [la página de descarga de MongoDB Shell](https://www.mongodb.com/try/download/shell).

1. Conectarse al despliegue de MongoDB Atlas con la URI, el usuario y la contraseña entregados por el curso. Las credenciales no forman parte de este repositorio y deben ingresarse de manera segura.
2. Seleccionar la base de datos que corresponde al proyecto:

   ```javascript
   use NOMBRE_DE_LA_BASE
   ```

3. Ejecutar el script de carga desde `mongosh`, reemplazando la ruta por la ubicación local del archivo:

   ```javascript
   load("C:\\ruta\\al\\proyecto\\inserts.js")
   ```

   El script se ejecuta en el contexto de la base seleccionada y realiza las inserciones en las colecciones `espacios`, `dispositivos`, `mediciones` y `alertas`.

La carga está ordenada por dependencias: primero se crean espacios y dispositivos; luego se insertan mediciones y alertas que utilizan las referencias definidas previamente. Se recomienda ejecutarla una vez en una base vacía o de prueba. Volver a ejecutarla genera documentos adicionales, ya que usa nuevos `ObjectId`.

## Verificación

Al finalizar la carga, se pueden comprobar las cantidades y revisar algunos documentos:

```javascript
db.espacios.countDocuments()
db.dispositivos.countDocuments()
db.mediciones.countDocuments()
db.alertas.countDocuments()

db.espacios.findOne()
db.dispositivos.findOne()
db.mediciones.findOne()
db.alertas.findOne()
```

