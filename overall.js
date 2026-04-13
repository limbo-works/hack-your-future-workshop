console.log('overall.js');
renderHeaderNavigation();

function normalizePath(path) {
	if (!path) return "/";

	let normalized = path;

	// Handle full URLs as well as relative paths.
	try {
		normalized = new URL(path, window.location.origin).pathname;
	} catch {
		normalized = path;
	}

	normalized = normalized.replace(/\/index\.html$/i, "/");

	if (!normalized.startsWith("/")) {
		normalized = `/${normalized}`;
	}

	return normalized;
}

function pathKey(path) {
	return normalizePath(path).replace(/^\/+|\/+$/g, "");
}

function isPathMatch(currentPath, href) {
	const currentNormalized = normalizePath(currentPath);
	const hrefNormalized = normalizePath(href);

	if (currentNormalized === hrefNormalized) return true;

	const currentKey = pathKey(currentNormalized);
	const hrefKey = pathKey(hrefNormalized);

	if (!currentKey || !hrefKey) return false;

	return hrefKey.startsWith(currentKey) || currentKey.startsWith(hrefKey);
}

function formatLabelFromPath(value) {
	const key = pathKey(value);
	if (!key) return "";

	const leaf = key.split("/").filter(Boolean).pop() || key;
	const withoutPrefix = leaf.replace(/^\d+(?:-\d+)*-/, "");

	return withoutPrefix
		.replace(/[-_]+/g, " ")
		.trim()
		.replace(/\b\w/g, (char) => char.toUpperCase());
}

function getLinkData(item) {
	if (typeof item === "string") {
		return {
			href: item,
			label: formatLabelFromPath(item),
		};
	}

	if (item && typeof item === "object") {
		const href = item.href || item.url || item.path || "";
		const sourceLabel = item.label || item.title || item.text || item.name || "";
		const label = sourceLabel || formatLabelFromPath(href);

		return { href, label };
	}

	return { href: "", label: "" };
}

function createNavLink(item) {
	const { href, label } = getLinkData(item);
	if (!href) return null;

	const link = document.createElement("a");
	link.href = href;
	link.textContent = label;
	return link;
}

async function renderHeaderNavigation() {
	const navigationHeader = document.getElementById("navigation-header");
	if (!navigationHeader) return;

	try {
		const response = await fetch("/navigation.json", { cache: "no-cache" });
		if (!response.ok) return;

		const navigation = await response.json();
		if (!Array.isArray(navigation) || navigation.length === 0) return;

		const currentPath = normalizePath(window.location.pathname);
		const currentIndex = navigation.findIndex((item) => {
			const { href } = getLinkData(item);
			return isPathMatch(currentPath, href);
		});

		const nextItem =
			currentIndex === -1 ? navigation[0] || null : navigation[currentIndex + 1] || null;

		navigationHeader.replaceChildren();

		const spacer = document.createElement("div");
		navigationHeader.appendChild(spacer);

		const nextLink = createNavLink(nextItem);

		if (nextLink) {
			navigationHeader.appendChild(nextLink);
		}
	} catch {
		// Keep the page usable if navigation data cannot be loaded.
	}
}
