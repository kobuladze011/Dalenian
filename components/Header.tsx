"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Dalenian
        </Link>
        <div className={styles.navWrapper}>
          {!isMenuOpen && (
            <button
              className={styles.burgerButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
          )}
          <nav
            className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          >
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className={styles.closeLine}></span>
              <span className={styles.closeLine}></span>
            </button>
            <div className={styles.navContent}>
              <Link href="/shop" onClick={closeMenu} className={styles.navLink}>
                {t.nav.shop}
              </Link>
              <div className={styles.navDivider}></div>
              <Link href="/#benefits" onClick={closeMenu} className={styles.navLink}>
                {t.nav.benefits}
              </Link>
              <div className={styles.navDivider}></div>
              <Link href="/#featured" onClick={closeMenu} className={styles.navLink}>
                {t.nav.featured}
              </Link>
              <div className={styles.navDivider}></div>
              <Link href="/admin/login" onClick={closeMenu} className={styles.navLink}>
                {t.nav.admin}
              </Link>
              <div className={styles.mobileLangSwitcher}>
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
          <div className={styles.desktopLangSwitcher}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

