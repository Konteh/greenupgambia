import React from 'react';
import { Card } from '../components/ui/card';
import { PageBanner } from '../components/PageBanner';
import { Play, Calendar, Clock } from 'lucide-react';

export function FilmsPage() {
  const films = [
    {
      id: 1,
      title: 'THE GREAT GREEN WALL TRAILER',
      description: 'A Buena Vista Social Club meets Years of Living Dangerously, renowned Malian singer Inna Modja takes us on a music-driven journey of hope, hardship, and perseverance across Africa’s ambitious Great Green Wall',
      youtubeId: 'kB1qK_yBVxU', // Replace with actual YouTube video ID
      duration: '12:34',
      date: 'December 2024',
      category: 'Documentary',
    },
    {
      id: 2,
      title: 'Greenup tree planting excercise',
      description: 'Exploring the vital importance of the Gambia River ecosystem and the threats it faces from climate change and pollution.',
      youtubeId: '1K8iD2rZDnc', // Replace with actual YouTube video ID
      duration: '18:45',
      date: 'October 2024',
      category: 'Documentary',
    },
    {
      id: 3,
      title: 'KMC Bakoteh Dumpsite',
      description: 'The Bakoteh dumpsite has been operating for more than three decades where refuse from the municipality is being dumped without any treatment, sorting or management. The dumpsite is located within a densely populated area surrounded by several communities',
      youtubeId: 'iCU45MISZHM', // Replace with actual YouTube video ID
      duration: '15:22',
      date: 'August 2024',
      category: 'Interview Series',
    },
    {
      id: 4,
      title: 'Nna Saama Mankolou - Ecosystem Restoration',
      description: 'An in-depth look at how climate change is affecting Gambia\'s coastline and what we\'re doing to combat erosion.',
      youtubeId: 'fHm0Wevli08', // Replace with actual YouTube video ID
      duration: '20:15',
      date: 'June 2024',
      category: 'Climate Change',
    },
    {
      id: 5,
      title: 'Voices of civil societies on land use in The Gambia',
      description: 'Top soil loss in the Gambia and How waste can be used to create top soil and help save the Gambias vegetation',
      youtubeId: 'Yd5TacVGzQY', // Replace with actual YouTube video ID
      duration: '14:30',
      date: 'April 2024',
      category: 'Educational',
    },
    {
      id: 6,
      title: 'Fishmeal Factories in the Gambia | Mini Docu: Nation Of Destruction',
      description: 'Nation of Destruction is mini documentary made through the eyes of the locals. The people in Kartong, Sanyang and Gunjur are facing a massive environmental disaster since Chinese owned fishmeal factories started operating along Gambias beaches.',
      youtubeId: 'OxLw3x-TW_w', // Replace with actual YouTube video ID
      duration: '16:48',
      date: 'February 2024',
      category: 'Documentary',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <PageBanner
        title="Films & Documentaries"
        description="Watch our documentary films and videos highlighting climate change impacts, conservation efforts, and inspiring stories from communities across The Gambia."
        backgroundImage="https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1iaWElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY1Nzg4NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Films Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film) => (
              <Card key={film.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${film.youtubeId}`}
                    title={film.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {film.category}
                    </span>
                  </div>
                  
                  <h3 className="text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {film.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">{film.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      <span>{film.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-4" />
                      <span>{film.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-green-800 mb-4">Have a Story to Share?</h2>
            <p className="text-gray-600 mb-6">
              If you have footage or stories related to environmental conservation in The Gambia, we'd love to collaborate with you.
            </p>
            <p className="text-sm text-gray-500">
              Note: Replace the YouTube video IDs in the code with your actual video IDs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}