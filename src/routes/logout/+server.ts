import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { auth } from '$lib/db/lucia';

export const GET: RequestHandler = async ({ locals }) => {
    console.dir("poo")
    const session = await locals.auth.validate();

    if(!session) {
        throw redirect(302, "/login")
    }

    auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null)

    throw redirect(302, "/login")
};