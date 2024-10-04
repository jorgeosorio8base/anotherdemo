import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Select, SelectItem, Checkbox } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Mock data for charts
const resourceAllocationData = [
  { name: 'Books', value: 4000 },
  { name: 'E-books', value: 3000 },
  { name: 'Audiobooks', value: 2000 },
  { name: 'Magazines', value: 2780 },
  { name: 'Newspapers', value: 1890 },
];

const collectionGrowthData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4780 },
  { name: 'May', value: 5890 },
  { name: 'Jun', value: 6390 },
];

const serviceImprovementInsights = [
  'Extend library hours on weekends based on increased patron activity',
  'Implement a mobile check-out system to reduce wait times',
  'Organize monthly book clubs for top genres to increase engagement'
];

const previewRecommendations = [
  'The Great Gatsby by F. Scott Fitzgerald',
  'To Kill a Mockingbird by Harper Lee',
  '1984 by George Orwell'
];

export function InsightsandRecommendationsComponent() {
  return (
    <main className="bg-[hsl(var(--app-background-50))] p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-6">Insights and Recommendations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="h-full bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-xl font-semibold">Resource Allocation</h2>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={resourceAllocationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4">AI-driven recommendations for optimal resource distribution based on usage patterns and trends.</p>
          </CardBody>
          <CardFooter>
            <Button color="primary">View Details</Button>
          </CardFooter>
        </Card>

        <Card className="h-full bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-xl font-semibold">Collection Development</h2>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={collectionGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-4">Suggestions for new acquisitions and collection improvements based on patron interests and circulation data.</p>
          </CardBody>
          <CardFooter>
            <Button color="primary">Explore Recommendations</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-full bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-xl font-semibold">Service Improvement Insights</h2>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-5">
              {serviceImprovementInsights.map((insight, index) => (
                <li key={index} className="mb-2">{insight}</li>
              ))}
            </ul>
          </CardBody>
          <CardFooter>
            <Button color="success">Generate Report</Button>
          </CardFooter>
        </Card>

        <Card className="h-full bg-[hsl(var(--app-background-100))] shadow-[var(--app-box-shadow-medium)]">
          <CardHeader>
            <h2 className="text-xl font-semibold">Personalized Book Recommendations</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <Select label="Select Patron Segment" placeholder="Choose a segment">
                <SelectItem key="all">All Patrons</SelectItem>
                <SelectItem key="frequent">Frequent Visitors</SelectItem>
                <SelectItem key="new">New Members</SelectItem>
                <SelectItem key="inactive">Inactive Users</SelectItem>
              </Select>
              <div className="flex flex-wrap gap-4">
                <Checkbox defaultSelected>Genre-based</Checkbox>
                <Checkbox>Popularity</Checkbox>
                <Checkbox>New Releases</Checkbox>
              </div>
              <Button color="primary">Generate Recommendations</Button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Preview Recommendations:</h3>
              <ul className="list-disc pl-5 mt-2">
                {previewRecommendations.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
