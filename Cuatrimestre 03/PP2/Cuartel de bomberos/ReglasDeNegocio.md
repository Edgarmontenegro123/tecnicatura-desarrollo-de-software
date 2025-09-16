**Restricciones**

* Disponibilidad del cuartel: que no esté ocupado en otro siniestro.
* Distancia máxima de respuesta: no asignar un cuartel demasiado lejano aunque sea especializado.
* Recursos mínimos: el cuartel debe contar con cierto número de bomberos, materiales o vehículos listos.
* Tiempo de respuesta estimado: no debe superar un umbral definido (ej. 20 minutos).
* Cobertura geográfica: un cuartel no puede atender fuera de su zona asignada salvo emergencias mayores.

**Validaciones**

* Tipo de siniestro registrado: que sea válido (incendio, rescate, accidente, materiales peligrosos, etc.).
* Datos del siniestro completos: ubicación exacta, tipo, hora.
* Estado de los recursos: que el cuartel tenga agua, equipamiento en condiciones, ambulancia si se requiere, etc.
* Revisión de duplicados: evitar generar dos alertas para el mismo incidente.
* Confirmación de disponibilidad en tiempo real: chequear que el cuartel siga libre justo antes de asignarlo.

**Inferencias (inteligencia en la decisión)**

* Inferir prioridad: según la gravedad del siniestro (ej. incendio con personas atrapadas > incendio de pastizales).
* Inferir mejor combinación de cuarteles: si uno especializado está lejos y otro cercano no lo está, se puede enviar dos cuarteles en conjunto.
* Inferir riesgo por contexto: viento, clima, materiales peligrosos → ajustar selección de cuartel.
* Inferir refuerzos: si el sistema detecta que el cuartel seleccionado podría ser insuficiente, disparar apoyo de otro cuartel automáticamente.
