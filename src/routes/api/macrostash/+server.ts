import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const OPTIONS = (()=>{
	return new Response(null, {
		status: 200,
		statusText: 'OK',
		headers: {
			'content-type': 'application/json',
			'access-control-allow-origin': '*'
		}
	});
}) satisfies RequestHandler;

export const GET = (() => {
	const config = {
		name: "MacroStash",
		version: 1
	}
  return new Response(JSON.stringify(config), {
	status: 200,
	statusText: 'OK',
	headers: {
		'content-type': 'application/json',
		'access-control-allow-origin': '*'
	}
});;

}) satisfies RequestHandler;