import React from 'react';
import { Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button, Input } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function LoanManagementComponent() {
  const mockLoans = [
    { id: '1', bookTitle: 'The Great Gatsby', dueDate: '2024-03-15', status: 'On Time' },
    { id: '2', bookTitle: 'To Kill a Mockingbird', dueDate: '2024-03-10', status: 'Due Soon' },
    { id: '3', bookTitle: '1984', dueDate: '2024-03-01', status: 'Overdue' },
  ];

  const mockHolds = [
    {
      id: '1',
      bookTitle: 'Pride and Prejudice',
      holdDate: '2024-03-05',
      status: 'In Queue'
    }
  ];

  const mockOverdueItems = [
    {
      id: '1',
      bookTitle: 'The Catcher in the Rye',
      patronName: 'John Doe',
      dueDate: '2024-02-28',
      daysOverdue: 5
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-md" radius="none">
            <CardHeader className="flex justify-between items-center p-4">
              <div className="flex items-center gap-2">
                <Icon icon="hugeicons:money-01" className="text-[hsl(var(--app-primary-500))] text-2xl" />
                <h1 className="text-2xl font-bold">Loan Management</h1>
              </div>
            </CardHeader>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-md">
            <CardBody>
              <h2 className="text-2xl font-bold mb-4">Current Loans</h2>
              <Table aria-label="Current loans table">
                <TableHeader>
                  <TableColumn>BOOK TITLE</TableColumn>
                  <TableColumn>DUE DATE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockLoans.map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell>{loan.bookTitle}</TableCell>
                      <TableCell>{loan.dueDate}</TableCell>
                      <TableCell>
                        <Chip
                          className={`${loan.status === 'On Time' ? 'bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-900))]' :
                            loan.status === 'Due Soon' ? 'bg-[hsl(var(--app-warning-100))] text-[hsl(var(--app-warning-900))]' :
                            'bg-[hsl(var(--app-danger-100))] text-[hsl(var(--app-danger-900))]'}`}
                        >
                          {loan.status}
                        </Chip>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          color={loan.status === 'Overdue' ? 'danger' : 'primary'}
                          variant="flat"
                          startContent={<Icon icon="hugeicons:refresh" />}
                        >
                          {loan.status === 'Overdue' ? 'Return' : 'Renew'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-md">
            <CardBody>
              <h2 className="text-2xl font-bold mb-4">Holds</h2>
              <Table aria-label="Table of current holds">
                <TableHeader>
                  <TableColumn>BOOK TITLE</TableColumn>
                  <TableColumn>HOLD DATE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockHolds.map((hold) => (
                    <TableRow key={hold.id}>
                      <TableCell>{hold.bookTitle}</TableCell>
                      <TableCell>{hold.holdDate}</TableCell>
                      <TableCell>
                        <Chip color="primary" variant="flat">
                          {hold.status}
                        </Chip>
                      </TableCell>
                      <TableCell>
                        <Button color="danger" size="sm">
                          Cancel Hold
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
          <Card className="bg-[hsl(var(--app-background-50))] shadow-md">
            <CardBody>
              <h2 className="text-2xl font-bold mb-4">Staff Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-[hsl(var(--app-background-100))]">
                  <CardHeader className="bg-[hsl(var(--app-primary-100))] p-3">
                    <h3 className="text-xl font-semibold">Process Loan</h3>
                  </CardHeader>
                  <CardBody className="p-4">
                    <form className="flex flex-col gap-4">
                      <Input
                        label="Book ID"
                        placeholder="Enter book ID"
                        startContent={<Icon icon="hugeicons:book-01" />}
                      />
                      <Input
                        label="Patron ID"
                        placeholder="Enter patron ID"
                        startContent={<Icon icon="hugeicons:user" />}
                      />
                      <Button color="primary">
                        Process Loan
                      </Button>
                    </form>
                  </CardBody>
                </Card>

                <Card className="bg-[hsl(var(--app-background-100))]">
                  <CardHeader className="bg-[hsl(var(--app-secondary-100))] p-3">
                    <h3 className="text-xl font-semibold">Process Return</h3>
                  </CardHeader>
                  <CardBody className="p-4">
                    <form className="flex flex-col gap-4">
                      <Input
                        label="Book ID"
                        placeholder="Enter book ID"
                        startContent={<Icon icon="hugeicons:book-01" />}
                      />
                      <Button color="secondary">
                        Process Return
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] shadow-md">
            <CardBody>
              <h2 className="text-2xl font-bold mb-4">Overdue Items</h2>
              <Table aria-label="Table of overdue library items">
                <TableHeader>
                  <TableColumn>BOOK TITLE</TableColumn>
                  <TableColumn>PATRON NAME</TableColumn>
                  <TableColumn>DUE DATE</TableColumn>
                  <TableColumn>DAYS OVERDUE</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockOverdueItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-primary-500))]" />
                          {item.bookTitle}
                        </div>
                      </TableCell>
                      <TableCell>{item.patronName}</TableCell>
                      <TableCell>{item.dueDate}</TableCell>
                      <TableCell>{item.daysOverdue}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" color="primary">Send Reminder</Button>
                          <Button size="sm" color="danger">Mark Lost</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
