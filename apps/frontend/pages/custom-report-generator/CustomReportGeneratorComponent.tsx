import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CheckboxGroup, Checkbox, Select, SelectItem, Button, ButtonGroup } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function CustomReportGeneratorComponent() {
  const dataPoints = [
    { label: 'Book Loans', value: 'bookLoans' },
    { label: 'Book Returns', value: 'bookReturns' },
    { label: 'Overdue Books', value: 'overdueBooks' },
    { label: 'Popular Genres', value: 'popularGenres' },
    { label: 'Active Patrons', value: 'activePatrons' },
    { label: 'New Acquisitions', value: 'newAcquisitions' },
  ];

  const dateRangeOptions = [
    { label: 'Last 7 days', value: '7days' },
    { label: 'Last 30 days', value: '30days' },
    { label: 'Last 3 months', value: '3months' },
    { label: 'Last 6 months', value: '6months' },
    { label: 'Last year', value: '1year' },
  ];

  const patronTypeOptions = [
    { label: 'All', value: 'all' },
    { label: 'Students', value: 'students' },
    { label: 'Faculty', value: 'faculty' },
    { label: 'Public', value: 'public' },
  ];

  const bookCategoryOptions = [
    { label: 'All', value: 'all' },
    { label: 'Fiction', value: 'fiction' },
    { label: 'Non-fiction', value: 'nonfiction' },
    { label: 'Reference', value: 'reference' },
    { label: 'Periodicals', value: 'periodicals' },
  ];

  const visualizationOptions = [
    { label: 'Bar Chart', value: 'bar' },
    { label: 'Line Graph', value: 'line' },
    { label: 'Pie Chart', value: 'pie' },
    { label: 'Table', value: 'table' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full bg-[hsl(var(--app-background-50))] rounded-xl shadow-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">Custom Report Generator</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-6">
          <section>
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-2">Select Data Points</h2>
            <CheckboxGroup
              orientation="horizontal"
              color="primary"
              className="gap-4 flex flex-wrap"
            >
              {dataPoints.map((point) => (
                <Checkbox key={point.value} value={point.value}>
                  {point.label}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-2">Apply Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="Date Range"
                placeholder="Select a date range"
              >
                {dateRangeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Patron Type"
                placeholder="Select patron type"
              >
                {patronTypeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Book Category"
                placeholder="Select book category"
              >
                {bookCategoryOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-2">Visualization Options</h2>
            <ButtonGroup>
              {visualizationOptions.map((option) => (
                <Button key={option.value} color="primary" variant="flat">
                  <Icon icon={`hugeicons:${option.value}-chart`} className="mr-2" />
                  {option.label}
                </Button>
              ))}
            </ButtonGroup>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))] mb-2">Report Preview</h2>
            <div className="w-full h-64 bg-[hsl(var(--app-background-100))] rounded-lg flex items-center justify-center text-[hsl(var(--app-foreground-400))]">
              Report visualization will appear here
            </div>
          </section>
        </CardBody>
        <CardFooter>
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <div className="flex gap-2">
              <Button color="primary">
                <Icon icon="hugeicons:save" className="mr-2" />
                Save Template
              </Button>
              <Button color="secondary">
                <Icon icon="hugeicons:calendar" className="mr-2" />
                Schedule Report
              </Button>
            </div>
            <ButtonGroup>
              <Button color="success">
                <Icon icon="hugeicons:file-pdf" className="mr-2" />
                Export PDF
              </Button>
              <Button color="success">
                <Icon icon="hugeicons:file-csv" className="mr-2" />
                Export CSV
              </Button>
              <Button color="success">
                <Icon icon="hugeicons:file-excel" className="mr-2" />
                Export Excel
              </Button>
            </ButtonGroup>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
