import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

export function UsedSpaceWidget() {
  return (
    <Card
      x-chunk="dashboard-02-chunk-0"
      className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5"
    >
      <CardHeader className="space-y-1 p-0">
        <CardTitle className="text-sm/5 font-medium text-violet-700">
          Used space
        </CardTitle>
        <CardDescription className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </CardDescription>
      </CardHeader>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600" />
      </div>

      <CardContent className="flex w-full flex-col items-start justify-start p-0 lg:flex-row">
        <Button
          size="sm"
          variant={'ghost'}
          className="text-sm font-medium text-violet-500 hover:text-violet-700"
        >
          Dismiss
        </Button>
        <Button
          size="sm"
          variant={'ghost'}
          className="text-sm font-medium text-violet-700 hover:text-violet-900"
        >
          Upgrade plan
        </Button>
      </CardContent>
    </Card>
  )
}
