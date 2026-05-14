export const SITE_TITLE = 'Utah Opinions';
export const SITE_TAGLINE = 'Writing on Utah politics, education, and the issues that shape our state.';
export const SITE_DESCRIPTION =
	'Essays and commentary on Utah politics, education, and public life by Sam Rose.';
export const AUTHOR = 'Sam Rose';
export const AUTHOR_BIO =
	'Sam Rose writes about Utah politics, education, and public policy.';

export const CATEGORIES = ['Politics', 'Education', 'Issues', 'Commentary'] as const;
export type Category = (typeof CATEGORIES)[number];
