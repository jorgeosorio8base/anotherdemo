import React from 'react';
import { Input, Select, SelectItem, Checkbox, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Pagination } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const genres = [
  { value: 'all', label: 'All Genres' },
  { value: 'fiction', label: 'Fiction' },
  { value: 'non-fiction', label: 'Non-Fiction' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'sci-fi', label: 'Science Fiction' },
];

const filterOptions = [
  { id: 'available', label: 'Available Only' },
  { id: 'digital', label: 'Digital Resources' },
  { id: 'print', label: 'Print Books' },
];

const mockData = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    status: 'Available',
    type: 'Print Book'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    status: 'Checked Out',
    type: 'Print Book'
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    genre: 'Science Fiction',
    status: 'Available',
    type: 'E-book'
  }
];

export function CatalogSearchComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-6 text-[hsl(var(--app-primary-700))]">Catalog Search</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8">
            <Input
              placeholder="Search by title, author, or ISBN"
              startContent={<Icon icon="hugeicons:search-01" width="24" height="24" />}
              size="lg"
              radius="lg"
              className="w-full"
            />
          </div>
          <div className="col-span-12 sm:col-span-8 lg:col-span-3">
            <Select
              placeholder="All Genres"
              size="lg"
              radius="lg"
            >
              {genres.map((genre) => (
                <SelectItem key={genre.value} value={genre.value}>
                  {genre.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-1">
            <Button
              color="primary"
              size="lg"
              radius="lg"
              className="w-full h-full"
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <div className="bg-[hsl(var(--app-background-100))] p-4 rounded-lg h-full">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="flex flex-col gap-2">
                {filterOptions.map((option) => (
                  <Checkbox
                    key={option.id}
                    size="sm"
                    radius="sm"
                    color="primary"
                  >
                    {option.label}
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="bg-[hsl(var(--app-background-100))] p-4 rounded-lg h-full">
              <Table
                aria-label="Catalog search results"
                className="w-full"
                removeWrapper
                isStriped
              >
                <TableHeader>
                  <TableColumn>TITLE</TableColumn>
                  <TableColumn>AUTHOR</TableColumn>
                  <TableColumn>GENRE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                  <TableColumn>TYPE</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockData.map((book) => (
                    <TableRow key={book.id} className="hover:bg-[hsl(var(--app-background-200))] transition-colors duration-150">
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.genre}</TableCell>
                      <TableCell>
                        <Chip
                          color={book.status === 'Available' ? 'success' : 'danger'}
                          size="sm"
                          variant="flat"
                        >
                          {book.status}
                        </Chip>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Icon
                            icon={book.type === 'Print Book' ? 'hugeicons:book-01' : 'hugeicons:book-open-01'}
                            className="mr-2"
                            width="20"
                            height="20"
                          />
                          {book.type}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center bg-[hsl(var(--app-background-100))] p-4 rounded-lg">
          <p className="text-sm text-[hsl(var(--app-foreground-600))]">
            Showing 1 to 3 of 100 results
          </p>
          <Pagination
            total={10}
            initialPage={1}
            showControls
            size="lg"
            radius="full"
            classNames={{
              item: 'text-[hsl(var(--app-foreground-700))] hover:bg-[hsl(var(--app-primary-100))]',
              cursor: 'bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))]'
            }}
          />
        </div>
      </section>
    </main>
  );
}
