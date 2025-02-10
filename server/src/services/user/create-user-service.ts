import { AppError } from '../../errors/app-error'
import { prisma } from '../../lib/prisma'

export async function createUserService({
	name,
	email,
}: { name: string; email: string }) {
	const user = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (user) {
   throw new AppError('E-mail já cadastrado', 409)
	}

	await prisma.user.create({
		data: {
			name,
			email,
		},
	});
}
