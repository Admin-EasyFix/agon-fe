import { useState, useEffect, useRef } from "react";
import useLogout from "../hooks/useLogout";
import doveIcon from '../assets/golden_dove.svg';
import userIcon from '../assets/user.png';
import logoutIcon from '../assets/logout.svg';
import { useAthlete } from "../hooks/useStravaAthlete";
import "../styles/navbar.css";

function Navbar() {
  const { logout, loading: logoutLoading, error: logoutError } = useLogout();
  const [open, setOpen] = useState(false);
  const { athlete, loading, error: apiError, refetch } = useAthlete();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-left">
        <img src={doveIcon} alt="Agon" className="logo" />
        <span className="app-name">Agon</span>
      </div>

      <div className="navbar-right">
        {loading ? (
          <div className="profile-loading-indicator" aria-busy="true" aria-label="Loading profile">
            <div className="spinner"></div>
          </div>
        ) : (
          <button
            onClick={apiError ? refetch : toggleMenu}
            className="profile-button"
            aria-label="Profile menu"
            aria-expanded={open}
          >
            <img
              src={athlete?.profilePicture || userIcon}
              alt="User profile"
              className="profile-pic"
            />
          </button>
        )}
        {open && (
          <div className="dropdown" ref={dropdownRef} role="menu">
            <button
              onClick={() => logout()}
              disabled={logoutLoading}
              role="menuitem"
              className="dropdown-item"
            >
              <img src={logoutIcon} alt="" className="dropdown-item-icon" />
              {logoutLoading ? "Logging out..." : "Logout"}
            </button>
            {logoutError && (
              <div className="dropdown-error" role="alert">
                {logoutError}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
