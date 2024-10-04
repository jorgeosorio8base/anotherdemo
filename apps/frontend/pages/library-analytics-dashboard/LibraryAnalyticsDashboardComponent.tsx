import React from 'react';
import { Card, CardBody, CardHeader, Button, Image } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function LibraryAnalyticsDashboardComponent() {
  const metricsData = [
    { title: 'Total Books', value: 24567, icon: 'hugeicons:book-01' },
    { title: 'Active Loans', value: 1234, icon: 'hugeicons:book-open-01' },
    { title: 'Overdue Books', value: 89, icon: 'hugeicons:book-bookmark-01' },
    { title: 'Active Patrons', value: 3456, icon: 'hugeicons:user' },
  ];

  const circulationData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 5500 },
  ];

  const topBorrowedBooks = [
    { title: 'The Great Gatsby', loans: 127 },
    { title: 'To Kill a Mockingbird', loans: 118 },
    { title: '1984', loans: 105 },
    { title: 'Pride and Prejudice', loans: 98 },
    { title: 'The Catcher in the Rye', loans: 92 },
  ];

  const recommendedBooks = [
    { title: 'Book Title 1', author: 'Author Name', coverUrl: 'https://example.com/cover1.jpg' },
    { title: 'Book Title 2', author: 'Author Name', coverUrl: 'https://example.com/cover2.jpg' },
    { title: 'Book Title 3', author: 'Author Name', coverUrl: 'https://example.com/cover3.jpg' },
    { title: 'Book Title 4', author: 'Author Name', coverUrl: 'https://example.com/cover4.jpg' },
    { title: 'Book Title 5', author: 'Author Name', coverUrl: 'https://example.com/cover5.jpg' },
  ];

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <div className="col-span-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--app-foreground-900))]">
          Library Analytics Dashboard
        </h1>
      </div>

      <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {metricsData.map((metric, index) => (
          <Card key={index} className="h-full bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-small)]">
            <CardBody className="flex flex-col items-center justify-center p-4">
              <Icon icon={metric.icon} className="text-4xl mb-2 text-[hsl(var(--app-primary-500))]" />
              <p className="text-sm font-medium text-[hsl(var(--app-foreground-600))]">{metric.title}</p>
              <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-primary-500))]">{metric.value.toLocaleString()}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="col-span-12 md:col-span-6">
        <Card className="h-full bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="border-b border-[hsl(var(--app-foreground-200))] p-4">
            <h2 className="text-lg font-semibold">Book Circulation</h2>
          </CardHeader>
          <CardBody className="p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={circulationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="hsl(var(--app-primary-500))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-6">
        <Card className="h-full bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="border-b border-[hsl(var(--app-foreground-200))] p-4">
            <h2 className="text-lg font-semibold">Top 5 Most Borrowed Books</h2>
          </CardHeader>
          <CardBody className="p-4">
            <ul className="list-none p-0">
              {topBorrowedBooks.map((book, index) => (
                <li key={index} className="flex justify-between items-center py-2 border-b border-[hsl(var(--app-foreground-200))] last:border-b-0">
                  <span className="font-medium">{book.title}</span>
                  <span className="text-[hsl(var(--app-primary-500))] font-bold">{book.loans} loans</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-100))] appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="border-b border-[hsl(var(--app-foreground-200))] p-4">
            <h2 className="text-lg font-semibold">Personalized Book Recommendations</h2>
          </CardHeader>
          <CardBody className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {recommendedBooks.map((book, index) => (
                <Card key={index} className="bg-[hsl(var(--app-background-100))] overflow-hidden appShadow-[var(--app-box-shadow-small)]">
                  <CardBody className="p-0">
                    <Image
                      src={book.coverUrl}
                      alt={`Cover of ${book.title}`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-2 text-center">
                      <p className="text-sm font-medium">{book.title}</p>
                      <p className="text-xs text-[hsl(var(--app-foreground-600))]">{book.author}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12 flex justify-center mt-6">
        <Button
          className="bg-[hsl(var(--app-primary-500))] text-white px-6 py-2 rounded-full font-medium transition-colors hover:bg-[hsl(var(--app-primary-600))] w-full sm:w-auto"
        >
          Customize Dashboard
        </Button>
      </div>
    </main>
  );
}
