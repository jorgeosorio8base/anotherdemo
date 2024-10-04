import React from 'react';
import { Card, CardHeader, CardBody, Checkbox, Switch, Select, SelectItem, Input, Textarea, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const notificationMethods = [
  { id: 'email', label: 'Email', checked: true },
  { id: 'sms', label: 'SMS', checked: false },
  { id: 'push', label: 'Push Notifications', checked: true }
];

const alertSettings = [
  { id: 'held-items', label: 'Held items available for pickup', checked: true },
  { id: 'pickup-deadline', label: 'Pickup deadline reminders', checked: true },
  { id: 'queue-position', label: 'Queue position updates', checked: false }
];

const frequencyOptions = [
  { value: 'immediately', label: 'Immediately' },
  { value: 'hourly', label: 'Hourly' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' }
];

const messagingTemplates = [
  { key: 'hold-available', label: 'Hold Available Template' },
  { key: 'pickup-reminder', label: 'Pickup Reminder Template' },
  { key: 'overdue-notice', label: 'Overdue Notice Template' }
];

export function HoldNotificationSettingsComponent() {
  return (
    <main className="p-4 bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))]">
      <h1 className="text-2xl font-bold mb-6">Hold Notification Settings</h1>
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-6">
          <Card className="w-full h-full">
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Notification Preferences</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex flex-col gap-4">
                <div>
                  <h5 className="text-sm font-semibold mb-2">Notification Methods</h5>
                  {notificationMethods.map((method) => (
                    <Checkbox key={method.id} defaultSelected={method.checked}>
                      {method.label}
                    </Checkbox>
                  ))}
                </div>
                <div>
                  <h5 className="text-sm font-semibold mb-2">Notification Frequency</h5>
                  <Select
                    placeholder="Select frequency"
                    defaultSelectedKeys={['immediately']}
                    className="max-w-xs"
                  >
                    {frequencyOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-6">
          <Card className="w-full h-full">
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Alert Settings</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex flex-col gap-2">
                {alertSettings.map((setting) => (
                  <Checkbox key={setting.id} defaultSelected={setting.checked}>
                    {setting.label}
                  </Checkbox>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="w-full">
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Staff Settings</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex flex-col gap-4">
                <div>
                  <h5 className="text-sm font-semibold mb-2">System-wide Notification Rules</h5>
                  <Textarea
                    placeholder="Enter system-wide notification rules..."
                    className="w-full"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold mb-2">Messaging Templates</h5>
                  <Select
                    placeholder="Select template"
                    className="max-w-xs mb-2"
                  >
                    {messagingTemplates.map((template) => (
                      <SelectItem key={template.key} value={template.key}>
                        {template.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Textarea
                    placeholder="Enter template content..."
                    className="w-full"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          color="primary"
          variant="solid"
          size="md"
          radius="md"
          startContent={<Icon icon="hugeicons:save-energy-01" width={20} height={20} />}
          className="font-semibold"
          disableRipple
        >
          Save Settings
        </Button>
      </div>
    </main>
  );
}
