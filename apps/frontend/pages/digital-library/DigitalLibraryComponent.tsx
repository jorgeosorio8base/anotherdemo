import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input, Card, CardBody, CardFooter, Image, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function DigitalLibraryComponent() {
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Browse', href: '/browse' },
    { name: 'My Books', href: '/my-books' },
    { name: 'About', href: '/about' }
  ];

  const featuredEBooks = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      coverImage: 'https://example.com/great-gatsby-cover.jpg'
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      coverImage: 'https://example.com/to-kill-a-mockingbird-cover.jpg'
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      coverImage: 'https://example.com/1984-cover.jpg'
    },
    {
      id: '4',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      coverImage: 'https://example.com/pride-and-prejudice-cover.jpg'
    },
    {
      id: '5',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      coverImage: 'https://example.com/catcher-in-the-rye-cover.jpg'
    },
    {
      id: '6',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      coverImage: 'https://example.com/the-hobbit-cover.jpg'
    }
  ];

  const categories = [
    { id: '1', name: 'Fiction' },
    { id: '2', name: 'Non-Fiction' },
    { id: '3', name: 'Science Fiction' },
    { id: '4', name: 'Mystery' },
  ];

  const newArrivals = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      coverImage: 'https://example.com/great-gatsby-cover.jpg'
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      coverImage: 'https://example.com/to-kill-a-mockingbird-cover.jpg'
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      coverImage: 'https://example.com/1984-cover.jpg'
    },
    {
      id: '4',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      coverImage: 'https://example.com/pride-and-prejudice-cover.jpg'
    }
  ];

  const mockLoans = [
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', dueDate: '2024-03-15' },
    { id: '2', title: '1984', author: 'George Orwell', dueDate: '2024-03-20' },
    { id: '3', title: 'To Kill a Mockingbird', author: 'Harper Lee', dueDate: '2024-03-25' },
  ];

  return (
    <main className="bg-[hsl(var(--app-background-50))] min-h-screen">
      <Navbar
        isBordered
        className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] h-16 max-w-full px-4 appShadow-[var(--app-box-shadow-small)]"
      >
        <NavbarBrand>
          <h1 className="text-xl md:text-2xl font-bold text-[hsl(var(--app-primary-500))]">Digital Library</h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navigationLinks.map((link) => (
            <NavbarItem key={link.name}>
              <a href={link.href} className="text-[hsl(var(--app-foreground-700))] hover:text-[hsl(var(--app-primary-500))]">
                {link.name}
              </a>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[20rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-[hsl(var(--app-background-100))] border-[hsl(var(--app-foreground-300))] rounded-full",
              }}
              placeholder="Search books, authors, or genres"
              size="sm"
              startContent={<Icon icon="hugeicons:search-02" width="18" height="18" className="text-[hsl(var(--app-foreground-400))]" />}
              type="search"
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu className="bg-[hsl(var(--app-background-50))]">
          {navigationLinks.map((link) => (
            <NavbarMenuItem key={link.name}>
              <a
                className="w-full text-[hsl(var(--app-foreground-700))] hover:text-[hsl(var(--app-primary-500))]"
                href={link.href}
              >
                {link.name}
              </a>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="w-full max-w-[600px] mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search for books, authors, or genres"
              labelPlacement="outside"
              startContent={
                <Icon
                  icon="hugeicons:search-01"
                  className="text-[hsl(var(--app-foreground-500))] w-5 h-5"
                />
              }
              endContent={
                <Icon
                  icon="hugeicons:close"
                  className="text-[hsl(var(--app-foreground-400))] hover:text-[hsl(var(--app-foreground-600))] w-5 h-5 cursor-pointer"
                />
              }
              classNames={{
                base: "max-w-full",
                mainWrapper: "h-10",
                input: "text-sm",
                inputWrapper: "h-10 bg-[hsl(var(--app-background-50))] border-[hsl(var(--app-primary-200))]"
              }}
            />
          </div>
        </section>

        <section className="bg-[hsl(var(--app-background-50))] p-6 md:p-8 rounded-lg appShadow-[var(--app-box-shadow-medium)] mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))] mb-4 flex items-center">
            <Icon icon="hugeicons:book-01" className="mr-2" />
            Featured E-Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredEBooks.map((book) => (
              <Card key={book.id} className="w-full h-full bg-[hsl(var(--app-background-100))] rounded-lg overflow-hidden">
                <CardBody className="p-0">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </CardBody>
                <CardFooter className="flex flex-col items-start p-3 gap-1">
                  <h3 className="text-sm md:text-base font-semibold text-[hsl(var(--app-foreground-900))] line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[hsl(var(--app-foreground-600))]">
                    {book.author}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {categories.map((category) => (
              <Card
                key={category.id}
                isPressable
                isHoverable
                className="h-24 bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-background-200))] transition-colors duration-200"
              >
                <CardBody className="flex justify-between items-center p-4">
                  <span className="text-lg font-semibold text-[hsl(var(--app-foreground-800))]">
                    {category.name}
                  </span>
                  <Icon
                    icon="hugeicons:arrow-right-02"
                    className="text-xl text-[hsl(var(--app-foreground-600))]"
                    aria-hidden="true"
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-[hsl(var(--app-background-50))] p-6 rounded-lg appShadow-[var(--app-box-shadow-medium)] mb-12">
          <div className="flex items-center mb-4">
            <Icon icon="hugeicons:book-01" className="text-[hsl(var(--app-foreground-900))] text-2xl mr-2" />
            <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
              New Arrivals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {newArrivals.map((book) => (
              <Card
                key={book.id}
                isPressable
                isHoverable
                className="w-full h-full appshadow-[var(--app-box-shadow-small)]"
              >
                <CardBody className="p-0">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="w-full aspect-[3/4] object-cover"
                    isZoomed
                  />
                </CardBody>
                <CardFooter className="flex flex-col items-start p-2">
                  <h3 className="text-sm font-semibold text-[hsl(var(--app-foreground-900))] line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[hsl(var(--app-foreground-600))] line-clamp-1">
                    {book.author}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] p-6 rounded-lg appShadow-[var(--app-box-shadow-medium)]">
          <h2 className="text-2xl font-bold mb-4">My Digital Loans</h2>
          <Table aria-label="Digital loans table" className="w-full">
            <TableHeader>
              <TableColumn>TITLE</TableColumn>
              <TableColumn>AUTHOR</TableColumn>
              <TableColumn>DUE DATE</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {mockLoans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.title}</TableCell>
                  <TableCell>{loan.author}</TableCell>
                  <TableCell>{loan.dueDate}</TableCell>
                  <TableCell>
                    <button className="mr-2 p-1 bg-[hsl(var(--app-primary-100))] rounded-md">
                      <Icon icon="hugeicons:book-open-01" className="w-5 h-5" />
                    </button>
                    <button className="p-1 bg-[hsl(var(--app-primary-100))] rounded-md">
                      <Icon icon="hugeicons:book-upload" className="w-5 h-5" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </main>
  );
}
