import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function LoanHistoryandManagementComponent() {
  const activeLoans = [
    { key: '1', bookTitle: 'To Kill a Mockingbird', dueDate: '2024-03-15', status: 'On Time' },
    { key: '2', bookTitle: '1984', dueDate: '2024-03-01', status: 'Overdue' },
  ];

  const borrowingHistory = [
    { id: '1', bookTitle: 'The Great Gatsby', borrowedDate: '2024-01-15', returnedDate: '2024-02-14' },
    { id: '2', bookTitle: 'Pride and Prejudice', borrowedDate: '2023-12-01', returnedDate: '2023-12-31' },
  ];

  const currentHolds = [
    { id: '1', bookTitle: 'The Catcher in the Rye', holdPlacedDate: '2024-02-28', status: 'Pending' },
  ];

  const finesAndFeesData = { balance: 2.50 };

  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-100))]">
      <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)] mb-8" radius="none">
        <CardHeader className="p-4 border-b border-[hsl(var(--app-foreground-200))]">
          <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
            Loan History and Management
          </h1>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] p-6 rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <h2 className="text-2xl font-bold mb-4">Active Loans</h2>
          <Table aria-label="Active loans table">
            <TableHeader>
              <TableColumn>BOOK TITLE</TableColumn>
              <TableColumn>DUE DATE</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {activeLoans.map((loan) => (
                <TableRow key={loan.key}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-primary-500))]" />
                      {loan.bookTitle}
                    </div>
                  </TableCell>
                  <TableCell>{loan.dueDate}</TableCell>
                  <TableCell>
                    <Chip
                      color={loan.status === 'On Time' ? 'success' : 'danger'}
                      variant="flat"
                    >
                      {loan.status}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" color="primary">Renew</Button>
                      <Button size="sm" color="secondary">Return</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className="flex flex-col gap-4 bg-[hsl(var(--app-background-50))] p-6 rounded-lg shadow-[var(--app-box-shadow-medium)]">
          <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
            <Icon icon="hugeicons:book-02" className="inline-block mr-2" />
            Borrowing History
          </h2>
          <Table 
            aria-label="Borrowing history table"
            className="w-full"
            isStriped
            isHeaderSticky
          >
            <TableHeader>
              <TableColumn>BOOK TITLE</TableColumn>
              <TableColumn>BORROWED DATE</TableColumn>
              <TableColumn>RETURNED DATE</TableColumn>
            </TableHeader>
            <TableBody>
              {borrowingHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.bookTitle}</TableCell>
                  <TableCell>{item.borrowedDate}</TableCell>
                  <TableCell>{item.returnedDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>

      <div className="mt-8">
        <div className="bg-[hsl(var(--app-background-50))] rounded-lg shadow-[var(--app-box-shadow-medium)] p-6 mb-8">
          <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">Current Holds</h2>
          <Table
            aria-label="Current holds table"
            classNames={{
              base: 'max-h-[420px] overflow-scroll',
              table: 'min-h-[100px]',
            }}
          >
            <TableHeader>
              <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">BOOK TITLE</TableColumn>
              <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">HOLD PLACED DATE</TableColumn>
              <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">STATUS</TableColumn>
              <TableColumn className="bg-[hsl(var(--app-background-100))] font-semibold">ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {currentHolds.map((hold) => (
                <TableRow key={hold.id} className="hover:bg-[hsl(var(--app-background-100))] transition-colors duration-150">
                  <TableCell>{hold.bookTitle}</TableCell>
                  <TableCell>{hold.holdPlacedDate}</TableCell>
                  <TableCell>
                    <Chip
                      color={hold.status === 'Pending' ? 'warning' : 'success'}
                      variant="flat"
                    >
                      {hold.status}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="danger"
                      variant="light"
                      startContent={<Icon icon="hugeicons:cancel-02" />}
                    >
                      Cancel Hold
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Card className="bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)] my-4">
        <CardHeader className="p-6">
          <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">Fines and Fees</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-lg font-medium text-[hsl(var(--app-foreground-800))]" aria-label="Current fines and fees balance">
              Current Balance: ${finesAndFeesData.balance.toFixed(2)}
            </p>
            <Button
              color="primary"
              className="bg-[hsl(var(--app-primary-500))] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--app-primary-600))] transition-colors duration-150"
              aria-label="Pay fines and fees"
              endContent={<Icon icon="hugeicons:money-send-01" />}
            >
              Pay Now
            </Button>
          </div>
        </CardHeader>
      </Card>
    </main>
  );
}
