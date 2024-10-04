import React from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const languages = [
  { key: 'en', name: 'English' },
  { key: 'es', name: 'Spanish' },
  { key: 'fr', name: 'French' },
  { key: 'de', name: 'German' },
  { key: 'it', name: 'Italian' },
  { key: 'pt', name: 'Portuguese' },
  { key: 'ru', name: 'Russian' },
  { key: 'zh', name: 'Chinese' },
  { key: 'ja', name: 'Japanese' },
  { key: 'ko', name: 'Korean' },
];

const dateFormatOptions = [
  { key: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
  { key: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
  { key: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
];

const currencies = [
  { value: 'USD', label: 'USD ($)' },
  { value: 'EUR', label: 'EUR (€)' },
  { value: 'GBP', label: 'GBP (£)' },
  { value: 'JPY', label: 'JPY (¥)' },
];

export function LanguageSettingsComponent() {
  return (
    <main className="bg-[hsl(var(--app-background-50))] p-6">
      <h1 className="text-2xl font-bold text-[hsl(var(--app-primary-500))] mb-6">Language Settings</h1>
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full appShadow-[var(--app-box-shadow-small)]">
            <CardHeader className="flex flex-col items-start pb-0 pt-5 px-6">
              <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">
                Preferred Language
              </h2>
            </CardHeader>
            <CardBody className="px-6 py-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="language-select" className="text-sm font-medium text-[hsl(var(--app-foreground-700))]">
                  Select your preferred language:
                </label>
                <Select
                  id="language-select"
                  placeholder="Choose a language"
                  className="w-full"
                  size="md"
                  radius="md"
                  variant="bordered"
                  startContent={<Icon icon="hugeicons:globe" className="text-[hsl(var(--app-foreground-500))]" />}
                >
                  {languages.map((lang) => (
                    <SelectItem key={lang.key} value={lang.key}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full appShadow-[var(--app-box-shadow-small)]">
            <CardHeader className="flex gap-3 p-5 border-b border-[hsl(var(--app-background-200))]">
              <Icon icon="hugeicons:calendar" width="24" height="24" />
              <h2 className="text-lg font-semibold">Date Format</h2>
            </CardHeader>
            <CardBody className="p-5">
              <label htmlFor="date-format-select" className="block text-sm mb-2">
                Choose your preferred date format:
              </label>
              <Select
                id="date-format-select"
                placeholder="Select date format"
                className="w-full"
                defaultSelectedKeys={['MM/DD/YYYY']}
              >
                {dateFormatOptions.map((option) => (
                  <SelectItem key={option.key} value={option.key}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 lg:col-span-4">
          <Card className="h-full appShadow-[var(--app-box-shadow-small)]">
            <CardHeader className="flex gap-3 p-5">
              <Icon icon="hugeicons:money-01" width="24" height="24" />
              <h2 className="text-xl font-semibold">Currency Display</h2>
            </CardHeader>
            <CardBody className="p-5">
              <label htmlFor="currency-select" className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-2">
                Select your preferred currency:
              </label>
              <Select
                id="currency-select"
                placeholder="Select a currency"
                className="w-full bg-[hsl(var(--app-background-100))] border-[hsl(var(--app-primary-200))] rounded-md"
              >
                {currencies.map((currency) => (
                  <SelectItem key={currency.value} value={currency.value}>
                    {currency.label}
                  </SelectItem>
                ))}
              </Select>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
