import { redirect, error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/db/lucia';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { username, password, confirm_password } = Object.fromEntries(
			await request.formData()
		) as Record<string, string>;

		try {
			await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					username
				}
			});

			const key = await auth.useKey('username', username, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);

		} catch (err) {
			console.log(err);
			throw error(400, "Could not register user");
		}

		console.log("success")

		throw redirect(302, '/');
	}
};
