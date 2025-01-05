import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { ShopIcon, ClipboardIcon, SettingIcon } from "@/components/icons";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    title: "Cashier",
    url: "/",
    icon: ShopIcon,
    disabled: false,
  },
  {
    title: "Sales Report",
    url: "/sales",
    icon: ClipboardIcon,
    disabled: true,
  },
  {
    title: "Settings",
    url: "/setting",
    icon: SettingIcon,
    disabled: true,
  },
];

const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center gap-2 p-2 pb-4">
            <div className="w-12 h-12 flex-none rounded-full bg-gradient-to-r from-[#4C3BCF] to-[#3572EF] text-neutral-100 flex justify-center items-center text-2xl">
              P
            </div>
            <SidebarGroupLabel className="text-xl text-black">
              PadiPos
            </SidebarGroupLabel>
          </div>
          <SidebarSeparator />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={location.pathname === item.url}
                    asChild
                    size="lg"
                  >
                    <div
                      onClick={() => navigate(item.url)}
                      className="cursor-pointer text-neutral-400"
                    >
                      <item.icon
                        color={
                          location.pathname === item.url ? "#3572EF" : "#C4C4C4"
                        }
                      />
                      <span className="text-xs tracking-wide font-roboto-light">
                        {item.title}
                      </span>
                    </div>
                  </SidebarMenuButton>
                  {location.pathname === item.url && (
                    <div className="absolute top-0 w-1 h-8 translate-y-1.5 rounded-l-lg -right-4 bg-primary-500"></div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
