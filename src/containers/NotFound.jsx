import React from "react";
import Header from "../components/Header";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => {
	return (
		<>
			<Header />
			<div className="not-found">
				<aside>
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
						alt="404 Image"
					/>
				</aside>
				<main>
					<h1>Lo siento!</h1>
					<p>
						O no eres lo suficientemente genial como para visitar esta página o
						no existe{" "}
					</p>
					<a href="/">Puedes irte ahora!</a>
				</main>
			</div>
		</>
	);
};

export default NotFound;
