import React from 'react';
import { Card, CardBody, Image, Chip, Button, ScrollShadow, Avatar } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookDetailsComponent() {
  const mockBookDetails = {
    title: 'Book Title',
    author: 'John Doe',
    publicationDate: 'January 1, 2024',
    isbn: '1234567890123',
    genre: 'Fiction',
    rating: 4.0,
    reviewCount: 120,
    availability: 'Available',
    coverImage: 'https://example.com/book-cover.jpg',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  };

  const mockRelatedBooks = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      coverUrl: 'https://example.com/great-gatsby-cover.jpg'
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      coverUrl: 'https://example.com/to-kill-a-mockingbird-cover.jpg'
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      coverUrl: 'https://example.com/1984-cover.jpg'
    },
    {
      id: '4',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      coverUrl: 'https://example.com/pride-and-prejudice-cover.jpg'
    }
  ];

  const mockReviews = [
    {
      id: '1',
      name: 'User Name',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      rating: 4,
      content: 'Great book! I couldn\'t put it down. The characters were well-developed and the plot was engaging throughout.'
    },
    {
      id: '2',
      name: 'Another User',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      rating: 3,
      content: 'Decent read, but I found some parts a bit slow. Overall, it was okay.'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] rounded-lg overflow-hidden">
            <CardBody className="flex flex-col md:flex-row gap-6 p-6">
              <div className="w-full md:w-1/3 lg:w-1/4 aspect-[3/4] rounded-md overflow-hidden">
                <Image
                  src={mockBookDetails.coverImage}
                  alt={`Cover of ${mockBookDetails.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))]">{mockBookDetails.title}</h1>
                <p className="text-lg text-[hsl(var(--app-foreground-700))]">{mockBookDetails.author}</p>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">{`Publication Date: ${mockBookDetails.publicationDate}`}</p>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">{`ISBN: ${mockBookDetails.isbn}`}</p>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">{`Genre: ${mockBookDetails.genre}`}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-[hsl(var(--app-warning-500))]">
                    {[...Array(5)].map((_, index) => (
                      <Icon
                        key={index}
                        icon={index < Math.floor(mockBookDetails.rating) ? 'hugeicons:star' : 'hugeicons:star-off'}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[hsl(var(--app-foreground-600))]">{`${mockBookDetails.rating.toFixed(1)} (${mockBookDetails.reviewCount} reviews)`}</span>
                </div>
                <Chip className="mt-2 w-fit" color="success" variant="flat">
                  {mockBookDetails.availability}
                </Chip>
                <div className="flex gap-2 mt-4">
                  <Button color="primary">Place Hold</Button>
                  <Button color="secondary" variant="flat">Add to Wishlist</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] rounded-lg overflow-hidden">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))] mb-2">Summary</h2>
              <p className="text-sm text-[hsl(var(--app-foreground-700))] leading-relaxed">{mockBookDetails.summary}</p>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] rounded-lg overflow-hidden">
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">Related Books</h2>
              <ScrollShadow
                orientation="horizontal"
                className="w-full"
                hideScrollBar
              >
                <div className="flex gap-4 py-2">
                  {mockRelatedBooks.map((book) => (
                    <Card
                      key={book.id}
                      className="w-48 h-72 bg-[hsl(var(--app-background-100))] rounded-md overflow-hidden"
                      isPressable
                    >
                      <CardBody className="p-0">
                        <Image
                          src={book.coverUrl}
                          alt={`Cover of ${book.title}`}
                          className="w-full h-48 object-cover"
                          isZoomed
                        />
                        <div className="p-2">
                          <h3 className="text-sm font-medium text-[hsl(var(--app-foreground-900))] line-clamp-2">{book.title}</h3>
                          <p className="text-xs text-[hsl(var(--app-foreground-600))] mt-1">{book.author}</p>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </ScrollShadow>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] rounded-lg overflow-hidden">
            <CardBody className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">User Reviews</h2>
              <div className="flex flex-col gap-4">
                {mockReviews.map((review) => (
                  <Card key={review.id} className="bg-[hsl(var(--app-background-100))] rounded-lg p-4">
                    <CardBody>
                      <div className="flex items-center mb-2">
                        <Avatar src={review.avatar} alt={review.name} className="w-10 h-10 mr-3" />
                        <div className="flex-grow">
                          <h3 className="text-sm font-semibold text-[hsl(var(--app-foreground-800))]">{review.name}</h3>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, index) => (
                            <Icon
                              key={index}
                              icon={index < review.rating ? 'hugeicons:star' : 'hugeicons:star-off'}
                              className={index < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                              width="20"
                              height="20"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-[hsl(var(--app-foreground-700))]">{review.content}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
