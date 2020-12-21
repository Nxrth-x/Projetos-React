import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33}/>
      <nav className="hidden md:flex space-x-8">
        <Link href="/">
          <a className="tracking-wide hover:text-gray-300" href="/">NextJS</a>
        </Link>
        <Link href="/">
          <a className="tracking-wide hover:text-gray-300" href="/">Tailwind CSS</a>
        </Link>
        <Link href="/">
          <a className="tracking-wide hover:text-gray-300" href="/">FramerMotion</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header;