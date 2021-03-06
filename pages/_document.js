import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="pl-PL">
				<Head>
					<meta charSet="UTF-8" />
					<meta
						name="description"
						content="Fachowe usługi elektryczne w Warszawa i okolicach. Naprawy awarii, kompleksowe uruchomienia oraz instalacje w zakresie elektryki. Dla indywidualnych i biznesów."
						// content="Fachowe usługi elektryczne w Warszawa i okolicach. Naprawy awarii, kompleksowe uruchomienia, instalacje w zakresie elektryki."
					/>
					<link rel="shortcut icon" href="/miernik.svg"></link>

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					></meta>

					<title>JPDsystem | Elektryk</title>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
