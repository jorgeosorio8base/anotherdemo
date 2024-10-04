import React from 'react';
import { Card, CardBody, Image, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function BookDetailsComponent() {
  const mockBookDetails = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0743273565',
    publicationYear: 1925,
    genre: 'Classic Literature',
    availableCopies: 3,
    totalCopies: 5,
    coverImage: 'https://example.com/great-gatsby-cover.jpg',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    loanHistory: [
      { dateBorrowed: '2023-05-15', dateReturned: '2023-06-05', patron: 'John Doe' },
      { dateBorrowed: '2023-04-02', dateReturned: '2023-04-23', patron: 'Jane Smith' },
    ],
    reviews: [
      { reviewer: 'Alice Johnson', rating: 4, comment: 'A classic that still resonates today. Fitzgerald\'s prose is beautiful and the story is captivating.' },
      { reviewer: 'Bob Williams', rating: 5, comment: 'One of the greatest American novels ever written. A must-read for everyone.' },
    ],
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-8">Book Details</h1>
      
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 lg:col-span-8">
          <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
              <div className="w-full md:w-1/3 max-w-[240px] aspect-[3/4] rounded-md overflow-hidden">
                <Image
                  src={mockBookDetails.coverImage}
                  alt={`Cover of ${mockBookDetails.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-2">
                  {mockBookDetails.title}
                </h2>
                <dl className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-[hsl(var(--app-foreground-700))]">
                  <div>
                    <dt className="font-semibold">Author:</dt>
                    <dd>{mockBookDetails.author}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">ISBN:</dt>
                    <dd>{mockBookDetails.isbn}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Publication Year:</dt>
                    <dd>{mockBookDetails.publicationYear}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Genre:</dt>
                    <dd>{mockBookDetails.genre}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Available Copies:</dt>
                    <dd>{mockBookDetails.availableCopies} of {mockBookDetails.totalCopies}</dd>
                  </div>
                </dl>
              </div>
            </CardBody>
          </Card>

          <Card className="mt-8 bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold text-[hsl(var(--app-foreground-700))] mb-4">Description</h3>
              <p className="text-base text-[hsl(var(--app-foreground-600))]">{mockBookDetails.description}</p>
            </CardBody>
          </Card>

          <div className="mt-8 bg-[hsl(var(--app-background-50))] p-6 rounded-lg shadow-[var(--app-box-shadow-small)]">
            <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--app-primary-700))] flex items-center">
              <Icon icon="hugeicons:book-02" className="mr-2" />
              Loan History
            </h3>
            <Table
              aria-label="Loan history table"
              className="w-full"
              isStriped
            >
              <TableHeader>
                <TableColumn>Date Borrowed</TableColumn>
                <TableColumn>Date Returned</TableColumn>
                <TableColumn>Patron</TableColumn>
              </TableHeader>
              <TableBody>
                {mockBookDetails.loanHistory.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.dateBorrowed}</TableCell>
                    <TableCell>{item.dateReturned}</TableCell>
                    <TableCell>{item.patron}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <aside className="col-span-12 lg:col-span-4">
          <div className="bg-[hsl(var(--app-background-50))] p-6 rounded-lg shadow-[var(--app-box-shadow-medium)]">
            <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--app-foreground-900))]">Reviews</h3>
            <ul className="space-y-4" aria-label="Book reviews">
              {mockBookDetails.reviews.map((review, index) => (
                <li key={index} className="border-b border-[hsl(var(--app-foreground-200))] pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-[hsl(var(--app-foreground-800))]">{review.reviewer}</span>
                    <div className="flex items-center" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon={i < review.rating ? 'hugeicons:star' : 'hugeicons:star-off'}
                          className={i < review.rating ? 'text-[hsl(var(--app-warning-500))]' : 'text-[hsl(var(--app-foreground-300))]'}
                          width="20"
                          height="20"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[hsl(var(--app-foreground-700))] leading-relaxed">{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
