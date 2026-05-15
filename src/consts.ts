import siteData from './data/site.json';

export const SITE_TITLE = siteData.title;
export const SITE_TAGLINE = siteData.tagline;
export const SITE_DESCRIPTION = siteData.description;
export const AUTHOR = siteData.author;
export const AUTHOR_BIO = siteData.authorBio;
export const FOOTER_NOTE = siteData.footerNote;

export const CATEGORIES = ['Politics', 'Education', 'Issues', 'Commentary'] as const;
export type Category = (typeof CATEGORIES)[number];
