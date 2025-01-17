import Head from 'next/head';

interface SEOProps {
	title: string;
	description: string;
	canonical?: string;
	ogImage?: string;
	structuredData?: object;
}

export default function SEO({ 
	title, 
	description, 
	canonical = 'https://villiersjets.com', 
	ogImage = '/images/og-image.jpg',
	structuredData
}: SEOProps) {
	return (
		<Head>
			<title>{title} | Villiers Jets</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:url" content={canonical} />
			<meta name="twitter:card" content="summary_large_image" />
			<link rel="canonical" href={canonical} />
			{structuredData && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			)}
		</Head>
	);
}