import { PrismaClient as PrismaClientCer0 } from '../../../prisma/generated/cer0';
import { PrismaClient } from '@prisma/client';

//! Se crea un cliente para cada db (TicketMas y Cero Central)


 export const prismaSer0 = new PrismaClientCer0({
    log: ['query', 'info', 'warn', 'error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL_SER0,
      },
    },
  });


 export const prismaTicketMas = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL_TASKMAS,
      },
    },
  });


