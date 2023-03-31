import { Button } from "../Button";
import { HamburgerIcon } from "../Icon";
import { NavLogo } from "./NavLogo";
import { Link } from 'react-router-dom';
import { NavMobileItem } from "./NavMobileItem";
import { useNavMobileContext } from "../../contexts";

export function Nav() {
    const { isVisible, setIsVisible } = useNavMobileContext();

    return (
        <nav className="w-full h-20 bg-gray-50 border-b border-gray-200">
            <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4">
                <NavLogo></NavLogo>

                <div className="hidden lg:flex flex items-center gap-4">
                    <Link to='/dashboard'>
                        <Button>Dashboard</Button>
                    </Link>
                    <Link to='/escrever-agora'>
                        <Button variant="primary">Escrever agora</Button>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button onClick={() => setIsVisible((prev) => !prev)}>
                        {isVisible ? (
                            <span className="font-bold text-2xl">X</span>
                        ) : (
                            <HamburgerIcon />
                        )}
                    </Button>
                </div>
            </div>
            {isVisible && (
                <div className="w-full h-[calc(100vh-81px)] fixed top-20 left-0 bg-white">
                    <div className="flex flex-col items-stretch justify-center">
                            <NavMobileItem to='/escrever-agora' variant="primary">Escrever agora</NavMobileItem>
                    </div>
                </div>
            )}
        </nav>
    )
}