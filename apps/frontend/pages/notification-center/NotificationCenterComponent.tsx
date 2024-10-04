import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Select, SelectItem, Textarea, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Checkbox, CheckboxGroup } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function NotificationCenterComponent() {
  // Mock data
  const reminderTypes = [
    { value: 'first', label: 'First Reminder' },
    { value: 'second', label: 'Second Reminder' },
    { value: 'final', label: 'Final Notice' },
  ];

  const notificationLogData = [
    { id: 1, date: '2024-03-15', patron: 'John Doe', type: 'First Reminder', status: 'Sent' },
    { id: 2, date: '2024-03-14', patron: 'Jane Smith', type: 'Final Notice', status: 'Failed' },
  ];

  const notificationMethods = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push Notification' },
  ];

  const notificationFrequencies = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ];

  return (
    <main className="grid grid-cols-12 gap-6 p-4 bg-[hsl(var(--app-background-50))]">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-6">Notification Center</h1>
      </div>
      
      <div className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background-100))] shadow-md rounded-lg h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">Overdue Reminders</h2>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Select
              label="Reminder Type"
              placeholder="Select a reminder type"
              className="max-w-xs"
            >
              {reminderTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </Select>
            <Textarea
              label="Message Template"
              placeholder="Enter message template..."
              minRows={3}
              maxRows={5}
            />
          </CardBody>
          <CardFooter>
            <Button color="primary">
              <Icon icon="hugeicons:send" className="mr-2" />
              Send Reminders
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-6">
        <Card className="bg-[hsl(var(--app-background-100))] shadow-md rounded-lg h-full">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">Notification Log</h2>
          </CardHeader>
          <CardBody>
            <Table aria-label="Notification log table">
              <TableHeader>
                <TableColumn>Date</TableColumn>
                <TableColumn>Patron</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn>Status</TableColumn>
              </TableHeader>
              <TableBody>
                {notificationLogData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.patron}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>
                      <Chip
                        color={row.status === 'Sent' ? 'success' : 'danger'}
                        variant="flat"
                      >
                        {row.status}
                      </Chip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-100))] shadow-md rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-800))]">Patron Notification Preferences</h2>
          </CardHeader>
          <CardBody className="flex flex-col md:flex-row gap-4 justify-between">
            <CheckboxGroup
              label="Notification Methods"
              orientation="vertical"
              color="primary"
            >
              {notificationMethods.map((method) => (
                <Checkbox key={method.value} value={method.value}>{method.label}</Checkbox>
              ))}
            </CheckboxGroup>
            <Select
              label="Notification Frequency"
              placeholder="Select frequency"
              className="max-w-xs"
            >
              {notificationFrequencies.map((frequency) => (
                <SelectItem key={frequency.value} value={frequency.value}>
                  {frequency.label}
                </SelectItem>
              ))}
            </Select>
          </CardBody>
          <CardFooter>
            <Button color="primary">
              <Icon icon="hugeicons:save" className="mr-2" />
              Save Preferences
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
