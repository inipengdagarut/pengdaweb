import type { NavMenu } from "@/types"

interface Props {
    dataMenu: NavMenu[];
}

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const LinkStyle = "group flex flex-wrap w-full items-start justify-start rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"

const MenuItem: React.FC<NavMenu> = ({ title, href, subMenu }) => {

    if (!subMenu) {
        return (
            <NavigationMenuItem className="bg-transparent">
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                    <a href={href}>
                        {title}
                    </a>
                </NavigationMenuLink>
            </NavigationMenuItem>
        )
    }

    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">{title}</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="w-[400px] p-4">
                    {
                        subMenu.map((Link) => (
                            <li className="mb-4 last:mb-0">
                                <NavigationMenuLink asChild className={LinkStyle}>
                                    <a href={Link.href} className="capitalize flex flex-wrap flex-col items-start text-left w-full p-4">
                                        <span className="font-medium">{Link.title}</span>
                                        <span className="text-muted-foreground">{Link.desc}</span>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        ))
                    }
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}


export const MainNavMenu: React.FC<Props> = ({ dataMenu }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    dataMenu.map((dataMenu, idx) => (
                        <MenuItem title={dataMenu.title} href={dataMenu.href} subMenu={dataMenu.subMenu} />
                    ))
                }
            </NavigationMenuList>
            <NavigationMenuViewport/>
        </NavigationMenu>
    )
}