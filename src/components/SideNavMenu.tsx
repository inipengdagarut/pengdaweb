import type { NavMenu } from "@/types"

interface Props {
    dataMenu: NavMenu[];
}

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

import logoIni from '@/assets/logo-ini.svg';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';


const MenuItem: React.FC<NavMenu> = ({ title, href, subMenu }) => {
    if (!subMenu) {
        return (
            <>
                <div className="w-full py-2 capitalize" >
                    <a href={href}>{title}</a>
                </div>
            </>
        )
    }
    return (
        <>
            {
                subMenu.map((Link, idx) => (
                    <div className="w-full py-2 capitalize" >
                        <a href={Link.href}>{Link.title}</a>
                    </div>
                ))
            }

        </>
    )
}


export const SideNavMenu: React.FC<Props> = ({ dataMenu }) => {
    return (
        <Sheet>
            <div>
                <SheetTrigger asChild>
                    <HamburgerMenuIcon />
                </SheetTrigger>
            </div>
            <SheetContent side="right">
                <SheetHeader className="mb-4">
                    <header>
                        <img className="w-20 mx-auto mb-2" src={logoIni.src} alt="logo ini" />
                        <div className="mx-auto text-center">
                            <h2 className="text-xs font-medium">Pengurus Daerah Kabupaten Garut</h2>
                            <h2 className="text-md font-medium">IKATAN NOTARIS INDONESIA</h2>
                        </div>
                    </header>
                </SheetHeader>
                <ul className="flex flex-col">
                    <li>
                        <div className="w-full py-2" >
                            <a href="/">Beranda</a>
                        </div>
                    </li>
                    {
                        dataMenu.map((nav, idx) => (
                            <li>
                                <MenuItem title={nav.title} href={nav.href} key={idx} subMenu={nav.subMenu} />
                            </li>
                        ))
                    }
                </ul>
            </SheetContent>
        </Sheet>
    )
}