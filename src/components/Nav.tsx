import hamburgerMenu from "../assets/images/icon-hamburger.svg";
import roomsLogo from "../assets/images/logo.svg";
import closeIcon from "../assets/images/icon-close.svg";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between md:justify-normal">
        <button
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setToggleMenu(true)}
        >
          <img src={hamburgerMenu} alt="Hamburger menu" aria-hidden />
        </button>
        <img
          className="mx-auto md:m-0"
          src={roomsLogo}
          alt="Rooms logo"
          aria-hidden
        />
        <NavList className="items-center hidden gap-6 ml-12 font-medium text-white md:flex" />
      </nav>
      {toggleMenu && <Modal onClose={setToggleMenu} />}
    </>
  );
}

type NavListProps = {
  className: string;
};

function NavList({ className }: NavListProps) {
  return (
    <ul className={className}>
      <li className="relative overflow-x-hidden duration-300 cursor-pointer before:transition-transform before:-translate-x-[120%] hover:before:translate-x-2/4 before:top-auto before:absolute before:bg-white before:h-1 before:inset-0 before:right-2/4">
        home
      </li>
      <li className="relative overflow-x-hidden duration-300 cursor-pointer before:transition-transform before:-translate-x-[120%] hover:before:translate-x-2/4 before:top-auto before:absolute before:bg-white before:h-1 before:inset-0 before:right-2/4">
        shop
      </li>
      <li className="relative overflow-x-hidden duration-300 cursor-pointer before:transition-transform before:-translate-x-[120%] hover:before:translate-x-2/4 before:top-auto before:absolute before:bg-white before:h-1 before:inset-0 before:right-2/4">
        about
      </li>
      <li className="relative overflow-x-hidden duration-300 cursor-pointer before:transition-transform before:-translate-x-[120%] hover:before:translate-x-2/4 before:top-auto before:absolute before:bg-white before:h-1 before:inset-0 before:right-2/4">
        contact
      </li>
    </ul>
  );
}

type ModalProps = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};
function Modal({ onClose }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsAnimating(true);
    }, 10);
    return () => {
      clearTimeout(id);
    };
  }, []);
  function handleClose() {
    // Trigger exit animation
    setIsAnimating(false);
    setTimeout(() => {
      onClose(false);
    }, 200); // Match duration with CSS transition duration
  }

  return ReactDOM.createPortal(
    <div className="absolute inset-0 z-10 transition-colors duration-200 bg-black bg-opacity-35 ">
      <div
        className={`flex items-center justify-between px-6 py-10 bg-white -translate-y-full transition-transform duration-300 ${
          isAnimating ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button onClick={handleClose}>
          <span className="sr-only">Close menu</span>
          <img src={closeIcon} alt="Close icon" aria-hidden />
        </button>
        <NavList className="flex gap-8 font-bold" />
      </div>
    </div>,
    document.getElementById("portal-root")!
  );
}
