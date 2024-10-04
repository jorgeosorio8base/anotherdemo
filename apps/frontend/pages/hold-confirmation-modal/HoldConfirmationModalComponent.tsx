import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';

type BookHold = {
  title: string;
  author: string;
  isbn: string;
  estimatedAvailability: string;
  queuePosition: number;
  notificationDetails: string;
  expirationDays: number;
};

const mockBookHold: BookHold = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  isbn: '978-0743273565',
  estimatedAvailability: '2-3 weeks',
  queuePosition: 3,
  notificationDetails: 'You will be notified when the book is ready for pickup',
  expirationDays: 7
};

export function HoldConfirmationModalComponent() {
  return (
    <main className="min-h-screen bg-[hsl(var(--app-background-50))] flex items-center justify-center p-4">
      <Modal
        isOpen={true}
        onClose={() => {}}
        classNames={{
          base: 'bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]',
          header: 'border-b-[1px] border-[hsl(var(--app-background-200))]',
          footer: 'border-t-[1px] border-[hsl(var(--app-background-200))]',
          closeButton: 'hover:bg-[hsl(var(--app-background-200))] rounded-full'
        }}
      >
        <ModalContent className="max-w-md w-full">
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-[hsl(var(--app-primary-700))]">
              Hold Confirmation
            </h2>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <strong>{mockBookHold.title}</strong>
                <span>{mockBookHold.author}</span>
                <span className="font-mono">{mockBookHold.isbn}</span>
              </div>
              <p className="text-[hsl(var(--app-success-600))] font-medium">
                Your hold has been successfully placed!
              </p>
              <p>
                Estimated availability: <span className="font-medium">{mockBookHold.estimatedAvailability}</span>
              </p>
              <div className="bg-[hsl(var(--app-background-100))] p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Hold Details:</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-1">You are number {mockBookHold.queuePosition} in the queue</li>
                  <li className="mb-1">{mockBookHold.notificationDetails}</li>
                  <li className="mb-1">The hold will expire in {mockBookHold.expirationDays} days once the book is available</li>
                </ul>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button auto color="primary">
              View My Holds
            </Button>
            <Button auto color="default">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
