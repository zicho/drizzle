import { redirect, type Actions, fail, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/db/lucia';

export const actions: Actions = {
	default: async ({ request, cookies, locals }) => {
		const { username, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			const key = await auth.useKey('username', username, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (err) {
			console.log(err);
			throw error(400, { message: 'Could not login.' });
		}

		throw redirect(302, '/');
	}
};
