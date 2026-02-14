interface FooterProps {
  onNavigate?: (page: "privacy" | "terms") => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-links">
        <button className="footer-link" onClick={() => onNavigate?.("privacy")}>
          Privacy Policy
        </button>
        <span>•</span>
        <button className="footer-link" onClick={() => onNavigate?.("terms")}>
          Terms of Service
        </button>
        <span>•</span>
        <a className="footer-link" href="https://easyfix-web.pages.dev/" target="_blank" rel="noopener noreferrer">
          EasyFix
        </a>
      </div>
      <p>
        Secure OAuth2 authentication • Privacy-focused • Open Source
      </p>
    </footer>
  );
}

export default Footer;
  