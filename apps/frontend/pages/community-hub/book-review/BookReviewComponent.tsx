import React from 'react';
import { Input, Card, CardHeader, CardBody, Button, Textarea, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookReviewComponent() {
  const mockReviews = [
    {
      author: 'John Doe',
      rating: 4,
      content: 'Great read! The author\'s storytelling is captivating.',
      tags: ['Fiction', 'Mystery']
    },
    {
      author: 'Jane Smith',
      rating: 5,
      content: 'Couldn\'t put it down! A must-read for any book lover.',
      tags: ['Bestseller', 'Thriller']
    }
  ];

  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen">
      <header className="bg-[hsl(var(--app-background-50))] p-4 sm:p-6 border-b border-[hsl(var(--app-foreground-200))]">
        <h1 className="text-[hsl(var(--app-primary-500))] text-2xl sm:text-3xl font-bold mb-4">Book Review</h1>
        <Input
          type="text"
          placeholder="Search for a book to review..."
          className="w-full max-w-xl"
          classNames={{
            base: "bg-[hsl(var(--app-background-100))] rounded-full",
            inputWrapper: "shadow-[var(--app-box-shadow-small)]"
          }}
          startContent={
            <Icon
              icon="hugeicons:search-02"
              className="text-[hsl(var(--app-foreground-400))] text-xl"
            />
          }
          isClearable
        />
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-md">
            <CardHeader>
              <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Write a Review</h2>
            </CardHeader>
            <CardBody>
              <form className="flex flex-col gap-4">
                <Input
                  label="Book Title"
                  placeholder="Enter book title"
                  className="w-full mb-2"
                />
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-sm text-[hsl(var(--app-foreground-700))]">Your Rating</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        icon="hugeicons:star"
                        className="text-[hsl(var(--app-warning-400))] cursor-pointer"
                        width="24"
                        height="24"
                      />
                    ))}
                  </div>
                </div>
                <Textarea
                  label="Your Review"
                  placeholder="Write your review here"
                  minRows={3}
                  className="w-full mb-2"
                />
                <Input
                  label="Tags"
                  placeholder="Enter tags separated by commas"
                  className="w-full mb-2"
                />
                <Button
                  color="primary"
                  className="w-full py-2 font-semibold"
                >
                  Submit Review
                </Button>
              </form>
            </CardBody>
          </Card>

          <Card className="h-full bg-[hsl(var(--app-background-100))] rounded-lg shadow-md">
            <CardHeader>
              <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Community Reviews</h2>
            </CardHeader>
            <CardBody>
              <ul className="flex flex-col gap-4">
                {mockReviews.map((review, index) => (
                  <li key={index} className="border-b border-[hsl(var(--app-background-200))] pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[hsl(var(--app-foreground-800))]">{review.author}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            icon="hugeicons:star"
                            className={`${i < review.rating ? 'text-[hsl(var(--app-warning-400))]' : 'text-[hsl(var(--app-foreground-300))]'}`}
                            width="20"
                            height="20"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[hsl(var(--app-foreground-700))] mb-2">{review.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {review.tags.map((tag, tagIndex) => (
                        <Chip key={tagIndex} size="sm" variant="flat">{tag}</Chip>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                color="primary"
                className="w-full mt-4 py-2 font-semibold"
              >
                Load More Reviews
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
