import React from 'react';
import { Card, CardHeader, CardBody, Button, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function LoanConfirmationComponent() {
  const mockBookDetails = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0743273565'
  };

  const mockLoanInfo = {
    checkoutDate: 'May 15, 2023',
    dueDate: 'June 5, 2023'
  };

  const mockItemsCheckedOut = 3;

  return (
    <main className="container mx-auto px-4 py-8 font-sans">
      <Card className="w-full max-w-3xl mx-auto bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] rounded-xl shadow-[var(--app-box-shadow-medium)]">
        <CardHeader className="flex flex-col items-center pb-0">
          <h1 className="text-[hsl(var(--app-primary-900))] text-2xl font-bold mb-4">Loan Confirmation</h1>
        </CardHeader>
        <CardBody className="p-6 space-y-6">
          <div className="flex items-center gap-3 bg-[hsl(var(--app-success-100))] text-[hsl(var(--app-success-700))] p-4 rounded-lg" aria-live="polite">
            <Icon icon="hugeicons:check-list" className="text-2xl text-[hsl(var(--app-success-500))]" aria-hidden="true" />
            <div>
              <p className="font-bold text-lg">Transaction Successful!</p>
              <p className="text-sm">Your book has been successfully checked out.</p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-2">Book Details</h2>
            <p><span className="font-semibold">Title:</span> {mockBookDetails.title}</p>
            <p><span className="font-semibold">Author:</span> {mockBookDetails.author}</p>
            <p><span className="font-semibold">ISBN:</span> {mockBookDetails.isbn}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-2">Loan Information</h2>
            <p><span className="font-semibold">Check-out Date:</span> {mockLoanInfo.checkoutDate}</p>
            <p><span className="font-semibold">Due Date:</span> {mockLoanInfo.dueDate}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-2">Account Update</h2>
            <p>You now have {mockItemsCheckedOut} items checked out.</p>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Button color="primary" aria-label="Print receipt">
              Print Receipt
            </Button>
            <Button color="secondary" aria-label="Email receipt">
              Email Receipt
            </Button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" color="primary" underline="always">Place Hold on Another Copy</Link>
              <Link href="#" color="primary" underline="always">Browse Similar Books</Link>
              <Link href="#" color="primary" underline="always">View My Account</Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
