import React from 'react';
import { Card, CardBody, Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const navigationItems = [
  { name: 'Currently Borrowed Items', href: '#borrowed' },
  { name: 'Hold Requests', href: '#hold-requests' },
  { name: 'Download for Offline Use', href: '#download' },
  { name: 'Reading History', href: '#history' }
];

const mockBorrowedItems = [
  { id: '1', title: 'The Great Gatsby', dueDate: 'May 15, 2024' },
  { id: '2', title: 'To Kill a Mockingbird', dueDate: 'May 20, 2024' },
];

const mockHoldRequests = [
  {
    id: '1',
    title: '1984',
    status: '2nd in queue'
  }
];

const downloadItems = [
  { title: 'Pride and Prejudice' },
  { title: 'The Catcher in the Rye' },
];

const mockReadingHistory = [
  { title: 'Moby Dick', completionDate: 'April 1, 2024' },
  { title: 'The Hobbit', completionDate: 'March 15, 2024' },
  { title: 'Fahrenheit 451', completionDate: 'February 28, 2024' }
];

export function MyDigitalLoansComponent() {
  return (
    <div className="min-h-screen bg-[hsl(var(--app-background-50))]">
      <Navbar
        maxWidth="full"
        className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] h-16 px-4 appShadow-[var(--app-box-shadow-small)] border-b border-[hsl(var(--app-foreground-200))]"
      >
        <NavbarBrand>
          <Icon icon="hugeicons:book-open-01" width="32" height="32" className="mr-2" />
          <span className="font-bold text-xl">My Digital Loans</span>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navigationItems.map((item) => (
            <NavbarItem key={item.name} href={item.href}>
              {item.name}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu className="bg-[hsl(var(--app-background-100))] p-4">
          {navigationItems.map((item) => (
            <NavbarMenuItem key={item.name} href={item.href}>
              {item.name}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-12" id="borrowed">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
              Currently Borrowed Items
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockBorrowedItems.map((item) => (
                <Card key={item.id} className="bg-[hsl(var(--app-background-100))] overflow-hidden h-full">
                  <CardBody>
                    <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--app-foreground-600))] mb-4">
                      Due: {item.dueDate}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        color="primary"
                        className="bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))]"
                        aria-label={`Read ${item.title}`}
                      >
                        <Icon icon="hugeicons:book-open-01" className="mr-1" />
                        Read
                      </Button>
                      <Button
                        size="sm"
                        color="success"
                        className="bg-[hsl(var(--app-success-500))] text-white hover:bg-[hsl(var(--app-success-600))]"
                        aria-label={`Renew ${item.title}`}
                      >
                        Renew
                      </Button>
                      <Button
                        size="sm"
                        color="danger"
                        className="bg-[hsl(var(--app-danger-500))] text-white hover:bg-[hsl(var(--app-danger-600))]"
                        aria-label={`Return ${item.title}`}
                      >
                        Return
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          <section className="col-span-12 sm:col-span-6" id="hold-requests">
            <div className="bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-small)] h-full">
              <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 p-4">Hold Requests</h2>
              {mockHoldRequests.map((request) => (
                <Card key={request.id} className="bg-[hsl(var(--app-background-100))] rounded-md m-4">
                  <CardBody className="p-4">
                    <div className="flex items-center gap-2">
                      <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-foreground-600))]" />
                      <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-2">{request.title}</h3>
                    </div>
                    <p className="text-sm text-[hsl(var(--app-foreground-600))]">{request.status}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          <section className="col-span-12 sm:col-span-6" id="download">
            <div className="bg-[hsl(var(--app-background-50))] p-6 rounded-lg appShadow-[var(--app-box-shadow-medium)] h-full">
              <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">Download for Offline Use</h2>
              <div className="grid grid-cols-1 gap-4">
                {downloadItems.map((item, index) => (
                  <Card key={index} className="bg-[hsl(var(--app-background-100))]">
                    <CardBody className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--app-foreground-800))]">{item.title}</h3>
                      <Button
                        color="primary"
                        className="w-full"
                        startContent={<Icon icon="hugeicons:download-01" width="20" height="20" />}
                      >
                        Download
                      </Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="col-span-12" id="history">
            <div className="bg-[hsl(var(--app-background-50))] p-4 rounded-lg appShadow-[var(--app-box-shadow-medium)]">
              <h2 className="text-xl font-bold mb-2 text-[hsl(var(--app-foreground-900))] flex items-center">
                <Icon icon="hugeicons:book-02" className="mr-2" />
                Reading History
              </h2>
              <Card>
                <CardBody>
                  <ul className="list-none p-0 m-0">
                    {mockReadingHistory.map((item, index) => (
                      <li
                        key={index}
                        className={`flex justify-between items-center py-2 ${
                          index !== mockReadingHistory.length - 1
                            ? 'border-b border-[hsl(var(--app-foreground-200))]'
                            : ''
                        }`}
                      >
                        <span className="font-medium text-[hsl(var(--app-foreground-800))]">
                          {item.title}
                        </span>
                        <span className="text-sm text-[hsl(var(--app-foreground-600))]">
                          {item.completionDate}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
