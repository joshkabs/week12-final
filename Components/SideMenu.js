import { Link } from 'react-router-dom';
import './TagButton.css';
export default function SideMenu() {
  return (
    <div
      style={{
        margin: '35px',

        display: 'flex'
      }}
    >
      <Link to="./OrderNow">
        <button className="tagbutton">Order Now</button>
      </Link>
    </div>
  );
}
