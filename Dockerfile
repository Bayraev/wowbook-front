# Устанавливаем базовый образ
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем весь проект и собираем его
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner

WORKDIR /app

# Копируем необходимые файлы из стадии сборки
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Указываем переменные окружения для Next.js
ENV NODE_ENV=production

# Запускаем Next.js приложение
CMD ["npm", "start"]
