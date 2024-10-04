import React from 'react';
import { Card, CardBody, Avatar, Button, Chip, Image, Checkbox } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserProfileComponent() {
  const mockUserProfile = {
    name: 'Alice Reader',
    initials: 'AR',
    memberSince: 'Jan 2022',
    reviews: [
      { title: 'The Great Gatsby', rating: 4 },
      { title: 'To Kill a Mockingbird', rating: 5 },
      { title: '1984', rating: 4 }
    ],
    discussions: [
      'Classic Literature in Modern Times',
      'Science Fiction: Predictions vs Reality'
    ],
    eventsAttended: [
      'Author Meet & Greet: Jane Smith'
    ],
    achievements: ['Bookworm', 'Reviewer Extraordinaire', 'Discussion Starter']
  };

  const mockRecommendations = [
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

  const privacySettings = [
    { id: 'showReviews', label: 'Show my reviews publicly' },
    { id: 'allowRecommendations', label: 'Allow recommendations based on my reading history' },
    { id: 'receiveNotifications', label: 'Receive email notifications about new events' }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-[hsl(var(--app-foreground-900))]">User Profile</h1>
      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 md:col-span-4">
          <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-md">
            <CardBody className="flex flex-col items-center p-6">
              <Avatar
                isBordered
                className="w-24 h-24 text-large"
                src={undefined}
                name={mockUserProfile.initials}
                color="primary"
              />
              <h2 className="text-xl font-semibold mt-4 text-[hsl(var(--app-foreground-900))]">
                {mockUserProfile.name}
              </h2>
              <p className="text-sm mt-1 text-[hsl(var(--app-foreground-600))]">
                Member since: {mockUserProfile.memberSince}
              </p>
              <Button
                color="primary"
                endContent={<Icon icon="hugeicons:edit-02" />}
                className="mt-4 font-medium"
              >
                Edit Profile
              </Button>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[hsl(var(--app-background-50))] shadow-md h-full">
              <CardBody>
                <h3 className="text-xl font-semibold mb-4">Community Contributions</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Reviews ({mockUserProfile.reviews.length})</h4>
                  <ul>
                    {mockUserProfile.reviews.map((review, index) => (
                      <li key={index} className="mb-1">
                        "{review.title}" - {review.rating}/5 stars
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Discussions ({mockUserProfile.discussions.length})</h4>
                  <ul>
                    {mockUserProfile.discussions.map((discussion, index) => (
                      <li key={index} className="mb-1">"{discussion}"</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Events Attended ({mockUserProfile.eventsAttended.length})</h4>
                  <ul>
                    {mockUserProfile.eventsAttended.map((event, index) => (
                      <li key={index}>"{event}"</li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-[hsl(var(--app-background-50))] shadow-md h-full">
              <CardBody>
                <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                <div className="flex flex-wrap gap-2">
                  {mockUserProfile.achievements.map((achievement, index) => (
                    <Chip key={index} color="primary" variant="flat">
                      {achievement}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="col-span-12">
          <Card className="bg-[hsl(var(--app-background-50))] shadow-md">
            <CardBody>
              <h2 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">
                Personalized Recommendations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockRecommendations.map((book) => (
                  <Card
                    key={book.id}
                    isPressable
                    isHoverable
                    className="w-full h-full bg-[hsl(var(--app-background-100))] hover:bg-[hsl(var(--app-background-200))]"
                  >
                    <CardBody className="p-0">
                      <Image
                        src={book.coverImage}
                        alt={`Cover of ${book.title}`}
                        className="w-full aspect-[3/4] object-cover rounded-t-lg"
                      />
                      <div className="p-3">
                        <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] line-clamp-2">
                          {book.title}
                        </h3>
                        <p className="text-sm text-[hsl(var(--app-foreground-600))] mt-1">
                          {book.author}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6 md:col-start-4">
          <Card className="bg-[hsl(var(--app-background-50))] shadow-md">
            <CardBody>
              <div className="flex gap-3 items-center mb-4">
                <Icon icon="hugeicons:account-setting-01" width="24" height="24" />
                <h3 className="text-lg font-semibold">Privacy Settings</h3>
              </div>
              {privacySettings.map((setting) => (
                <Checkbox
                  key={setting.id}
                  defaultSelected
                  className="mb-3 last:mb-0"
                >
                  <span className="text-sm">{setting.label}</span>
                </Checkbox>
              ))}
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
