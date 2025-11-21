# MiBackend API

API sencilla en Express para probar con tu frontend.

## Endpoints
- `GET /api/ping` Salud del servicio.
- `GET /api/messages` Lista mensajes en memoria.
- `GET /api/messages/:id` Obtiene un mensaje por id.
- `POST /api/messages` Crea un mensaje `{ text: string }`.
- `DELETE /api/messages/:id` Elimina un mensaje.

## Instalación
```bash
npm install
```

## Ejecutar
```bash
npm run dev
```
Se levantará en `http://localhost:3000`.

## Colección Postman
Importa `postman_collection.json` en Postman para probar los endpoints.

## Nota
Los datos son en memoria, se reinician al reiniciar el servidor.
