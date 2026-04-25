/** Normalizes t.me or full URL to a display handle. */
export function formatTelegramHandle(raw: string) {
	const path = raw.replace(/^https?:\/\//i, "").replace(/^t\.me\//i, "").split("/")[0] ?? "";
	return path.startsWith("@") ? path : `@${path}`;
}
