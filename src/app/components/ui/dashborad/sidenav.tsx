export default function SideNav() {
    return (
        <nav className="w-64 bg-gray-800 h-screen">
            <div className="flex items-center justify-center mt-10">
                <h1 className="text-white text-2xl font-semibold">PastPaperPro</h1>
            </div>
            <ul className="mt-10">
                <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">Dashboard</li>
                <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">Subjects</li>
                <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">Past Papers</li>
                <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">Settings</li>
            </ul>
        </nav>
    )
}