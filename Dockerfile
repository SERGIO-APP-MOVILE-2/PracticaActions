#dockerfile mibackend
FROM node:18-alpine
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install --production

# Copiar código
COPY . .

EXPOSE 3000

# Ejecutar servidor (ajusta si tu entrypoint es distinto)
CMD ["node", "src/server.js"]
