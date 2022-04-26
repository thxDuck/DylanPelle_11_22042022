import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section id="page-error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p className="backHome">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </section>
  );
}
