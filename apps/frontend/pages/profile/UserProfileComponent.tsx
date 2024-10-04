import React from 'react';
import { Card, CardBody, Avatar, Badge, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserProfileComponent() {
  const userData = {
    name: 'John Doe',
    patronId: '12345',
    email: 'johndoe@example.com',
    address: '123 Library St, Booktown, BK 12345',
    phone: '(555) 123-4567',
    membershipStatus: 'Active'
  };

  const mockLoans = [
    { bookTitle: 'The Great Gatsby', dueDate: '2024-03-15', status: 'Due soon' },
    { bookTitle: 'To Kill a Mockingbird', dueDate: '2024-03-30', status: 'On time' },
  ];

  const mockBorrowingHistory = [
    { bookTitle: '1984', borrowedDate: '2024-01-10', returnedDate: '2024-02-07' },
    { bookTitle: 'Pride and Prejudice', borrowedDate: '2023-12-05', returnedDate: '2024-01-02' },
  ];

  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-100))]">
      <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-8">User Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="flex flex-col md:flex-row items-center gap-4 p-6">
              <Avatar 
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                name={userData.name}
                size="lg"
                isBordered
                className="w-20 h-20"
              />
              <div className="flex flex-col flex-grow text-center md:text-left">
                <h2 className="text-2xl font-semibold text-[hsl(var(--app-foreground-900))]">{userData.name}</h2>
                <p className="text-sm text-[hsl(var(--app-foreground-500))]">Patron ID: {userData.patronId}</p>
              </div>
              <Button
                size="sm"
                color="primary"
                variant="solid"
                startContent={<Icon icon="hugeicons:edit-01" width="18" height="18" />}
                className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))] min-w-[120px]"
              >
                Edit Profile
              </Button>
            </CardBody>
          </Card>
        </section>

        <section className="lg:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--app-foreground-700))]">Email</p>
                  <p className="text-base text-[hsl(var(--app-foreground-900))]">{userData.email}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--app-foreground-700))]">Phone</p>
                  <p className="text-base text-[hsl(var(--app-foreground-900))]">{userData.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--app-foreground-700))]">Address</p>
                  <p className="text-base text-[hsl(var(--app-foreground-900))]">{userData.address}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--app-foreground-700))]">Membership Status</p>
                  <Badge color="success" variant="flat" className="text-sm font-medium">
                    {userData.membershipStatus}
                  </Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="lg:col-span-6">
          <Card className="h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">Current Loans</h3>
              <Table aria-label="Current loans table" className="w-full">
                <TableHeader>
                  <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] font-medium">Book Title</TableColumn>
                  <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] font-medium">Due Date</TableColumn>
                  <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] font-medium">Status</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockLoans.map((loan, index) => (
                    <TableRow key={index} className="hover:bg-[hsl(var(--app-background-100))]">
                      <TableCell className="py-2 px-4 text-left">{loan.bookTitle}</TableCell>
                      <TableCell className="py-2 px-4 text-left">{loan.dueDate}</TableCell>
                      <TableCell className="py-2 px-4 text-left">
                        <Badge
                          color={loan.status === 'On time' ? 'success' : 'warning'}
                          variant="flat"
                          className="px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {loan.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>

        <section className="lg:col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="p-6">
              <div className="flex items-center mb-4">
                <Icon icon="hugeicons:book-01" className="text-2xl mr-2" />
                <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">Borrowing History</h3>
              </div>
              <Table aria-label="Borrowing history table" className="w-full">
                <TableHeader>
                  <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] font-medium">BOOK TITLE</TableColumn>
                  <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] font-medium">BORROWED DATE</TableColumn>
                  <TableColumn className="bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))] font-medium">RETURNED DATE</TableColumn>
                </TableHeader>
                <TableBody>
                  {mockBorrowingHistory.map((item, index) => (
                    <TableRow key={index} className="border-b border-[hsl(var(--app-background-200))]">
                      <TableCell>{item.bookTitle}</TableCell>
                      <TableCell>{item.borrowedDate}</TableCell>
                      <TableCell>{item.returnedDate}</TableCell>
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
