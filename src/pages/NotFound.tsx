import { Link } from "react-router";

type NotFoundProps = {
  isAuthenticated: boolean;
};

export default function NotFound({ isAuthenticated }: NotFoundProps) {
  const LOGIN = "login";
  const DASHBOARD = "dashboard";

  const linkText = isAuthenticated ? `Go to ${DASHBOARD}` : `Go to ${LOGIN}`;
  const ariaLabel = isAuthenticated
    ? `Go to your ${DASHBOARD} page`
    : `Go to the ${LOGIN} page`;
  const linkTo = isAuthenticated ? `/${DASHBOARD}` : `/${LOGIN}`;

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-sky-500">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-slate-200 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-slate-300 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={linkTo}
            className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-600"
            aria-label={ariaLabel}
          >
            {linkText}
          </Link>
        </div>
      </div>
    </main>
  );
}
