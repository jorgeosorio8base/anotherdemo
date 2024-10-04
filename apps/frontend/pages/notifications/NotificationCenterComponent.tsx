import React from 'react';
import { Card, CardHeader, CardBody, Checkbox, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function NotificationCenterComponent() {
  const mockNotifications = [
    {
      type: 'Due Date Reminder',
      message: '"The Great Gatsby" is due in 2 days',
      timestamp: '2h ago'
    },
    {
      type: 'Hold Available',
      message: '"To Kill a Mockingbird" is ready for pickup',
      timestamp: '1d ago'
    },
    {
      type: 'Library Announcement',
      message: 'New online resources available',
      timestamp: '3d ago'
    }
  ];

  const mockPreferences = [
    { id: 'due-date', label: 'Due Date Reminders', isSelected: true },
    { id: 'hold-available', label: 'Hold Availability Alerts', isSelected: true },
    { id: 'library-announcement', label: 'Library Announcements', isSelected: true },
    { id: 'promotional-emails', label: 'Promotional Emails', isSelected: false },
  ];

  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-12">
            <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)]" radius="lg">
              <CardHeader className="flex justify-start p-6 border-b border-[hsl(var(--app-foreground-200))]">
                <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
                  Notification Center
                </h1>
              </CardHeader>
            </Card>
          </section>

          <section className="col-span-12 lg:col-span-8">
            <Card className="h-full bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]" radius="lg">
              <CardHeader>
                <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">
                  Notifications
                </h2>
              </CardHeader>
              <CardBody>
                <ul className="flex flex-col gap-4">
                  {mockNotifications.map((notification, index) => (
                    <li key={index} className="flex flex-col p-4 border-b border-[hsl(var(--app-background-200))] last:border-b-0">
                      <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">
                        {notification.type}
                      </h3>
                      <p className="text-sm text-[hsl(var(--app-foreground-600))]">
                        {notification.message}
                      </p>
                      <span className="text-xs text-[hsl(var(--app-foreground-400))] mt-2">
                        {notification.timestamp}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </section>

          <section className="col-span-12 lg:col-span-4">
            <Card className="h-full bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]" radius="lg">
              <CardHeader>
                <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">
                  Notification Preferences
                </h2>
              </CardHeader>
              <CardBody>
                <fieldset>
                  <legend className="sr-only">Notification Preferences</legend>
                  {mockPreferences.map((preference) => (
                    <Checkbox
                      key={preference.id}
                      isSelected={preference.isSelected}
                      color="primary"
                      className="mb-2 text-sm text-[hsl(var(--app-foreground-700))] hover:bg-[hsl(var(--app-background-200))] transition-colors duration-150"
                    >
                      {preference.label}
                    </Checkbox>
                  ))}
                </fieldset>
                <Button
                  color="primary"
                  className="mt-4 px-4 py-2 bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))] transition-colors duration-150"
                  startContent={<Icon icon="hugeicons:save-energy-01" width="18" height="18" />}
                >
                  Save Preferences
                </Button>
              </CardBody>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
