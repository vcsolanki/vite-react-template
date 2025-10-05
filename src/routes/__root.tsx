import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Fragment } from "react/jsx-runtime";

const RootLayout = () => {
	return (
		<Fragment>
			<div className="p-2 flex gap-2">
				<Link
					className="[&.active]:font-bold"
					to="/"
				>
					Home
				</Link>
				<Link
					className="[&.active]:font-bold"
					to="/about"
				>
					About
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</Fragment>
	);
};

export const Route = createRootRoute({
	component: RootLayout,
});
