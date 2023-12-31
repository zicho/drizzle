import { redirect, type Actions, fail, error } from '@sveltejs/kit';
import { auth } from '$lib/db/lucia';
import { loginSchema } from '$lib/validationSchemas/loginSchema';
import { message, superValidate } from 'sveltekit-superforms/server';
import { parseLuciaError } from '$lib/util/parseLuciaError';
import type { LuciaError } from 'lucia-auth';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, loginSchema);
		if (!form.valid) return fail(400, { form });

		const { username, password } = form.data;

		try {
			const key = await auth.useKey('username', username, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (err) {
			console.dir(err);
			return message(form, parseLuciaError(err as unknown as LuciaError));
		}

		throw redirect(302, '/');
	}
};
