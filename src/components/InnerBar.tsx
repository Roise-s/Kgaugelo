import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import InnerD from "./InnerD"
  

const InnerBar = ({ title, Context }: InnerBarParams) => {
  return (
    <>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>
                          <InnerD Context={Context} />
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
 
    </>
  )
}

export default InnerBar
