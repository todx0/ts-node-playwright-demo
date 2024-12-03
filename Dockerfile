FROM mcr.microsoft.com/playwright:v1.49.0-noble
RUN npm install -g pnpm
WORKDIR /app
COPY . /app
RUN pnpm install