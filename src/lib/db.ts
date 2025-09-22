import { PrismaClient } from '@prisma/client'

// Check if we're in static export mode
const isStaticExport = process.env.NEXT_EXPORT === 'true'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = isStaticExport 
  ? null 
  : globalForPrisma.prisma ??
    new PrismaClient({
      log: ['query'],
    })

if (process.env.NODE_ENV !== 'production' && !isStaticExport && db) {
  globalForPrisma.prisma = db
}