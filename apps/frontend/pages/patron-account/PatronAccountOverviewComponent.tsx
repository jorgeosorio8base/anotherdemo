import React from 'react';
import { Card, CardHeader, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Switch, Checkbox } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function PatronAccountOverviewComponent() {
  const mockCurrentLoans = [
    { id: '1', title: 'The Great Gatsby', dueDate: '05/15/2024' },
    { id: '2', title: 'To Kill a Mockingbird', dueDate: '05/20/2024' }
  ];

  const mockLoanHistory = [
    { id: '1', title: '1984', returnDate: '04/01/2024' },
    { id: '2', title: 'Pride and Prejudice', returnDate: '03/15/2024' }
  ];

  const mockOverdueItems = [
    { id: '1', title: 'Moby Dick', dueDate: '04/30/2024', daysOverdue: 5, fine: 2.50 }
  ];

  const mockUpcomingHolds = [
    { id: '1', title: 'The Catcher in the Rye', availableDate: '05/10/2024' }
  ];

  const mockNotificationSettings = [
    { id: 'email', label: 'Email notifications for due dates', checked: true },
    { id: 'sms', label: 'SMS notifications for holds available', checked: true }
  ];

  return (
    <main className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] font-sans p-6">
      <h1 className="text-2xl font-bold mb-6">Patron Account Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold">Current Loans</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Current loans table">
              <TableHeader>
                <TableColumn>Title</TableColumn>
                <TableColumn>Due Date</TableColumn>
                <TableColumn>Action</TableColumn>
              </TableHeader>
              <TableBody>
                {mockCurrentLoans.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>{loan.title}</TableCell>
                    <TableCell>{loan.dueDate}</TableCell>
                    <TableCell>
                      <Button size="sm" color="primary">Renew</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold">Loan History</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Loan history table">
              <TableHeader>
                <TableColumn>Title</TableColumn>
                <TableColumn>Return Date</TableColumn>
              </TableHeader>
              <TableBody>
                {mockLoanHistory.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>{loan.title}</TableCell>
                    <TableCell>{loan.returnDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>

      <Card className="mt-6 bg-[hsl(var(--app-warning-50))]">
        <CardHeader>
          <h2 className="text-xl font-semibold">Overdue Items & Fines</h2>
        </CardHeader>
        <CardBody>
          <Table aria-label="Overdue items table">
            <TableHeader>
              <TableColumn>Title</TableColumn>
              <TableColumn>Due Date</TableColumn>
              <TableColumn>Days Overdue</TableColumn>
              <TableColumn>Fine</TableColumn>
            </TableHeader>
            <TableBody>
              {mockOverdueItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>{item.daysOverdue}</TableCell>
                  <TableCell>${item.fine.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold">Upcoming Holds</h2>
          </CardHeader>
          <CardBody>
            {mockUpcomingHolds.map((hold) => (
              <div key={hold.id} className="flex justify-between items-center">
                <span>{hold.title}</span>
                <span>Available: {hold.availableDate}</span>
              </div>
            ))}
          </CardBody>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold">Notification Settings</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-2">
              {mockNotificationSettings.map((setting) => (
                <div key={setting.id} className="flex justify-between items-center">
                  <span>{setting.label}</span>
                  <Switch defaultSelected aria-label={`${setting.label} toggle`} />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
