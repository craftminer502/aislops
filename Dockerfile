FROM node:24-slim AS build

WORKDIR /app

COPY package*.json ./

# Clean, reproducible install (important for audit consistency)
RUN npm ci

COPY . .

# Build the app (Vite/React/etc)
RUN npm run build


# --- Runtime image (clean, minimal) ---
FROM node:24-slim

WORKDIR /app

# Only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy only build output (NOT full source)
COPY --from=build /app/dist ./dist

EXPOSE 8080

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8080"]