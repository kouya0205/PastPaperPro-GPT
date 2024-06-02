import SideNav from "@/app/components/ui/dashborad/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="w-full">
                <SideNav />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}