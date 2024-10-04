import React from 'react';
import { Card, CardBody, Image, Button, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DigitalResourceDetailsComponent() {
  const mockDigitalResource = {
    title: 'Digital Resource Title',
    author: 'Author Name',
    formats: ['E-book', 'Audiobook'],
    status: 'Available',
    coverImage: 'https://example.com/book-cover.jpg'
  };

  const mockReview = {
    rating: 4,
    content: 'Great book! Highly recommended for all readers interested in this topic.'
  };

  const relatedResources = [
    {
      id: '1',
      title: 'Related Book 1',
      imageUrl: 'https://example.com/book1.jpg',
      logoIcon: 'logos:react'
    },
    {
      id: '2',
      title: 'Related Book 2',
      imageUrl: 'https://example.com/book2.jpg',
      logoIcon: 'logos:javascript'
    },
    {
      id: '3',
      title: 'Related Book 3',
      imageUrl: 'https://example.com/book3.jpg',
      logoIcon: 'logos:typescript-icon'
    },
    {
      id: '4',
      title: 'Related Book 4',
      imageUrl: 'https://example.com/book4.jpg',
      logoIcon: 'logos:nextjs-icon'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)]">
            <CardBody className="flex flex-col md:flex-row gap-4 p-4">
              <Image
                src={mockDigitalResource.coverImage}
                alt={`Cover of ${mockDigitalResource.title}`}
                className="w-full md:w-1/3 aspect-[3/4] object-cover rounded-md"
                fallbackSrc="https://via.placeholder.com/300x400?text=No+Image"
              />
              <div className="flex flex-col gap-2 w-full md:w-2/3">
                <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))]">
                  {mockDigitalResource.title}
                </h1>
                <p className="text-lg text-[hsl(var(--app-foreground-600))]">
                  {mockDigitalResource.author}
                </p>
                <p className="text-sm text-[hsl(var(--app-foreground-500))]">
                  Available Formats: {mockDigitalResource.formats.join(', ')}
                </p>
                <p className="text-sm font-semibold text-[hsl(var(--app-success-500))]">
                  {mockDigitalResource.status}
                </p>
                <div className="flex flex-row gap-2 mt-4">
                  <Button color="primary" className="px-4 py-2 rounded-md">
                    <Icon icon="hugeicons:book-open" className="mr-2" />
                    Borrow E-book
                  </Button>
                  <Button color="secondary" className="px-4 py-2 rounded-md">
                    <Icon icon="hugeicons:headphones" className="mr-2" />
                    Listen to Audiobook
                  </Button>
                  <Button color="default" className="px-4 py-2 rounded-md bg-[hsl(var(--app-background-200))] text-[hsl(var(--app-foreground-700))]">
                    <Icon icon="hugeicons:bookmark" className="mr-2" />
                    Place Hold
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-8">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] h-full">
            <CardBody className="p-4">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">Description</h2>
              <p className="text-[hsl(var(--app-foreground-700))]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-4">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] h-full">
            <CardBody className="p-4">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">Reviews</h2>
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    icon="hugeicons:star"
                    className={`text-[hsl(var(--app-warning-400))] mr-1 ${star <= mockReview.rating ? 'opacity-100' : 'opacity-30'}`}
                  />
                ))}
                <span className="text-lg font-bold text-[hsl(var(--app-foreground-800))] ml-2">
                  {mockReview.rating.toFixed(1)} out of 5
                </span>
              </div>
              <p className="mb-4 text-[hsl(var(--app-foreground-700))]">{mockReview.content}</p>
              <Link
                href="#"
                color="primary"
                className="text-[hsl(var(--app-primary-500))] underline cursor-pointer"
              >
                Read more reviews
              </Link>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12">
          <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedResources.map((resource) => (
              <Card 
                key={resource.id}
                isPressable
                isHoverable
                className="w-full aspect-[3/4] bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-small)] transition-all duration-200 ease-in-out hover:scale-105 hover:appShadow-[var(--app-box-shadow-medium)]"
              >
                <CardBody className="p-0 overflow-hidden">
                  <Image
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full aspect-square object-cover rounded-t-lg"
                  />
                  <div className="p-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-[hsl(var(--app-foreground-800))] line-clamp-2">
                      {resource.title}
                    </p>
                    <Icon icon={resource.logoIcon} className="w-6 h-6" />
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
