import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageBanner } from '../components/PageBanner';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

// This is mock data. In production, this would come from Sanity CMS
const newsArticles = [
  {
    id: '1',
    title: 'Green Up Gambia Achieves Milestone: 50,000 Trees Planted',
    slug: 'milestone-50000-trees-planted',
    excerpt: 'We are proud to announce that we have successfully planted our 50,000th tree across The Gambia, marking a significant milestone in our reforestation efforts.',
    content: 'Full article content would be here...',
    image: 'https://images.unsplash.com/photo-1604467724518-6d95b083c84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjB0cmVlJTIwcGxhbnRpbmd8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2024-12-05',
    readTime: '5 min read',
    category: 'Achievement',
    tags: ['Tree Planting', 'Milestone', 'Conservation'],
  },
  {
    id: '2',
    title: 'New Partnership with UNDP to Combat Coastal Erosion',
    slug: 'undp-partnership-coastal-erosion',
    excerpt: 'Green Up Gambia has partnered with UNDP to launch a comprehensive coastal protection program addressing erosion challenges.',
    content: 'Full article content would be here...',
    image: 'https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1iaWElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2024-11-28',
    readTime: '7 min read',
    category: 'Partnership',
    tags: ['Coastal Protection', 'UNDP', 'Climate Change'],
  },
  {
    id: '3',
    title: 'Youth Climate Summit 2024: Empowering the Next Generation',
    slug: 'youth-climate-summit-2024',
    excerpt: 'Over 500 young people gathered for our annual Youth Climate Summit to discuss climate action and sustainable development.',
    content: 'Full article content would be here...',
    image: 'https://images.unsplash.com/photo-1638894307657-92463154de83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwYWN0aW9uJTIwcHJvdGVzdHxlbnwxfHx8fDE3NjU0NjAwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2024-11-20',
    readTime: '6 min read',
    category: 'Event',
    tags: ['Youth', 'Education', 'Climate Summit'],
  },
  {
    id: '4',
    title: 'Solar Energy Project Brings Power to Rural Communities',
    slug: 'solar-energy-rural-communities',
    excerpt: 'Our new solar initiative has successfully brought clean, reliable electricity to five rural villages in the North Bank Region.',
    content: 'Full article content would be here...',
    image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjU0MTcxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2024-11-12',
    readTime: '8 min read',
    category: 'Project Update',
    tags: ['Solar Energy', 'Rural Development', 'Green Solutions'],
  },
  {
    id: '5',
    title: 'World Environment Day: 1,000 Volunteers Clean Gambian Beaches',
    slug: 'world-environment-day-beach-cleanup',
    excerpt: 'In celebration of World Environment Day, over 1,000 volunteers joined us for the largest beach cleanup in Gambian history.',
    content: 'Full article content would be here...',
    image: 'https://images.unsplash.com/photo-1642402806417-e451280d845b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjUzOTgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2024-06-05',
    readTime: '5 min read',
    category: 'Event',
    tags: ['Beach Cleanup', 'Volunteers', 'World Environment Day'],
  },
  {
    id: '6',
    title: 'New Report: Climate Change Impacts on Gambian Agriculture',
    slug: 'climate-change-agriculture-report',
    excerpt: 'Our latest research report examines how climate change is affecting agricultural practices and food security in The Gambia.',
    content: 'Full article content would be here...',
    image: 'https://images.unsplash.com/photo-1744726010540-bf318d4a691f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwYWZyaWNhfGVufDF8fHx8MTc2NTQ2NzE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2024-10-15',
    readTime: '10 min read',
    category: 'Research',
    tags: ['Climate Change', 'Agriculture', 'Research'],
  },
];

export function NewsPage() {
  const featuredArticle = newsArticles[0];
  const recentArticles = newsArticles.slice(1);

  return (
    <div className="pt-20">
      {/* Header Section */}
      <PageBanner
        title="News & Updates"
        description="Stay informed about our latest projects, environmental news, and climate action initiatives in The Gambia."
        backgroundImage="https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1iaWElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY1Nzg4NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* CMS Integration Notice */}
      {/* <section className="py-8 bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-blue-900 mb-2">📝 Content Management System Setup</h3>
              <p className="text-gray-700 text-sm mb-4">
                This page is ready to be connected to <strong>Sanity CMS</strong>. To enable content management:
              </p>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                <li>Create a free account at <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sanity.io</a></li>
                <li>Set up a new Sanity project with the "Blog" template</li>
                <li>Install the Sanity client: <code className="bg-gray-100 px-2 py-1 rounded">npm install @sanity/client</code></li>
                <li>Configure the client with your project ID and dataset</li>
                <li>Replace the mock data in this file with live Sanity queries</li>
              </ol>
              <p className="text-xs text-gray-500 mt-4">
                Currently showing mock data for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {featuredArticle.category}
                    </span>
                  </div>
                  
                  <h2 className="text-gray-900 mb-4">{featuredArticle.title}</h2>
                  
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      <span>{new Date(featuredArticle.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-green-600 hover:bg-green-700 w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-green-800 mb-8">Recent Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-56">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          <Tag className="size-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Read More
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-green-800 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news, project updates, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-lg flex-1 max-w-md"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}