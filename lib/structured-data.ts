import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/rajat-kumar-thakur',
    },
    publisher: {
      '@type': 'Person',
      name: 'Rajat Kumar Thakur',
      url: 'https://rajatkumarthakur.dev',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rajat Kumar Thakur',
    description: "Software Engineer specializing in AI/ML, LLMs, and full-stack development. Building intelligent systems with RAG pipelines and agentic workflows.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Rajat Kumar Thakur',
      url: 'https://github.com/rajat-kumar-thakur',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajat Kumar Thakur',
    url: 'https://rajatkumarthakur.dev',
    image: 'https://rajatkumarthakur.dev/developer-portrait.png',
    sameAs: [
      'https://github.com/rajat-kumar-thakur',
      'https://x.com/RajatKrThakur04',
      'https://linkedin.com/in/rajat-kumar-thakur',
    ],
    jobTitle: 'Software Engineer Intern',
    worksFor: {
      '@type': 'Organization',
      name: 'Cableteque Corporation',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
