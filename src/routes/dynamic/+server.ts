import { env } from '$env/dynamic/public';
import { DYNAMIC_VAR_2 } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ( ) => {
    return new Response(env.PUBLIC_DYNAMIC_VAR + ' ' + DYNAMIC_VAR_2)
}