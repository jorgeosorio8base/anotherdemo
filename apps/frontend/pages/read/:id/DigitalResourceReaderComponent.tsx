import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Progress } from '@nextui-org/react';
import { Icon } from '@iconify/react';

// Mock data
const headerData = {
  title: 'Digital Resource Reader',
  isBookmarked: false,
};

const bookData = {
  title: 'Book Title',
  currentPage: 1,
  totalPages: 300,
  content: 'Book content placeholder',
  readingProgress: 45,
  bookmarks: [
    { id: 1, title: 'Chapter 1: Introduction', page: 5 },
    { id: 2, title: 'Chapter 3: Key Concepts', page: 42 }
  ]
};

export function DigitalResourceReaderComponent() {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <header className="col-span-12">
        <Card className="w-full bg-[hsl(var(--app-background-50))] border-b border-[hsl(var(--app-foreground-200))] appShadow-[var(--app-box-shadow-small)]">
          <CardHeader className="flex justify-between items-center px-4 py-2 h-16">
            <h1 className="text-xl font-bold text-[hsl(var(--app-foreground-900))] truncate mr-auto">
              {headerData.title}
            </h1>
            <div className="flex items-center space-x-2">
              <Button
                isIconOnly
                aria-label="Bookmark"
                className={`w-10 h-10 min-w-10 ${headerData.isBookmarked ? 'bg-[hsl(var(--app-primary-500))]' : 'bg-[hsl(var(--app-background-200))]'}`}
              >
                <Icon
                  icon={headerData.isBookmarked ? 'hugeicons:book-bookmark-02' : 'hugeicons:book-01'}
                  className={`w-5 h-5 ${headerData.isBookmarked ? 'text-white' : 'text-[hsl(var(--app-foreground-700))]'}`}
                />
              </Button>
              <Button
                isIconOnly
                aria-label="Settings"
                className="w-10 h-10 min-w-10 bg-[hsl(var(--app-background-200))] text-[hsl(var(--app-foreground-700))]">
                <Icon icon="hugeicons:settings-01" className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
        </Card>
      </header>
      
      <section className="col-span-12 lg:col-span-8">
        <Card className="h-full flex flex-col bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <CardHeader className="flex justify-between items-center p-4 border-b border-[hsl(var(--app-foreground-200))]">
            <h2 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">{bookData.title}</h2>
          </CardHeader>
          <CardBody className="flex-grow overflow-y-auto p-6 bg-white">
            <p className="text-base leading-relaxed text-[hsl(var(--app-foreground-900))]">
              {bookData.content}
            </p>
          </CardBody>
          <CardFooter className="flex justify-between items-center p-4 border-t border-[hsl(var(--app-foreground-200))]">
            <Button
              variant="flat"
              color="primary"
              startContent={<Icon icon="hugeicons:arrow-left" width={20} height={20} />}
              isDisabled={bookData.currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-[hsl(var(--app-foreground-600))]">
              Page {bookData.currentPage} of {bookData.totalPages}
            </span>
            <Button
              variant="flat"
              color="primary"
              endContent={<Icon icon="hugeicons:arrow-right" width={20} height={20} />}
              isDisabled={bookData.currentPage === bookData.totalPages}
            >
              Next
            </Button>
          </CardFooter>
        </Card>
      </section>
      
      <aside className="col-span-12 lg:col-span-4">
        <Card className="h-full bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <CardBody className="p-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Reading Progress</h3>
              <Progress
                value={bookData.readingProgress}
                color="primary"
                showValueLabel
                className="mb-2"
              />
              <p className="text-sm text-[hsl(var(--app-foreground-600))]">{bookData.readingProgress}% completed</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Bookmarks</h3>
              <ul className="space-y-2">
                {bookData.bookmarks.map((bookmark) => (
                  <li key={bookmark.id} className="flex justify-between items-center">
                    <span className="text-[hsl(var(--app-foreground-900))]">{bookmark.title}</span>
                    <Button
                      size="sm"
                      variant="light"
                      color="primary"
                      endContent={<Icon icon="hugeicons:arrow-right" width={16} height={16} />}
                    >
                      Go to page {bookmark.page}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
          <CardFooter className="p-4 border-t border-[hsl(var(--app-foreground-200))]">
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">Notes</h3>
              <textarea
                className="w-full p-2 border border-[hsl(var(--app-foreground-200))] rounded-md"
                rows={4}
                placeholder="Add your notes here..."
              ></textarea>
              <Button color="primary" className="w-full mt-2">
                Save Note
              </Button>
            </div>
          </CardFooter>
        </Card>
      </aside>
    </main>
  );
}
