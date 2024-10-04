import React from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem, Input, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart
const circulationData = [
  { month: 'Jan', books: 1200 },
  { month: 'Feb', books: 1400 },
  { month: 'Mar', books: 1300 },
  { month: 'Apr', books: 1800 },
  { month: 'May', books: 2000 },
  { month: 'Jun', books: 2200 },
];

// Mock data for predefined reports
const predefinedReports = [
  'Monthly Circulation Report',
  'Overdue Books Summary',
  'Popular Genres Analysis',
  'Patron Activity Report'
];

// Mock data for report types
const reportTypes = [
  { key: 'book-circulation', name: 'Book Circulation' },
  { key: 'patron-activity', name: 'Patron Activity' },
  { key: 'genre-popularity', name: 'Genre Popularity' },
  { key: 'overdue-books', name: 'Overdue Books' }
];

export function ReportsandAnalyticsComponent() {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)]" radius="lg" isBlurred={false}>
          <CardHeader className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-2">
              <Icon
                icon="hugeicons:chart-line-data-01"
                className="text-[hsl(var(--app-primary-500))] text-2xl"
              />
              <h1 className="text-[hsl(var(--app-primary-500))] text-2xl font-bold">
                Reports and Analytics
              </h1>
            </div>
          </CardHeader>
        </Card>
      </section>

      <section className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[hsl(var(--app-background-100))] shadow-md h-full" radius="lg">
          <CardHeader className="border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Pre-defined Reports</h2>
          </CardHeader>
          <CardBody>
            <ul className="list-none p-0 m-0">
              {predefinedReports.map((report, index) => (
                <li key={index} className="py-2 hover:bg-[hsl(var(--app-background-200))] cursor-pointer">
                  <a href="#" className="text-[hsl(var(--app-primary-500))] hover:underline">{report}</a>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card className="bg-[hsl(var(--app-background-100))] shadow-md h-full" radius="lg">
          <CardHeader className="border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Custom Report Builder</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <Select 
                label="Report Type" 
                placeholder="Select a report type"
                className="w-full"
              >
                {reportTypes.map((type) => (
                  <SelectItem key={type.key} value={type.key}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
              <Input 
                type="date" 
                label="Date Range" 
                placeholder="Select date range"
                className="w-full"
              />
              <Button color="primary" className="bg-[hsl(var(--app-primary-500))] text-white hover:bg-[hsl(var(--app-primary-600))]">
                Generate Report
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-100))] shadow-md" radius="lg">
          <CardHeader className="border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Key Performance Indicators</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-2xl font-bold text-[hsl(var(--app-primary-500))]">14.5</span>
                <span className="text-sm text-center">Avg. Book Loan Duration (days)</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-2xl font-bold text-[hsl(var(--app-danger-500))]">237</span>
                <span className="text-sm text-center">Overdue Books</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-2xl font-bold text-[hsl(var(--app-success-500))]">4.2/5</span>
                <span className="text-sm text-center">Patron Satisfaction Rating</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-2xl font-bold text-[hsl(var(--app-warning-500))]">2,450</span>
                <span className="text-sm text-center">Active Users This Month</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-100))] shadow-md" radius="lg">
          <CardHeader className="border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">Book Circulation Trends</h2>
          </CardHeader>
          <CardBody>
            <div className="h-64 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={circulationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="books" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
