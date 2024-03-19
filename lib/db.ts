import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// Prevent PrismaClient from spawning on hot reload
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
