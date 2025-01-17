import { NextApiRequest, NextApiResponse } from 'next';

const DOMAIN = 'https://villiersjets.com';

const staticPages = [
	'',
	'/about',
	'/contact',
	'/blog',
	'/products',
	'/empty-legs',
	'/faq',
	'/privacy',
	'/terms'
];

function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${staticPages
				.map((path) => {
					return `
						<url>
							<loc>${DOMAIN}${path}</loc>
							<lastmod>${new Date().toISOString()}</lastmod>
							<changefreq>daily</changefreq>
							<priority>${path === '' ? '1.0' : '0.8'}</priority>
						</url>
					`;
				})
				.join('')}
		</urlset>`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const sitemap = generateSiteMap();

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();
}