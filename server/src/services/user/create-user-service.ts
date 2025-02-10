import { AppError } from '../../errors/app-error'
import { prisma } from '../../lib/prisma'

export async function createUserService({
	name,
	email,
}: { name: string; email: string }) {
	const userAlreadyExists  = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (userAlreadyExists ) {
   throw new AppError('E-mail já cadastrado', 409)
	}

	const user = await prisma.user.create({
    select: {
      id: true,
      name: true,
      email: true,
      created_at: true
    },
		data: { name, email },
	});

  return user
}
