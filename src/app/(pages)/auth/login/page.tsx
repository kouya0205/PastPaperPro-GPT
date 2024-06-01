import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/3">
                    <div className="mt-5">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form className="mt-5">
                            <div className="mb-5">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="mb-5">
                                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Login</button>
                            </div>
                            <div className="text-center">
                                    <Link href="/auth/register" className="text-blue-500">have an account? Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
}