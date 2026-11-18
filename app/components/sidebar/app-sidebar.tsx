import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { User, Home } from "lucide-react"

const listMenu = [
    {
        name: "Dashboard",
        url: "/admin",
        icon: Home
    },
    {
        name: "User",
        url: "/admin/user-management",
        icon: User
    }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-blue-100 text-black" />
      <SidebarContent className="bg-blue-100 text-black">
        <SidebarGroup />
            <SidebarMenu>
                <div className="px-4 font-bold text-lg">
                    Menu
                </div>
            </SidebarMenu>
        <SidebarGroup />
        <SidebarMenu className="px-2">
        {listMenu.map((menu) => (
            <SidebarMenuItem key={menu.name}>
            <SidebarMenuButton asChild>
                <a href={menu.url}>
                <menu.icon />
                <span>{menu.name}</span>
                </a>
            </SidebarMenuButton>
            </SidebarMenuItem>
        ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="bg-blue-100 text-black"/>
    </Sidebar>
  )
}