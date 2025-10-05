import { StrictMode } from "react";
import "./main.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";

const rootElement = document.getElementById("root");

if (rootElement === null) throw new Error("Failed to find the root element");

const route = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof route;
	}
}

const root = ReactDOM.createRoot(rootElement);

root.render(
	<StrictMode>
		<RouterProvider router={route} />
	</StrictMode>,
);
