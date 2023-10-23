# Use the official Node.js 16 image as the base image
FROM node:16-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app
COPY . .
# Copy the project files into the container
# COPY ./scripts/package.json  .
RUN npm install --omit=dev

# Start a new stage with the base image
FROM node:16 AS runner

# Set the working directory
WORKDIR /usr/src/app

# Copy the build output and the node_modules folder from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the application888888888
CMD ["npm", "run", "start"]
