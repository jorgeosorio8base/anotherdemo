import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockStaffRequests = [
  {
    key: '1',
    patron: 'John Doe',
    bookTitle: 'The Great Gatsby',
    currentDueDate: '2024-03-15',
    renewalsLeft: 2,
  },
];

const mockBorrowedBooks = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    dueDate: '2024-03-20',
    renewalsLeft: 1
  },
];

export function RenewalManagementComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))]">
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-foreground-200))]">
            <CardHeader className="flex flex-col items-start p-6">
              <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-2">
                Renewal Management
              </h1>
              <h2 className="text-xl text-[hsl(var(--app-foreground-600))]">
                Staff Renewal Requests
              </h2>
            </CardHeader>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <div className="bg-[hsl(var(--app-background-50))] p-6 rounded-lg shadow-md h-full">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Staff Renewal Requests</h2>
            <Table aria-label="Staff renewal requests table" className="w-full rounded-md overflow-hidden">
              <TableHeader>
                <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">PATRON</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">BOOK TITLE</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">CURRENT DUE DATE</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">RENEWALS LEFT</TableColumn>
                <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">ACTIONS</TableColumn>
              </TableHeader>
              <TableBody>
                {mockStaffRequests.map((row) => (
                  <TableRow key={row.key} className="hover:bg-[hsl(var(--app-background-100))] transition-colors duration-150">
                    <TableCell>{row.patron}</TableCell>
                    <TableCell>{row.bookTitle}</TableCell>
                    <TableCell>{row.currentDueDate}</TableCell>
                    <TableCell>{row.renewalsLeft}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          color="success"
                          aria-label="Approve renewal request"
                          className="px-3 py-1 rounded bg-[hsl(var(--app-success-500))] text-white hover:bg-[hsl(var(--app-success-600))]"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          color="danger"
                          aria-label="Deny renewal request"
                          className="px-3 py-1 rounded bg-[hsl(var(--app-danger-500))] text-white hover:bg-[hsl(var(--app-danger-600))]"
                        >
                          Deny
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <div className="bg-[hsl(var(--app-background-50))] p-6 rounded-lg shadow-md h-full">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Your Borrowed Books</h2>
            <div className="grid grid-cols-1 gap-4">
              {mockBorrowedBooks.map((book) => (
                <Card key={book.id} className="w-full h-full bg-[hsl(var(--app-background-100))] overflow-hidden">
                  <CardBody className="flex flex-col justify-between h-full p-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">{book.title}</h3>
                      <p className="text-sm text-[hsl(var(--app-foreground-700))] mb-1" aria-label={`Due date: ${book.dueDate}`}>
                        Due Date: {book.dueDate}
                      </p>
                      <p className="text-sm text-[hsl(var(--app-foreground-700))] mb-4">
                        Renewals Left: {book.renewalsLeft}
                      </p>
                    </div>
                    <Button
                      color="primary"
                      className="font-medium"
                      startContent={<Icon icon="hugeicons:refresh" />}
                      isDisabled={book.renewalsLeft === 0}
                      aria-label={`Request renewal for ${book.title}`}
                    >
                      Request Renewal
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
