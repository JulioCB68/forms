'use client'

import { useState } from 'react'

import { TabItem } from '@/components/Settings/tab-item'
import { Tabs, TabsList } from '@/components/ui/tabs'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  return (
    <Tabs
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={currentTab}
      onValueChange={setCurrentTab}
    >
      <TabsList className="mt-6 flex w-full items-center justify-start gap-4 rounded-none border-b border-zinc-200 bg-transparent">
        <TabItem
          value="tab1"
          title="My details"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Profile"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Password"
          isSelected={currentTab === 'tab3'}
        />
        <TabItem value="tab4" title="Team" isSelected={currentTab === 'tab4'} />
        <TabItem value="tab5" title="Plan" isSelected={currentTab === 'tab5'} />
        <TabItem
          value="tab6"
          title="Billing"
          isSelected={currentTab === 'tab6'}
        />
        <TabItem
          value="tab7"
          title="Email"
          isSelected={currentTab === 'tab7'}
        />
        <TabItem
          value="tab8"
          title="Notifications"
          isSelected={currentTab === 'tab8'}
        />
        <TabItem
          value="tab9"
          title="Integrations"
          isSelected={currentTab === 'tab9'}
        />
        <TabItem
          value="tab10"
          title="API"
          isSelected={currentTab === 'tab10'}
        />
      </TabsList>
    </Tabs>
  )
}
