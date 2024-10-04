import React from 'react';
import { Card, CardHeader, CardBody, Checkbox, CheckboxGroup, DateInput, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

type BookDetails = {
  title: string;
  author: string;
  currentStatus: string;
};

type HoldInformation = {
  estimatedWaitTime: string;
  positionInQueue: number;
};

type NotificationPreferences = {
  email: boolean;
  sms: boolean;
  inAppNotification: boolean;
};

const bookDetails: BookDetails = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  currentStatus: 'On Loan',
};

const holdInformation: HoldInformation = {
  estimatedWaitTime: '2 weeks',
  positionInQueue: 3,
};

const notificationPreferences: NotificationPreferences = {
  email: true,
  sms: false,
  inAppNotification: true,
};

export function HoldConfirmationComponent() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[hsl(var(--app-background-100))]">
      <Card className="w-full max-w-3xl mx-auto bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-medium)] rounded-xl overflow-hidden">
        <CardHeader className="border-b border-[hsl(var(--app-foreground-200))] p-6">
          <h1 className="text-2xl font-bold text-[hsl(var(--app-primary-500))]">
            Hold Confirmation
          </h1>
        </CardHeader>
        <CardBody className="p-6">
          <div className="grid grid-cols-12 gap-6">
            <section className="col-span-12 lg:col-span-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">
                Book Details
              </h2>
              <p className="text-[hsl(var(--app-foreground-700))]">Title: {bookDetails.title}</p>
              <p className="text-[hsl(var(--app-foreground-700))]">Author: {bookDetails.author}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[hsl(var(--app-foreground-700))]">Current Status:</span>
                <span className="bg-[hsl(var(--app-warning-100))] text-[hsl(var(--app-warning-700))] px-2 py-1 rounded-full text-xs font-semibold">
                  {bookDetails.currentStatus}
                </span>
              </div>
            </section>
            <section className="col-span-12 lg:col-span-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">
                Hold Information
              </h2>
              <p className="text-[hsl(var(--app-foreground-700))]">Estimated Wait Time: {holdInformation.estimatedWaitTime}</p>
              <p className="text-[hsl(var(--app-foreground-700))]">Your Position in Queue: {holdInformation.positionInQueue}</p>
            </section>
            <section className="col-span-12">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">
                Notification Preferences
              </h2>
              <CheckboxGroup className="flex flex-col gap-2">
                <Checkbox isSelected={notificationPreferences.email} color="primary">
                  <span className="text-[hsl(var(--app-foreground-700))]">Email</span>
                </Checkbox>
                <Checkbox isSelected={notificationPreferences.sms} color="primary">
                  <span className="text-[hsl(var(--app-foreground-700))]">SMS</span>
                </Checkbox>
                <Checkbox isSelected={notificationPreferences.inAppNotification} color="primary">
                  <span className="text-[hsl(var(--app-foreground-700))]">In-app notification</span>
                </Checkbox>
              </CheckboxGroup>
            </section>
            <section className="col-span-12">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))] mb-4">
                Hold Expiration
              </h2>
              <DateInput
                label="Select a date"
                placeholder="MM/DD/YYYY"
                className="w-full sm:w-auto"
              />
              <p className="text-sm text-[hsl(var(--app-foreground-600))] mt-2">
                Select a date to automatically cancel the hold if not fulfilled
              </p>
            </section>
          </div>
        </CardBody>
        <footer className="flex justify-between items-center w-full px-6 py-4 bg-[hsl(var(--app-background-50))] border-t border-[hsl(var(--app-foreground-200))]">
          <Button
            variant="flat"
            color="default"
            size="lg"
            className="px-6 py-2 bg-[hsl(var(--app-background-100))] text-[hsl(var(--app-foreground-700))]"
            startContent={<Icon icon="hugeicons:cancel-circle" />}
            aria-label="Cancel hold request"
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            color="primary"
            size="lg"
            className="px-6 py-2 bg-[hsl(var(--app-primary-500))] text-[hsl(var(--app-background-50))]"
            startContent={<Icon icon="hugeicons:check-list" />}
            aria-label="Confirm hold request"
          >
            Confirm Hold
          </Button>
        </footer>
      </Card>
    </main>
  );
}
