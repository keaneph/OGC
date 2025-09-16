"use client"

import * as React from "react"

import {
    AutoAwesomeSharp as AutoAwesomeSharpIcon,
    InsertChartSharp as InsertChartSharpIcon,
    PsychologyAltSharp as PsychologyAltSharpIcon,
    EditCalendarSharp as EditCalendarSharpIcon,
    Diversity3Sharp as Diversity3SharpIcon,
    FestivalSharp as FestivalSharpIcon,
    SettingsSharp as SettingsSharpIcon,
} from '@mui/icons-material';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
 
// Menu items.
const items = [
  {
    title: "Getting Started",
    url: "/getting-started",
    icon: AutoAwesomeSharpIcon,
  },
  {
    title: "Activity",
    url: "/activity",
    icon: InsertChartSharpIcon,
  },
  {
    title: "Student Profiling",
    url: "/student-profiling",
    icon: PsychologyAltSharpIcon,
  },
  {
    title: "Booking",
    url: "/booking",
    icon: EditCalendarSharpIcon,
  },
  {
    title: "Counseling",
    url: "/counseling",
    icon: Diversity3SharpIcon,
  },
  {
    title: "Calendar of Events",
    url: "/calendar-of-events",
    icon: FestivalSharpIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsSharpIcon,
  },
]
 
export function AppSidebar() {
  return (
        <Sidebar collapsible='icon'> {/* sidebar component used to render a collapsible sidebar. remove if 
        we don't want a collapsible sidebar.*/}
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarTrigger/>
            </SidebarFooter>
        </Sidebar>
  )
}