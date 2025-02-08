// server/src/redis/redis.module.ts
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager'; // Правильный импорт
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT, // Преобразуем порт в число
      ttl: 600, // 10 минут
    }),
  ],
  exports: [CacheModule],
})
export class RedisModule {}