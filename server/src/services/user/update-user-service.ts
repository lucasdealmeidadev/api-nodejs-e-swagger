import { AppError } from '../../errors/app-error'
import { prisma } from '../../lib/prisma'

export async function updateUserService(
  { id, name, email }: { id: number, name: string, email: string }
) {
  const userAlreadyExists  = await prisma.user.findFirst({
    where: {
      email,
      NOT: { id }
    }
	});

  if (userAlreadyExists) {
    throw new AppError('E-mail já cadastrado', 409)
  }

  const user = prisma.user.update({
    select: {
      id: true,
      name: true,
      email: true,
      updated_at: true
    },
    data: { name, email },
    where: { id }
  })

  return user
}
