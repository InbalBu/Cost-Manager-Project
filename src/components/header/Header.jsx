import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles items-center">
        <span className="headerTitleLg">Cost Manager App</span>
      </div>
      <img className="headerImg"
        src="https://img.freepik.com/premium-vector/business-development-store-agreement-with-client-manager-will-discuss-terms-cost-project-flat-style-vector-illustration_169479-3169.jpg?w=2000"
        alt=""
      />
    </div>
  );
}
