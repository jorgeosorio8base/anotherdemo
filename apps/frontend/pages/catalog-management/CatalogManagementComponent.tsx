import React from 'react';
import { Card, CardBody, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function CatalogManagementComponent() {
  const mockData = {
    totalBooks: 12345,
    availableBooks: 10789,
    borrowedBooks: 1556
  };

  const mockBooks = [
    { id: '1', title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780446310789', status: 'Available' },
    { id: '2', title: '1984', author: 'George Orwell', isbn: '9780451524935', status: 'Borrowed' },
    { id: '3', title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '9780141439518', status: 'Available' },
  ];

  const recentActivities = [
    {
      description: 'New book added: "The Great Gatsby" by F. Scott Fitzgerald',
      timestamp: '2 hours ago'
    },
    {
      description: 'Book status updated: "Moby-Dick" changed to "Under Repair"',
      timestamp: '5 hours ago'
    },
    {
      description: 'Book removed from catalog: "Outdated Science Textbook"',
      timestamp: '1 day ago'
    }
  ];

  return (
    <main className="grid grid-cols-12 gap-6 p-6 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-6">Catalog Management</h1>
      </section>

      <section className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="h-full">
          <CardBody className="flex flex-col items-center justify-center p-4">
            <p className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Total Books</p>
            <p className="text-3xl font-bold mt-2 text-[hsl(var(--app-primary-500))]">{mockData.totalBooks}</p>
          </CardBody>
        </Card>
        <Card className="h-full">
          <CardBody className="flex flex-col items-center justify-center p-4">
            <p className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Available Books</p>
            <p className="text-3xl font-bold mt-2 text-[hsl(var(--app-success-500))]">{mockData.availableBooks}</p>
          </CardBody>
        </Card>
        <Card className="h-full">
          <CardBody className="flex flex-col items-center justify-center p-4">
            <p className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">Borrowed Books</p>
            <p className="text-3xl font-bold mt-2 text-[hsl(var(--app-danger-500))]">{mockData.borrowedBooks}</p>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Input
            className="flex-grow"
            placeholder="Search books..."
            startContent={<Icon icon="hugeicons:search-02" />}
            aria-label="Search books"
          />
          <div className="flex gap-2">
            <Button color="primary" startContent={<Icon icon="hugeicons:add-02" />}>
              Add New Book
            </Button>
            <Button color="secondary" startContent={<Icon icon="hugeicons:download-02" />}>
              Export Catalog
            </Button>
          </div>
        </div>
      </section>

      <section className="col-span-12">
        <Table
          aria-label="Catalog Books Table"
          className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]"
          classNames={{
            th: 'bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-900))] font-semibold uppercase',
            td: 'py-3',
          }}
        >
          <TableHeader>
            <TableColumn className="px-4 py-3 text-left">TITLE</TableColumn>
            <TableColumn className="px-4 py-3 text-left">AUTHOR</TableColumn>
            <TableColumn className="px-4 py-3 text-left">ISBN</TableColumn>
            <TableColumn className="px-4 py-3 text-left">STATUS</TableColumn>
            <TableColumn className="px-4 py-3 text-left">ACTIONS</TableColumn>
          </TableHeader>
          <TableBody>
            {mockBooks.map((book) => (
              <TableRow key={book.id} className="hover:bg-[hsl(var(--app-background-100))] transition-colors duration-150">
                <TableCell className="px-4 py-3 font-medium">{book.title}</TableCell>
                <TableCell className="px-4 py-3">{book.author}</TableCell>
                <TableCell className="px-4 py-3 font-mono">{book.isbn}</TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Chip
                    size="sm"
                    className={book.status === 'Available' ? 'bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-700))]' : 'bg-[hsl(var(--app-warning-100))] text-[hsl(var(--app-warning-700)))}'}
                  >
                    {book.status}
                  </Chip>
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Button
                    size="sm"
                    className="bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))]"
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="col-span-12 md:col-span-4">
        <Card className="w-full h-full bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] shadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Icon icon="hugeicons:clock-03" width="24" height="24" />
              Recent Catalog Activities
            </h2>
            <ul className="list-none p-0 m-0">
              {recentActivities.map((activity, index) => (
                <li key={index} className="py-3 border-b border-[hsl(var(--app-background-200))] last:border-b-0">
                  <p className="text-sm text-[hsl(var(--app-foreground-700))]">{activity.description}</p>
                  <span className="text-xs text-[hsl(var(--app-foreground-500))] mt-1 block">{activity.timestamp}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
