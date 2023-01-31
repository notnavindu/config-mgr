import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
/** @type {import('./$types').RequestHandler} */
export async function OPTIONS() {
	return new Response(null, {
		status: 200,
		statusText: 'OK',
		headers: {
			'content-type': 'application/json',
			'access-control-allow-origin': '*'
		}
	});
}


export const GET = (() => {
  return json({
		name: "MacroStash",
		version: 1
	});

}) satisfies RequestHandler;