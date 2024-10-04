import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

type AccountSettingsCardProps = {
  title: string;
  fields?: {
    label: string;
    placeholder: string;
    type?: string;
  }[];
  checkboxes?: {
    label: string;
    isSelected: boolean;
  }[];
  buttonText: string;
};

function AccountSettingsCard({ title, fields, checkboxes, buttonText }: AccountSettingsCardProps) {
  return (
    <Card className="w-full bg-[hsl(var(--app-background-50))] appShadow-[var(--app-box-shadow-small)] h-full">
      <CardHeader className="flex flex-col items-start px-6 pt-6 pb-0">
        <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">{title}</h2>
      </CardHeader>
      <CardBody className="px-6 py-4">
        {fields && fields.map((field, index) => (
          <Input
            key={index}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type || 'text'}
            variant="bordered"
            className="mb-4"
          />
        ))}
        {checkboxes && checkboxes.map((checkbox, index) => (
          <Checkbox
            key={index}
            isSelected={checkbox.isSelected}
            className="mb-2"
          >
            {checkbox.label}
          </Checkbox>
        ))}
      </CardBody>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          color="primary"
          className="w-full"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function AccountSettingsComponent() {
  const personalInfo = {
    title: 'Personal Information',
    fields: [
      { label: 'First Name', placeholder: 'Enter your first name' },
      { label: 'Last Name', placeholder: 'Enter your last name' },
      { label: 'Email', placeholder: 'Enter your email', type: 'email' },
      { label: 'Phone Number', placeholder: 'Enter your phone number', type: 'tel' },
    ],
    buttonText: 'Update Personal Information',
  };

  const changePassword = {
    title: 'Change Password',
    fields: [
      { label: 'Current Password', placeholder: 'Enter current password', type: 'password' },
      { label: 'New Password', placeholder: 'Enter new password', type: 'password' },
      { label: 'Confirm New Password', placeholder: 'Confirm new password', type: 'password' },
    ],
    buttonText: 'Change Password',
  };

  const communicationPreferences = {
    title: 'Communication Preferences',
    checkboxes: [
      { label: 'Receive email notifications', isSelected: true },
      { label: 'Receive SMS notifications', isSelected: true },
      { label: 'Receive push notifications', isSelected: false },
    ],
    buttonText: 'Update Communication Preferences',
  };

  const notificationSettings = {
    title: 'Notification Settings',
    checkboxes: [
      { label: 'Due date reminders', isSelected: true },
      { label: 'Available hold notifications', isSelected: true },
      { label: 'Library announcements', isSelected: true },
      { label: 'New book recommendations', isSelected: false },
    ],
    buttonText: 'Update Notification Settings',
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-8">Account Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="col-span-1 md:col-span-2">
          <AccountSettingsCard {...personalInfo} />
        </section>
        <section className="col-span-1">
          <AccountSettingsCard {...changePassword} />
        </section>
        <section className="col-span-1">
          <AccountSettingsCard {...communicationPreferences} />
        </section>
        <section className="col-span-1 md:col-span-2">
          <AccountSettingsCard {...notificationSettings} />
        </section>
      </div>
    </main>
  );
}
