import React from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function LibraryDashboardComponent() {
  const quickStats = {
    booksLoanedToday: 24,
    booksReturnedToday: 18,
    activePatrons: 342,
    overdueBooks: 7
  };

  const recentLoans = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
  ];

  const notifications = [
    '3 books are overdue for return',
    '5 new book donations received',
    'Library closing early on Friday for maintenance',
    'New online catalog system update available'
  ];

  const circulationData = [
    { name: 'Jan', loans: 400 },
    { name: 'Feb', loans: 300 },
    { name: 'Mar', loans: 500 },
    { name: 'Apr', loans: 280 },
    { name: 'May', loans: 590 },
    { name: 'Jun', loans: 320 }
  ];

  const popularCategories = [
    { name: 'Fiction', percentage: 32 },
    { name: 'Non-fiction', percentage: 28 },
    { name: 'Children\'s Books', percentage: 18 },
    { name: 'Science & Technology', percentage: 12 },
    { name: 'History', percentage: 10 }
  ];

  return (
    <main className="p-6 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <h1 className="text-3xl font-bold mb-6">Library Dashboard</h1>
      
      <section className="grid grid-cols-12 gap-6 mb-6">
        <Card className="col-span-12 appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-bold">Quick Stats</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm">Books Loaned Today</p>
                <p className="text-2xl font-bold">{quickStats.booksLoanedToday}</p>
              </div>
              <div>
                <p className="text-sm">Books Returned Today</p>
                <p className="text-2xl font-bold">{quickStats.booksReturnedToday}</p>
              </div>
              <div>
                <p className="text-sm">Active Patrons</p>
                <p className="text-2xl font-bold">{quickStats.activePatrons}</p>
              </div>
              <div>
                <p className="text-sm">Overdue Books</p>
                <p className="text-2xl font-bold text-[hsl(var(--app-danger-500))]">{quickStats.overdueBooks}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="grid grid-cols-12 gap-6 mb-6">
        <Card className="col-span-12 md:col-span-4 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-bold">Recent Loans</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {recentLoans.map((loan, index) => (
                <li key={index}>
                  <p className="font-semibold">{loan.title}</p>
                  <p className="text-sm text-[hsl(var(--app-foreground-600))]">{loan.author}</p>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="col-span-12 md:col-span-4 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-bold">Notifications</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {notifications.map((notification, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Icon icon="hugeicons:bell" className="text-[hsl(var(--app-warning-500))]" />
                  <span>{notification}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="col-span-12 md:col-span-4 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-bold">Popular Categories</h2>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2">
              {popularCategories.map((category, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className="font-semibold">{category.percentage}%</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      <section className="grid grid-cols-12 gap-6 mb-6">
        <Card className="col-span-12 md:col-span-8 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-bold">Book Circulation</h2>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={circulationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="loans" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        <Card className="col-span-12 md:col-span-4 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-bold">Quick Actions</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col space-y-2">
              <Button color="primary">
                <Icon icon="hugeicons:book-open-01" className="mr-2" />
                Check Out Book
              </Button>
              <Button color="secondary">
                <Icon icon="hugeicons:book-upload" className="mr-2" />
                Return Book
              </Button>
              <Button color="success">
                <Icon icon="hugeicons:user-add-01" className="mr-2" />
                Add New Patron
              </Button>
              <Button color="warning">
                <Icon icon="hugeicons:chart-line-data-01" className="mr-2" />
                Generate Report
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
