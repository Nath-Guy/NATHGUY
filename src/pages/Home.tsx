import { Link } from "react-router";

function home() {
  return (
    <div>
      <h1>Bonjour</h1>
      <p>créez vos memes personnalisés</p>
      <p>
        <Link to="/editor">New</Link>
        <Link to="/editor/0">Edit0</Link>
        <Link to="/thumbnail">Thumbnail</Link>
      </p>
    </div>
  );
}

export default home;
