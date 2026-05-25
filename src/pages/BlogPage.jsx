import PageHero from '../components/ui/PageHero';
import BlogPageIntro from '../components/sections/blog/BlogPageIntro';
import BlogCategories from '../components/sections/blog/BlogCategories';
import BlogWhyMatters from '../components/sections/blog/BlogWhyMatters';
import { pageHero } from '../data/content';

export default function BlogPage() {
  return (
    <>
      <PageHero
        title={pageHero.blog.title}
        description={pageHero.blog.description}
        image={pageHero.blog.image}
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <BlogPageIntro />
      <BlogCategories />
      <BlogWhyMatters />
    </>
  );
}
