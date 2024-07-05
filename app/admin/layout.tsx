"use client";
import Image from "next/image";
import logBrand from "../assets/logo_white.png";
import {
  MdMenu,
  MdPerson,
  MdDashboard,
  MdPerson3,
  MdFactory,
  MdSpaceBar,
  MdTableBar,
  MdPlace,
  MdTimer,
  MdCardGiftcard,
  MdArrowCircleLeft, 
  MdArrowCircleRight
} from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdminTemplate from "./template";
import "./styles.scss";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string>("Dashboard");
  const [screenSize, setScreenSize] = useState<number | string>(300)

  const handleScreenSize = () => {
      let teste = showMenu === false ? true : false
      console.log(teste)
      let size = window.innerWidth
      if (size < 800) {
        setShowMenu(teste)
      }
  }

  useEffect(() => {
    function reportWindowSize() {
      let size = window.innerWidth
      setScreenSize(size)
    }
    
    window.onresize = reportWindowSize;
  }, [screenSize])

  return (
    <>
      <header className="header-admin">
        <Link className="brand" href="/">
          <Image src={logBrand} alt="Logo banner" width={150} height={150} />
        </Link>

        <span className="navbar" onClick={handleScreenSize}>
          <MdMenu className="navbar-menu-icon" />
        </span>

        <span className="header-avatar">
          {/* <Image src="" alt="Foto do administrador" width={100} height={100} /> */}
          <MdPerson className="avatar-icon" />
        </span>
      </header>
      <div className="container-admin">
          <aside className={showMenu === true ? "aside open-menu" : "aside hide-menu"}>
            <nav className="aside-navbar">
              <ul>
                <li style={{ backgroundColor: "#6561c1" }}>
                  <MdDashboard className="dashboard-icon"/>
                  <Link
                    href="/admin"
                    className="dashboard-link"
                    onClick={() => setPathname("Dashboard")}
                  >
                    Dashboard
                  </Link>
                </li>
                <div>
                  <h2>Operacional</h2>
                  <li>
                    <MdPerson3 className="person-icon"/>
                    <Link
                      href="/admin/users"
                      onClick={() => setPathname("usuários")}
                    >
                      Usuários
                    </Link>
                  </li>
                  <li>
                    <MdFactory className="factory-icon"/>
                    <Link href="/admin/factory">Empresa</Link>
                  </li>
                  <li>
                    <MdSpaceBar className="commodies-icon"/>
                    <Link href="/admin/commodities">Commodities</Link>
                  </li>
                </div>

                <div>
                  <h2>Lugares</h2>
                  <li>
                    <MdPlace className="places-icon"/>
                    <Link href="/places">Lugares</Link>
                  </li>
                  <li>
                    <MdTableBar className="tables-icon"/>
                    <Link href="/tables">Mesas</Link>
                  </li>
                  <li>
                    <MdCardGiftcard className="gift-icon"/>
                    <Link href="/gifts">Brindes</Link>
                  </li>
                  <li>
                    <MdTimer className="timer-icon"/>
                    <Link href="/days">Dias de funcionamento</Link>
                  </li>
                </div>
              </ul>
            </nav>
          </aside>
          <main className="main">
            <div>
              <header className="header-admin-title">
                  <h1>{pathname}</h1>
              </header>
              <AdminTemplate>
                {children}
              </AdminTemplate>
            </div>
            <div className="pagination">
              <ul className="pagination-list">
                <li className="pagination-item active">1</li>
                <li className="pagination-item">2</li>
                <li className="pagination-item">3</li>
              </ul>
            </div>
            <footer className="footer">
              <p>&copy;2024 - Vamos Comemorar</p>
            </footer>
          </main>
      </div>
    </>
  );
}
