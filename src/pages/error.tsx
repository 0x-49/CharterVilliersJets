import { Error, ErrorDescription, ErrorTitle } from "@/components/ui/error"

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Error>
        <ErrorTitle>Something went wrong!</ErrorTitle>
        <ErrorDescription>
          We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
        </ErrorDescription>
      </Error>
    </div>
  )
}