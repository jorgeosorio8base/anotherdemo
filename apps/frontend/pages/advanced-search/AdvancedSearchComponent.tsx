import React from 'react';
import { Input, Select, SelectItem, Button, Spacer, RadioGroup, Radio, Card, CardHeader, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const languages = ['Any', 'English', 'Spanish', 'French', 'German', 'Chinese'];
const formats = ['Any', 'Book', 'eBook', 'Audio', 'Journal', 'Magazine'];
const booleanOperators = ['AND', 'OR', 'NOT'];

const searchTips = [
  {
    tip: 'Use quotation marks for exact phrase searches',
    example: '"To Kill a Mockingbird"'
  },
  {
    tip: 'Use asterisks for wildcard searches',
    example: 'librar* to find library, libraries, librarian, etc.'
  },
  {
    tip: 'Combine search terms with AND, OR, NOT',
    example: '(cats OR dogs) AND pets'
  },
  {
    tip: 'Use parentheses to group search terms',
    example: '(cats OR dogs) AND pets'
  }
];

export function AdvancedSearchComponent() {
  return (
    <main className="grid grid-cols-12 gap-6 p-6 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-6">Advanced Search</h1>
      </section>
      
      <section className="col-span-12 lg:col-span-8">
        <div className="bg-white rounded-lg shadow-md p-6 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Title"
              placeholder="Enter title"
              className="w-full"
            />
            <Input
              label="Author"
              placeholder="Enter author name"
              className="w-full"
            />
            <Input
              label="Publisher"
              placeholder="Enter publisher name"
              className="w-full"
            />
            <div className="flex space-x-2">
              <Input
                label="Publication Date From"
                type="date"
                className="w-full"
              />
              <Input
                label="To"
                type="date"
                className="w-full"
              />
            </div>
            <Select
              label="Language"
              placeholder="Select language"
              className="w-full"
            >
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Format"
              placeholder="Select format"
              className="w-full"
            >
              {formats.map((format) => (
                <SelectItem key={format} value={format}>
                  {format}
                </SelectItem>
              ))}
            </Select>
            <Input
              label="Subject Headings"
              placeholder="Enter subject headings"
              className="w-full"
            />
            <Input
              label="Series"
              placeholder="Enter series name"
              className="w-full"
            />
            <Input
              label="Call Number"
              placeholder="Enter call number"
              className="w-full"
            />
            <RadioGroup label="Boolean Operators" orientation="horizontal">
              {booleanOperators.map((op) => (
                <Radio key={op} value={op}>{op}</Radio>
              ))}
            </RadioGroup>
          </div>
          <Spacer y={4} />
          <div className="flex justify-end space-x-2">
            <Button color="default" variant="flat">
              Clear
            </Button>
            <Button color="primary">
              <Icon icon="hugeicons:search-02" className="mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>
      
      <section className="col-span-12 lg:col-span-4">
        <Card className="h-full bg-white rounded-lg shadow-md">
          <CardHeader className="flex gap-3">
            <Icon icon="hugeicons:search-01" width="24" height="24" />
            <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">
              Search Tips
            </h2>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-5">
              {searchTips.map((tip, index) => (
                <li key={index} className="mb-2">
                  <p className="text-sm text-[hsl(var(--app-foreground-700))]">
                    <strong>{tip.tip}:</strong> {tip.example}
                  </p>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
