import React from "react";
import styles from "./Portfolio.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef(null);
    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <nav className={styles.header}>
            <img
                className={styles.logo}
                src="/CoquiandFlag.png"  // Fixed Path
                alt="Logo"
            />
            <img
                className={styles.menuIcon}
                src="/Menu.png"  // Fixed Path
                alt="Menu"
                onClick={toggleMenu}
            />
            <div ref={menuRef}>
                <ul className={`${styles.menuList} ${isOpen ? styles.show : ""}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
