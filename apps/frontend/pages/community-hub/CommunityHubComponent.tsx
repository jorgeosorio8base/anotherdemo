import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Spacer } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function CommunityHubComponent() {
  const featuredReviews = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      excerpt: 'A classic that still resonates today. The characters are unforgettable...',
      rating: 4,
      reviewer: 'John D.'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      excerpt: 'A chilling portrayal of a totalitarian future. Orwell\'s vision is disturbingly prescient...',
      rating: 5,
      reviewer: 'Sarah M.'
    }
  ];

  const trendingDiscussions = [
    {
      id: 1,
      title: 'Best sci-fi novels of the decade',
      replies: 32,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: 'Book vs. Movie: The Great Gatsby',
      replies: 18,
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      title: 'Reading challenges for 2024',
      replies: 45,
      timeAgo: '1 day ago'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Author Meet & Greet: Jane Doe',
      date: 'July 15, 2024',
      time: '6:00 PM - 8:00 PM',
      description: 'Join us for an evening with bestselling author Jane Doe as she discusses her latest novel.'
    },
    {
      id: 2,
      title: 'Book Club: Mystery Lovers',
      date: 'July 22, 2024',
      time: '7:00 PM - 9:00 PM',
      description: 'This month we\'re reading "The Silent Patient" by Alex Michaelides. All welcome!'
    },
    {
      id: 3,
      title: 'Children\'s Story Time',
      date: 'Every Saturday',
      time: '10:00 AM - 11:00 AM',
      description: 'Bring your little ones for an hour of magical storytelling and fun activities.'
    }
  ];

  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-8">Community Hub</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-8">
            <h2 className="text-2xl font-bold mb-4">Featured Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredReviews.map((review) => (
                <Card key={review.id} className="bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-primary-200))] shadow-[var(--app-box-shadow-small)] h-full">
                  <CardBody>
                    <h3 className="text-xl font-semibold">{review.title}</h3>
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">by {review.author}</p>
                    <p className="mt-2">{review.excerpt}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          icon={i < review.rating ? 'hugeicons:star' : 'hugeicons:star-off'} 
                          className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                      <span className="ml-2 text-sm">by {review.reviewer}</span>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
            <Spacer y={4} />
            <Button color="primary">Write a Review</Button>
          </section>
          
          <section className="lg:col-span-4">
            <h2 className="text-2xl font-bold mb-4">Trending Discussions</h2>
            <Card className="bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-primary-200))] shadow-[var(--app-box-shadow-small)]">
              <CardBody>
                {trendingDiscussions.map((discussion) => (
                  <div key={discussion.id} className="flex justify-between items-center p-3 border-b border-[hsl(var(--app-primary-100))] last:border-b-0">
                    <span className="font-semibold">{discussion.title}</span>
                    <span className="text-sm text-[hsl(var(--app-foreground-600))]">
                      {discussion.replies} replies • {discussion.timeAgo}
                    </span>
                  </div>
                ))}
              </CardBody>
            </Card>
            <Spacer y={4} />
            <Button color="success">Start a Discussion</Button>
          </section>
        </div>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-primary-200))] shadow-[var(--app-box-shadow-small)] h-full">
                <CardHeader>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                </CardHeader>
                <CardBody>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p className="mt-2">{event.description}</p>
                </CardBody>
                <CardFooter>
                  <Button color="primary" size="sm">
                    {event.id === 1 ? 'RSVP' : event.id === 2 ? 'Join' : 'Learn More'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
