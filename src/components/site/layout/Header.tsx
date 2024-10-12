import { AuthButtons } from "./AuthButtons";

export const Header = () => {

    return (

        <header className="h-16 border-b px-6 flex items-center justify-between">
            <div>LOGO</div>
            <AuthButtons/>
        </header>

    );

}