import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockData = {
  personalInfo: {
    name: 'John Doe',
    libraryCard: '1234567890',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567'
  },
  currentLoans: [
    { title: 'The Great Gatsby', dueDate: '05/15/2024' },
    { title: 'To Kill a Mockingbird', dueDate: '05/20/2024' }
  ],
  holds: {
    count: 1,
    position: '2 of 5'
  },
  fines: {
    amount: 2.50,
    reason: 'Overdue book: The Catcher in the Rye'
  },
  notifications: [
    { type: 'info', message: "Your hold on '1984' is ready for pickup." },
    { type: 'warning', message: "'The Great Gatsby' is due in 2 days." }
  ],
  recentActivity: [
    { date: '05/01/2024', action: 'Borrowed', item: 'The Great Gatsby' },
    { date: '04/28/2024', action: 'Returned', item: 'Pride and Prejudice' },
    { date: '04/25/2024', action: 'Placed Hold', item: '1984' }
  ]
};

export function PatronAccountComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans">
      <h1 className="text-3xl font-bold mb-8">Patron Account Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-lg font-bold">Personal Information</h2>
          </CardHeader>
          <CardBody>
            <p><strong>Name:</strong> {mockData.personalInfo.name}</p>
            <p><strong>Library Card:</strong> {mockData.personalInfo.libraryCard}</p>
            <p><strong>Email:</strong> {mockData.personalInfo.email}</p>
            <p><strong>Phone:</strong> {mockData.personalInfo.phone}</p>
          </CardBody>
          <CardFooter>
            <Button color="primary">
              <Icon icon="hugeicons:edit-02" className="mr-2" />
              Edit Profile
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-1 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-lg font-bold">Current Loans</h2>
          </CardHeader>
          <CardBody>
            {mockData.currentLoans.map((loan, index) => (
              <div key={index} className="mb-2">
                <p><strong>{loan.title}</strong></p>
                <p>Due: {loan.dueDate}</p>
              </div>
            ))}
          </CardBody>
          <CardFooter>
            <Button color="success">
              <Icon icon="hugeicons:refresh" className="mr-2" />
              Renew All
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-1 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-lg font-bold">Holds</h2>
          </CardHeader>
          <CardBody>
            <p><strong>1984</strong></p>
            <p>Position: {mockData.holds.position}</p>
          </CardBody>
          <CardFooter>
            <Button color="primary">
              <Icon icon="hugeicons:settings-01" className="mr-2" />
              Manage Holds
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="col-span-1 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-lg font-bold">Fines</h2>
          </CardHeader>
          <CardBody>
            <p><strong>Amount: ${mockData.fines.amount.toFixed(2)}</strong></p>
            <p>{mockData.fines.reason}</p>
          </CardBody>
          <CardFooter>
            <Button color="danger">
              <Icon icon="hugeicons:dollar" className="mr-2" />
              Pay Fines
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-1 h-full appshadow-[var(--app-box-shadow-small)] rounded-lg">
          <CardHeader>
            <h2 className="text-lg font-bold">Notifications</h2>
          </CardHeader>
          <CardBody>
            {mockData.notifications.map((notification, index) => (
              <div key={index} className="mb-2 flex items-center">
                <Icon 
                  icon={notification.type === 'warning' ? 'hugeicons:alert-triangle' : 'hugeicons:info-circle'} 
                  className={`mr-2 ${notification.type === 'warning' ? 'text-[hsl(var(--app-warning-500))]' : 'text-[hsl(var(--app-primary-500))]'}`}
                />
                <span>{notification.message}</span>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>

      <Card className="mt-6 appshadow-[var(--app-box-shadow-small)] rounded-lg">
        <CardHeader>
          <h2 className="text-lg font-bold">Recent Activity</h2>
        </CardHeader>
        <CardBody>
          <Table aria-label="Recent activity table">
            <TableHeader>
              <TableColumn>Date</TableColumn>
              <TableColumn>Action</TableColumn>
              <TableColumn>Item</TableColumn>
            </TableHeader>
            <TableBody>
              {mockData.recentActivity.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell>{activity.item}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </main>
  );
}
