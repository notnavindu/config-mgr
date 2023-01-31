import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
export const GET = (() => {
  return json({
		name: "MacroStash",
		version: 1
	});

}) satisfies RequestHandler;