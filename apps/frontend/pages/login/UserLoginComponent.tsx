import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button, Link, Divider } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserLoginComponent() {
  return (
    <main className="min-h-screen bg-[hsl(var(--app-background-100))] flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-[hsl(var(--app-background-50))] rounded-xl appshadow-[var(--app-box-shadow-medium)]">
        <CardHeader className="flex flex-col items-center justify-center p-6">
          <Icon
            icon="hugeicons:account-setting-01"
            className="text-[hsl(var(--app-primary-500))] w-16 h-16 mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--app-foreground-900))] text-center">
            User Login
          </h1>
        </CardHeader>
        <CardBody className="px-6 py-4">
          <form className="flex flex-col gap-6">
            <Input
              type="email"
              label="Email address"
              placeholder="Enter your email"
              className="w-full"
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              className="w-full"
            />
            <div className="flex justify-between items-center w-full">
              <Checkbox defaultSelected>Remember me</Checkbox>
              <Link href="#" size="sm" className="text-[hsl(var(--app-primary-500))]">
                Forgot your password?
              </Link>
            </div>
            <Button className="w-full bg-[hsl(var(--app-primary-500))] text-white font-semibold py-2 rounded-md">
              Sign in
            </Button>
          </form>
        </CardBody>
        <CardFooter>
          <div className="w-full flex flex-col items-center gap-4">
            <Divider className="my-4">
              <span className="px-3 text-[hsl(var(--app-foreground-300))]">Or continue with</span>
            </Divider>
            <div className="flex justify-center gap-4 w-full">
              <Button isIconOnly aria-label="Login with Facebook">
                <Icon icon="hugeicons:facebook-01" width="24" height="24" />
              </Button>
              <Button isIconOnly aria-label="Login with Twitter">
                <Icon icon="hugeicons:twitter" width="24" height="24" />
              </Button>
              <Button isIconOnly aria-label="Login with GitHub">
                <Icon icon="hugeicons:github" width="24" height="24" />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}