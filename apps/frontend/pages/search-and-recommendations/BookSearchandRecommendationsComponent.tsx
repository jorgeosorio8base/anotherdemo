import React from 'react';
import { Input, Button, Link, CheckboxGroup, Checkbox, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockBooks = [
  {
    id: 1,
    title: 'Book Title',
    author: 'Author Name',
    genre: 'Fiction',
    available: 'Yes',
    coverImage: 'https://via.placeholder.com/150x200'
  },
  // ... more books
];

const mockGenres = ['Fiction', 'Non-fiction', 'Mystery'];
const mockAvailability = ['Available Now', 'Coming Soon'];

export function BookSearchandRecommendationsComponent() {
  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen">
      <header className="w-full p-4 md:p-6 border-b border-[hsl(var(--app-foreground-200))]">
        <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
          Book Search and Recommendations
        </h1>
        <div className="w-full md:w-2/3 lg:w-1/2 flex items-center mb-2">
          <Input
            placeholder="Search by title, author, genre, or ISBN"
            aria-label="Search for books"
            className="flex-grow"
            size="lg"
            startContent={
              <Icon
                icon="hugeicons:search-01"
                className="text-[hsl(var(--app-foreground-400))] text-xl"
              />
            }
          />
          <Button
            color="primary"
            className="ml-2"
            size="lg"
            aria-label="Search"
          >
            Search
          </Button>
        </div>
        <Link
          href="#"
          color="primary"
          className="text-sm mt-2"
          underline="hover"
        >
          Advanced Search
        </Link>
      </header>

      <div className="grid grid-cols-12 gap-6 p-4 md:p-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="bg-[hsl(var(--app-background-100))] p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Filters</h2>
            
            <h3 className="font-medium mb-2">Genre</h3>
            <CheckboxGroup>
              {mockGenres.map((genre) => (
                <Checkbox key={genre} value={genre}>{genre}</Checkbox>
              ))}
            </CheckboxGroup>
            
            <h3 className="font-medium mb-2 mt-4">Availability</h3>
            <CheckboxGroup>
              {mockAvailability.map((option) => (
                <Checkbox key={option} value={option}>{option}</Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </aside>

        <section className="col-span-12 md:col-span-9 lg:col-span-10">
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockBooks.map((book) => (
              <Card key={book.id} className="h-full">
                <CardBody>
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
                  <p>{book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <p>Available: {book.available}</p>
                </CardBody>
                <CardFooter>
                  <Button size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="col-span-12">
          <h2 className="text-2xl font-semibold mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockBooks.slice(0, 4).map((book) => (
              <Card key={book.id} className="h-full">
                <CardBody>
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
                  <p>{book.author}</p>
                </CardBody>
                <CardFooter>
                  <Button size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
