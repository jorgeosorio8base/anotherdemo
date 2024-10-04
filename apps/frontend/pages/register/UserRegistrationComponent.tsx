import React from 'react';
import { Input, Checkbox, Button, Link, Textarea } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserRegistrationComponent() {
  return (
    <main className="min-h-screen bg-[hsl(var(--app-background-100))] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[hsl(var(--app-background-50))] rounded-lg appShadow-[var(--app-box-shadow-medium)] overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-primary-500))] text-center mb-6">
            Create Your Library Account
          </h1>
          <form className="flex flex-col gap-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              variant="bordered"
              isRequired
            />
            <Input
              label="Email Address"
              placeholder="Enter your email address"
              variant="bordered"
              isRequired
              type="email"
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
              isRequired
              type="password"
              endContent={
                <Icon
                  icon="hugeicons:password-validation"
                  className="text-2xl text-default-400 pointer-events-none"
                />
              }
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              variant="bordered"
              isRequired
              type="password"
              endContent={
                <Icon
                  icon="hugeicons:password-validation"
                  className="text-2xl text-default-400 pointer-events-none"
                />
              }
            />
            <Textarea
              label="Address"
              placeholder="Enter your address"
              variant="bordered"
              minRows={3}
              isRequired
            />
            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              variant="bordered"
              type="tel"
              isRequired
            />
            <Checkbox>
              I agree to the <Link href="#" size="sm" className="text-[hsl(var(--app-primary-500))]">terms and conditions</Link>
            </Checkbox>
            <Button color="primary" size="lg" className="w-full">
              Create Account
            </Button>
            <div className="text-center text-[hsl(var(--app-foreground-500))]">
              Already have an account? <Link href="#" size="sm" className="text-[hsl(var(--app-primary-500))]">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
