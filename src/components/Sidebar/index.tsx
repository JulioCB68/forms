import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'

import {
  Bell,
  Bolt,
  Home,
  LineChart,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react'

export function Sidebar() {
  return (
    <>
      <aside className="hidden h-full border-r bg-muted/40 md:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Bolt className="h-6 w-6 text-violet-800" />
              <span className="">Form.dev</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavItem href="#" title="Dashboard" icon={Home} />
              <NavItem href="#" title="Orders" icon={ShoppingCart} />
              <NavItem href="#" title="Settings" icon={Settings} active />
              <NavItem href="#" title="Customers" icon={Users} />
              <NavItem href="#" title="Analytics" icon={LineChart} />
            </nav>
          </div>
          <div className="mt-auto p-4">
            <UsedSpaceWidget />
          </div>
        </div>
      </aside>

      <header className="flex items-center gap-4 border-b bg-muted/40 px-4 md:hidden lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <NavItem href="#" title="Dashboard" icon={Home} />
              <NavItem href="#" title="Orders" icon={ShoppingCart} />
              <NavItem href="#" title="Products" icon={Package} active />
              <NavItem href="#" title="Customers" icon={Users} />
              <NavItem href="#" title="Analytics" icon={LineChart} />
            </nav>
            <div className="mt-auto">
              <UsedSpaceWidget />
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  )
}
