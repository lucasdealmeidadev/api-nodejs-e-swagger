import { prisma } from '../../lib/prisma'

export async function getUsersService() {
  const users = await prisma.user.findMany()

  return users
}