import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Image, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockFeaturedBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://example.com/great-gatsby-cover.jpg' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://example.com/to-kill-a-mockingbird-cover.jpg' }
];

const mockEvents = [
  { id: 1, title: 'Book Club Meeting: "1984" by George Orwell', date: 'July 15, 2024', time: '6:00 PM' },
  { id: 2, title: 'Author Talk: Margaret Atwood', date: 'July 22, 2024', time: '7:30 PM' }
];

const mockDigitalResources = [
  { id: 1, name: 'E-books Collection', url: '#' },
  { id: 2, name: 'Online Magazines', url: '#' },
  { id: 3, name: 'Research Databases', url: '#' },
  { id: 4, name: 'Language Learning Resources', url: '#' }
];

const userAccount = {
  name: 'Alice Reader',
  booksOnLoan: 3
};

export function HomeComponent() {
  return (
    <main className="bg-[hsl(var(--app-background-50))] p-4">
      <h1 className="text-3xl font-bold text-[hsl(var(--app-primary-500))] mb-4">
        Welcome to the Library System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <Card className="col-span-1 md:col-span-4 bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-foreground-200))] shadow-[var(--app-box-shadow-medium)] h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Quick Search</h2>
          </CardHeader>
          <CardBody>
            <Input
              placeholder="Search books, authors, or topics"
              className="bg-[hsl(var(--app-background-50))] border border-[hsl(var(--app-foreground-300))] px-3 py-2 rounded w-full mb-2"
              endContent={
                <Button isIconOnly color="primary" className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))] hover:bg-[hsl(var(--app-primary-600))]">
                  <Icon icon="hugeicons:search" width={24} height={24} />
                </Button>
              }
            />
          </CardBody>
        </Card>

        <Card className="col-span-1 md:col-span-4 bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-foreground-200))] shadow-[var(--app-box-shadow-medium)] h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Featured Books</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {mockFeaturedBooks.map((book) => (
                <li key={book.id} className="flex items-center">
                  <Image
                    src={book.coverUrl}
                    alt={`Cover of ${book.title}`}
                    className="w-10 h-14 object-cover mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[hsl(var(--app-foreground-800))]">{book.title}</span>
                    <span className="text-sm text-[hsl(var(--app-foreground-600))]">{book.author}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="col-span-1 md:col-span-4 bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-foreground-200))] shadow-[var(--app-box-shadow-medium)] h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">My Account</h2>
          </CardHeader>
          <CardBody>
            <p className="text-[hsl(var(--app-foreground-700))] mb-2">Welcome back, {userAccount.name}</p>
            <p className="text-[hsl(var(--app-foreground-700))] mb-4">You have {userAccount.booksOnLoan} books currently on loan.</p>
            <Button
              color="primary"
              className="bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))] px-4 py-2 rounded hover:bg-[hsl(var(--app-primary-600))]"
            >
              View My Loans
            </Button>
          </CardBody>
        </Card>

        <Card className="col-span-1 md:col-span-8 bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-foreground-200))] shadow-[var(--app-box-shadow-medium)] h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Upcoming Events</h2>
          </CardHeader>
          <CardBody>
            {mockEvents.map((event) => (
              <div key={event.id} className="mb-3">
                <h3 className="font-semibold text-[hsl(var(--app-foreground-800))]">{event.title}</h3>
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">Date: {event.date} | Time: {event.time}</p>
              </div>
            ))}
          </CardBody>
        </Card>

        <Card className="col-span-1 md:col-span-4 bg-[hsl(var(--app-background-100))] border border-[hsl(var(--app-foreground-200))] shadow-[var(--app-box-shadow-medium)] h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-2">Digital Resources</h2>
          </CardHeader>
          <CardBody>
            {mockDigitalResources.map((resource) => (
              <Link key={resource.id} href={resource.url} className="block mb-2 text-[hsl(var(--app-primary-500))] hover:underline">
                {resource.name}
              </Link>
            ))}
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
