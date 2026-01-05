# Stage 1: build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json dan lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Optional: build project (misal Next.js)
RUN npm run build

# Stage 2: production image
FROM node:20-alpine

WORKDIR /app

# Copy node_modules dan hasil build dari stage 1
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app . 

# Set environment
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]