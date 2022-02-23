import { LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>title</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  )
}