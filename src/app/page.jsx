import './docs.css'

export default function IndexPage() {
	return (
		<div className="container">
			<h1 className="main-title">
				Welsh Street
			</h1>
			<h2 className="subtitle">
				Documentation
			</h2>
			{/* <img 
				src="/wolf-of-yacht-pfp.png" 
				alt="Welsh Street Exchange Logo" 
				className="centered-image"
			/> */}

			<div className="button-container">
				<a 
					href="https://www.welshstreet.com/" 
					target="_blank" 
					rel="noopener noreferrer"
					className="btn btn-primary btn-welsh"
				>
					Home
				</a>
				<a 
					href="/docs/disclaimer" 
					className="btn btn-primary btn-documentation"
				>
					Docs
				</a>
				<a 
					href="https://app.welshtest.net/" 
					target="_blank" 
					rel="noopener noreferrer"
					className="btn btn-primary btn-exchange"
				>
					App
				</a>
			</div>
			<div className="description">
				Welsh Street is a decentralized exchange and Meme Rewards Protocol built around WELSH, the first dog meme coin built on Bitcoin.
				This documentation covers the protocol design, architecture, smart contracts, tokenomics, and terms of service for the project.
			</div>
		</div>
	)
}
