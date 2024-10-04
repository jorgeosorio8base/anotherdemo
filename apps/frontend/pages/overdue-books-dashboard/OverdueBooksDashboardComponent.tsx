import React from 'react';
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Select, SelectItem, Input, Button, Pagination } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function OverdueBooksDashboardComponent() {
  const mockData = {
    totalOverdueBooks: 127,
    averageDaysOverdue: 14,
    pendingReminders: 43
  };

  const overdueBooks = [
    { id: 1, title: 'The Great Gatsby', patron: 'John Doe', dueDate: '2023-05-15', daysOverdue: 21 },
    { id: 2, title: 'To Kill a Mockingbird', patron: 'Jane Smith', dueDate: '2023-05-20', daysOverdue: 16 },
    { id: 3, title: '1984', patron: 'Bob Johnson', dueDate: '2023-05-25', daysOverdue: 11 },
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <Card className="w-full rounded-lg appshadow-[var(--app-box-shadow-medium)]">
          <CardBody>
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 flex items-center">
              <Icon icon="hugeicons:book-01" className="mr-2" />
              Overdue Books Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="h-full">
                <CardBody className="flex flex-col justify-center items-center p-4">
                  <h3 className="text-sm md:text-base font-medium text-[hsl(var(--app-foreground-600))] mb-2">Total Overdue Books</h3>
                  <p className="text-3xl md:text-4xl font-bold text-[hsl(var(--app-danger-500))]">{mockData.totalOverdueBooks}</p>
                </CardBody>
              </Card>
              <Card className="h-full">
                <CardBody className="flex flex-col justify-center items-center p-4">
                  <h3 className="text-sm md:text-base font-medium text-[hsl(var(--app-foreground-600))] mb-2">Average Days Overdue</h3>
                  <p className="text-3xl md:text-4xl font-bold text-[hsl(var(--app-warning-500))]">{mockData.averageDaysOverdue}</p>
                </CardBody>
              </Card>
              <Card className="h-full">
                <CardBody className="flex flex-col justify-center items-center p-4">
                  <h3 className="text-sm md:text-base font-medium text-[hsl(var(--app-foreground-600))] mb-2">Pending Reminders</h3>
                  <p className="text-3xl md:text-4xl font-bold text-[hsl(var(--app-primary-500))]">{mockData.pendingReminders}</p>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
      </section>
      <section className="col-span-12">
        <Card className="w-full rounded-lg appshadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Overdue Books List</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <Select
                label="Filter by Days Overdue"
                placeholder="Select filter"
                className="w-full md:w-48"
              >
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="1-7">1-7 days</SelectItem>
                <SelectItem value="8-14">8-14 days</SelectItem>
                <SelectItem value="15+">15+ days</SelectItem>
              </Select>
              <Select
                label="Sort by"
                placeholder="Select sort"
                className="w-full md:w-48"
              >
                <SelectItem value="title">Book Title</SelectItem>
                <SelectItem value="patron">Patron Name</SelectItem>
                <SelectItem value="dueDate">Due Date</SelectItem>
                <SelectItem value="daysOverdue">Days Overdue</SelectItem>
              </Select>
              <Input
                type="text"
                placeholder="Search books or patrons"
                className="w-full md:w-64"
              />
            </div>
            <Table aria-label="Overdue books table">
              <TableHeader>
                <TableColumn>Book Title</TableColumn>
                <TableColumn>Patron Name</TableColumn>
                <TableColumn>Due Date</TableColumn>
                <TableColumn>Days Overdue</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {overdueBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.patron}</TableCell>
                    <TableCell>{book.dueDate}</TableCell>
                    <TableCell>{book.daysOverdue}</TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        size="sm"
                        startContent={<Icon icon="hugeicons:mail-send-01" />}
                      >
                        Send Reminder
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-center mt-4">
              <Pagination total={10} initialPage={1} />
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}