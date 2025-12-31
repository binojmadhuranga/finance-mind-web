"use client";

import Link from "next/link";;
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logoutUser } from "@/features/auth/authSlice";

export default function Navbar() {
	const pathname = usePathname();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { isAuthenticated, user } = useAppSelector((s) => s.auth);
	const [open, setOpen] = useState(false);

	const handleLogout = async () => {
		try {
			await dispatch(logoutUser());
			// AuthProvider handles redirect logic
			router.push("/login");
		} catch (e) {}
	};

	const navLink = (
		href: string,
		label: string
	) => (
		<Link
			href={href}
			className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
				pathname === href
					? "text-white bg-slate-700"
					: "text-slate-300 hover:text-white hover:bg-slate-700/60"
			}`}
			onClick={() => setOpen(false)}
		>
			{label}
		</Link>
	);

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur-md shadow-lg">
			<div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
				<div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between">
					{/* Brand */}
					<div className="flex items-center flex-shrink-0">
						<Link href="/" className="flex items-center">
							<img
								src="/navImage.png"
								alt="Finance Tracker"
								className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
							/>
						</Link>
					</div>

					{/* Desktop nav */}
					<div className="hidden md:flex items-center gap-2">
						{navLink("/dashboard", "Dashboard")}
						{navLink("/transactions", "Transactions")}
						{navLink("/categories", "Categories")}
						{navLink("/aifeatures", "AI Features")}
					</div>

					{/* Right side */}
					<div className="hidden md:flex items-center gap-3">
						{isAuthenticated ? (
							<>
								<span className="text-slate-300">{user?.name}</span>
								<button
									onClick={handleLogout}
									className="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
								>
									Logout
								</button>
							</>
						) : (
							<div className="flex items-center gap-2">
								{navLink("/login", "Login")}
								<Link
									href="/register"
									className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
								>
									Sign up
								</Link>
							</div>
						)}
					</div>

					{/* Mobile toggle */}
					<button
						aria-label="Toggle Menu"
						aria-expanded={open}
						className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
						onClick={() => setOpen((v) => !v)}
					>
						<svg
							className="h-7 w-7"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{open ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile menu backdrop */}
			{open && (
				<div 
					className="fixed inset-0 z-40 bg-black/50 md:hidden"
					onClick={() => setOpen(false)}
					aria-hidden="true"
				/>
			)}

			{/* Mobile menu */}
			<div 
				className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 z-40 border-t border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 ease-in-out ${
					open 
						? 'opacity-100 translate-y-0 max-h-[calc(100vh-4rem)]' 
						: 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'
				}`}
			>
				<div className="overflow-y-auto overscroll-contain max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)]">
					<div className="space-y-1 px-3 py-4">
						{isAuthenticated && user && (
							<div className="px-3 py-3 mb-2 rounded-lg bg-slate-800 border border-slate-700">
								<p className="text-xs text-slate-400 mb-1">Signed in as</p>
								<p className="text-sm font-medium text-white truncate">{user.name}</p>
							</div>
						)}
						{navLink("/dashboard", "Dashboard")}
						{navLink("/transactions", "Transactions")}
						{navLink("/categories", "Categories")}
						{navLink("/aifeatures", "AI Features")}
						{isAuthenticated ? (
							<button
								onClick={handleLogout}
								className="mt-2 w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 active:bg-red-800 transition-colors"
							>
								Logout
							</button>
						) : (
							<div className="space-y-1 pt-2">
								{navLink("/login", "Login")}
								<Link
									href="/register"
									onClick={() => setOpen(false)}
									className="block w-full text-center px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
								>
									Sign up
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

