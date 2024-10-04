import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Dropdown, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Select, SelectItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockBookDetails = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  isbn: '9780446310789',
  publicationDate: '1960-07-11',
  genre: 'Fiction',
  totalCopies: 5,
  availableCopies: 3,
  checkedOut: 2
};

const mockChangeHistory = [
  {
    date: '2023-06-15',
    user: 'John Doe',
    action: 'Updated',
    details: 'Changed publication date'
  },
  {
    date: '2023-06-10',
    user: 'Jane Smith',
    action: 'Added',
    details: 'Added 2 copies to inventory'
  }
];

export function BookDetailsandEditingComponent() {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <section className="col-span-12">
        <h1 className="text-2xl font-bold mb-4">Book Details and Editing</h1>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold">Book Information</h2>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Title" defaultValue={mockBookDetails.title} />
            <Input label="Author" defaultValue={mockBookDetails.author} />
            <Input label="ISBN" defaultValue={mockBookDetails.isbn} />
            <Input type="date" label="Publication Date" defaultValue={mockBookDetails.publicationDate} />
            <Select label="Genre" placeholder="Select a genre" defaultSelectedKeys={[mockBookDetails.genre]}>
              <SelectItem key="Fiction">Fiction</SelectItem>
              <SelectItem key="Non-fiction">Non-fiction</SelectItem>
              <SelectItem key="Science Fiction">Science Fiction</SelectItem>
              <SelectItem key="Mystery">Mystery</SelectItem>
            </Select>
          </CardBody>
          <CardFooter>
            <Button color="primary">Save Changes</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-6">
        <Card className="h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold">Inventory Management</h2>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>Total Copies: {mockBookDetails.totalCopies}</span>
              <span>Available Copies: {mockBookDetails.availableCopies}</span>
              <span>Checked Out: {mockBookDetails.checkedOut}</span>
            </div>
            <div className="flex gap-4">
              <Input type="number" label="Add Copies" placeholder="0" />
              <Button color="success">Add</Button>
            </div>
            <div className="flex gap-4">
              <Input type="number" label="Remove Copies" placeholder="0" />
              <Button color="danger">Remove</Button>
            </div>
            <div className="flex gap-4">
              <Button color="warning">Mark as Damaged</Button>
              <Button color="danger">Mark as Lost</Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Change History</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Change history table">
              <TableHeader>
                <TableColumn>DATE</TableColumn>
                <TableColumn>USER</TableColumn>
                <TableColumn>ACTION</TableColumn>
                <TableColumn>DETAILS</TableColumn>
              </TableHeader>
              <TableBody>
                {mockChangeHistory.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.user}</TableCell>
                    <TableCell>{item.action}</TableCell>
                    <TableCell>{item.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
