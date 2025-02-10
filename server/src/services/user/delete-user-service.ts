import { AppError } from '../../errors/app-error'
import { prisma } from '../../lib/prisma'

export async function deleteUserService({ id }: { id: number }) {
	const user = await prisma.user.findFirst({
		where: { id },
	});

	if (!user) {
   throw new AppError('Usuário não encontrado', 404)
	}

	await prisma.user.delete({
    where: { id }
  })
}
