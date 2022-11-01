export default defineEventHandler(async (event) => {
	return await $fetch(`https://api.coinlore.net${event.req.url}`);
});
