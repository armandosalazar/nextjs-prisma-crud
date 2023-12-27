import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="font-bold text-xl py-3">NextJS CRUD</h3>
        </Link>
        <ul className="flex gap-x-2 text-sm font-bold">
          <li>
            <Link href="/new" className="hover:text-slate-500">
              New
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-500">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
