import { PUBLIC_STATIC_VAR } from '$env/static/public';
import { STATIC_VAR_2 } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ( ) => {
    return new Response(PUBLIC_STATIC_VAR + ' ' + STATIC_VAR_2)
}