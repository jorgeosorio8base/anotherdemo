import React from 'react';
import { Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, Checkbox, Select, SelectItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

type Book = {
  title: string;
  author: string;
  queuePosition: number;
  estimatedAvailability: string;
};

const mockBooks: Book[] = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    queuePosition: 1,
    estimatedAvailability: 'May 15, 2024'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    queuePosition: 3,
    estimatedAvailability: 'June 1, 2024'
  }
];

const mockSearchResults = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
];

const notificationOptions = [
  { key: 'email', label: 'Email' },
  { key: 'sms', label: 'SMS' },
  { key: 'push', label: 'Push Notification' },
];

export function BookHoldManagementComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))]">
      <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-8">Book Hold Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-12">
          <Card className="w-full h-full">
            <CardHeader>
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">Your Current Holds</h2>
            </CardHeader>
            <CardBody>
              <Table aria-label="Current book holds">
                <TableHeader>
                  <TableColumn>BOOK TITLE</TableColumn>
                  <TableColumn>AUTHOR</TableColumn>
                  <TableColumn>QUEUE POSITION</TableColumn>
                  <TableColumn>ESTIMATED AVAILABILITY</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockBooks.map((book, index) => (
                    <TableRow key={index}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.queuePosition}</TableCell>
                      <TableCell>{book.estimatedAvailability}</TableCell>
                      <TableCell>
                        <Button color="danger" size="sm">Cancel Hold</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="lg:col-span-6">
          <Card className="w-full h-full">
            <CardHeader>
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">Place a New Hold</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search for a book"
                    startContent={<Icon icon="hugeicons:search-01" />}
                    className="flex-grow"
                  />
                  <Button color="primary">Search</Button>
                </div>
                <div className="bg-[hsl(var(--app-background-100))] p-4 rounded-md">
                  <h3 className="text-[hsl(var(--app-foreground-800))] font-semibold mb-2">Search Results</h3>
                  {mockSearchResults.length > 0 ? (
                    <ul>
                      {mockSearchResults.map((book) => (
                        <li
                          key={book.id}
                          className="border-b border-[hsl(var(--app-background-200))] py-2 last:border-b-0"
                        >
                          <p className="text-[hsl(var(--app-foreground-700))]">
                            {book.title} by {book.author}
                          </p>
                          <Button
                            size="sm"
                            variant="flat"
                            color="primary"
                            className="mt-1"
                          >
                            Place Hold
                          </Button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[hsl(var(--app-foreground-600))]">No results found. Try a different search term.</p>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="lg:col-span-6">
          <Card className="w-full h-full">
            <CardBody className="p-6">
              <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Hold Preferences</h2>
              <form className="flex flex-col gap-6">
                <div className="mb-4">
                  <label htmlFor="notification-preference" className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-2">
                    Notification Preference
                  </label>
                  <Select
                    id="notification-preference"
                    placeholder="Select notification method"
                    className="w-full"
                    startContent={<Icon icon="hugeicons:notification-01" className="text-[hsl(var(--app-foreground-500))]" />}
                  >
                    {notificationOptions.map((option) => (
                      <SelectItem key={option.key} value={option.key}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="mb-6">
                  <Checkbox defaultSelected={false}>
                    <span className="text-sm text-[hsl(var(--app-foreground-700))] ml-2">
                      Automatically check out book when available
                    </span>
                  </Checkbox>
                </div>
                <Button
                  color="primary"
                  className="px-4 py-2 font-medium transition-colors hover:bg-[hsl(var(--app-primary-600))] focus:ring-2 focus:ring-[hsl(var(--app-primary-300))] focus:outline-none"
                >
                  Save Preferences
                </Button>
              </form>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
