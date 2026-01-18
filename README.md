# NeuroSync - Prototipo UI

Este repositorio contiene un prototipo de interfaz para una aplicación de traducción de señas.

Cómo correrlo:
1. git fetch origin
2. git checkout feature/prototipo-ui
3. npm install
4. npm start

Formato de "código de robot" (JSON ejemplo):
{
  "hola": [
    { "servo": 1, "pos": 30, "time": 500 },
    { "servo": 2, "pos": 45, "time": 500 }
  ]
}

Notas:
- Login es un placeholder que podrás reemplazar por autenticación externa.
- El traductor incluye una demo de Web Speech API (reconocimiento de voz) que funciona en local/https.
- La funcionalidad de "Enviar al robot" está simulada mediante una animación; no se comunica con hardware real en el prototipo.
