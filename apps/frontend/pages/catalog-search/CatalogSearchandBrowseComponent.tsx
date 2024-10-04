import React from 'react';
import { Input, Select, SelectItem, Button, Card, CardBody, ButtonGroup, Pagination, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const categories = [
  { key: 'all', name: 'All Categories' },
  { key: 'books', name: 'Books' },
  { key: 'electronics', name: 'Electronics' },
  { key: 'clothing', name: 'Clothing' },
  { key: 'home', name: 'Home & Garden' },
];

const mockBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    year: 1925,
    coverImage: 'https://example.com/great-gatsby-cover.jpg',
    status: 'Available'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    year: 1960,
    coverImage: 'https://example.com/to-kill-a-mockingbird-cover.jpg',
    status: 'Checked Out'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    genre: 'Science Fiction',
    year: 1949,
    coverImage: 'https://example.com/1984-cover.jpg',
    status: 'Available'
  }
];

export function CatalogSearchandBrowseComponent() {
  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
            Catalog Search and Browse
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search by title, author, or keyword"
              className="w-full sm:max-w-2xl"
              startContent={<Icon icon="hugeicons:search-01" width="24" height="24" />}
              isClearable
            />
            <Select
              placeholder="All Categories"
              className="w-full sm:w-auto max-w-xs"
            >
              {categories.map((category) => (
                <SelectItem key={category.key} value={category.key}>
                  {category.name}
                </SelectItem>
              ))}
            </Select>
            <Button
              color="primary"
              className="w-full sm:w-auto"
              startContent={<Icon icon="hugeicons:search-01" width="24" height="24" />}
            >
              Search
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <p className="text-lg font-semibold text-[hsl(var(--app-foreground-900))]">
              24 results found
            </p>
            <div className="flex items-center mt-4 sm:mt-0">
              <ButtonGroup className="mr-2">
                <Button isIconOnly aria-label="Grid view">
                  <Icon icon="hugeicons:grid-01" />
                </Button>
                <Button isIconOnly aria-label="List view">
                  <Icon icon="hugeicons:list-ul" />
                </Button>
              </ButtonGroup>
              <Select
                placeholder="Sort by Relevance"
                className="w-48"
                size="sm"
              >
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockBooks.map((book) => (
              <Card key={book.id} className="h-full">
                <CardBody className="p-0">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">{book.author}</p>
                    <p className="text-xs text-[hsl(var(--app-foreground-500))] mt-2">
                      {book.genre} | {book.year}
                    </p>
                    <p className={`text-sm font-medium mt-2 ${book.status === 'Available' ? 'text-[hsl(var(--app-success-600))]' : 'text-[hsl(var(--app-warning-600))]'}`}>
                      {book.status}
                    </p>
                    <Button
                      color={book.status === 'Available' ? 'primary' : 'default'}
                      className="w-full mt-4"
                      disabled={book.status !== 'Available'}
                    >
                      {book.status === 'Available' ? 'Place Hold' : 'Unavailable'}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        <section className="flex justify-center">
          <Pagination total={10} initialPage={1} />
        </section>
      </div>
    </main>
  );
}
