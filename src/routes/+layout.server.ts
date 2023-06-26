import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { handleLoginRedirect } from '$lib/util/handleLoginRedirect';

export const load: LayoutServerLoad = async ({ locals, route, url }) => {
	const { session, user } = await locals.auth.validateUser();

	if (route?.id?.includes('(protected)')) {
		if (!session) throw redirect(302, handleLoginRedirect(url));

        console.dir(user)

		return { user };
	}
};
