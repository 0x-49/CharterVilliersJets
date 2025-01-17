import { Error, ErrorDescription, ErrorTitle } from "@/components/ui/error"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <Error className="mb-8">
          <ErrorTitle className="text-4xl mb-4">404 - Page Not Found</ErrorTitle>
          <ErrorDescription>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </ErrorDescription>
        </Error>
        <Link href="/" passHref>
          <Button variant="default" size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
