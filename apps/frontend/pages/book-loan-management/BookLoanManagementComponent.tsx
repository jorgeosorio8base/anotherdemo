import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookLoanManagementComponent() {
  const mockPatronId = 'P12345';
  const mockBookId = 'B67890';
  const mockLoans = [
    { id: '1', bookTitle: 'The Great Gatsby', dueDate: '2024-03-15', status: 'On Time' },
    { id: '2', bookTitle: 'To Kill a Mockingbird', dueDate: '2024-03-01', status: 'Overdue' },
  ];
  const stats = [
    {
      title: 'Total Active Loans',
      count: 127,
      icon: 'book-open-01',
      bgColor: 'bg-[hsl(var(--app-primary-100))]',
      textColor: 'text-[hsl(var(--app-primary-900))]',
    },
    {
      title: 'Overdue Books',
      count: 18,
      icon: 'book-bookmark-01',
      bgColor: 'bg-[hsl(var(--app-danger-100))]',
      textColor: 'text-[hsl(var(--app-danger-900))]',
    },
    {
      title: 'Books Due Today',
      count: 7,
      icon: 'book-02',
      bgColor: 'bg-[hsl(var(--app-warning-100))]',
      textColor: 'text-[hsl(var(--app-warning-900))]',
    },
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <section className="col-span-12">
        <h1 className="text-2xl font-bold mb-4">Book Loan Management</h1>
      </section>

      <section className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold">Patron Verification</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <Input
                  label="Patron ID"
                  placeholder="Enter Patron ID"
                  defaultValue={mockPatronId}
                />
                <Button color="primary">
                  <Icon icon="hugeicons:book-01" className="mr-2" />
                  Verify Patron
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold">Book Checkout</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <Input
                  label="Book ID"
                  placeholder="Enter Book ID"
                  defaultValue={mockBookId}
                />
                <Button color="success">
                  <Icon icon="hugeicons:book-open-01" className="mr-2" />
                  Checkout Book
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="col-span-12">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold mb-4">Current Loans</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Current loans table">
              <TableHeader>
                <TableColumn>Book Title</TableColumn>
                <TableColumn>Due Date</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {mockLoans.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <Icon icon="hugeicons:book-open-01" className="mr-2" />
                        {loan.bookTitle}
                      </div>
                    </TableCell>
                    <TableCell>{loan.dueDate}</TableCell>
                    <TableCell>
                      <Chip
                        color={loan.status === 'On Time' ? 'success' : 'danger'}
                        variant="flat"
                        size="sm"
                      >
                        {loan.status}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        color="primary"
                        className="mr-2"
                        aria-label="Renew book loan"
                      >
                        Renew
                      </Button>
                      <Button
                        size="sm"
                        color="danger"
                        aria-label="Return book"
                      >
                        Return
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card>
          <CardBody className="p-6 flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Icon icon="hugeicons:book-01" width="24" height="24" />
              Book Return
            </h2>
            <Input
              label="Enter Book ID to Return"
              placeholder="e.g., B12345"
              variant="bordered"
              className="w-full"
            />
            <Button
              color="primary"
              className="w-full bg-[hsl(var(--app-primary-500))] hover:bg-[hsl(var(--app-primary-600))] text-white font-medium"
            >
              Process Return
            </Button>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 grid grid-cols-12 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-span-12 md:col-span-4">
            <Card
              className={`${stat.bgColor} ${stat.textColor} h-full hover:appshadow-[var(--app-box-shadow-medium)] transition-shadow duration-300`}
              shadow="sm"
            >
              <CardBody className="flex flex-col items-center justify-center p-4 gap-2">
                <Icon icon={`hugeicons:${stat.icon}`} className="text-4xl" />
                <h2 className="text-lg font-semibold text-center">{stat.title}</h2>
                <p className="text-4xl font-bold text-center" aria-label={`${stat.count} ${stat.title}`}>
                  {stat.count}
                </p>
              </CardBody>
            </Card>
          </div>
        ))}
      </section>
    </main>
  );
}
