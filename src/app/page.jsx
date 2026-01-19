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
					href="https://app.welshtest.net/" 
					target="_blank" 
					rel="noopener noreferrer"
					className="btn btn-primary btn-exchange"
				>
					App
				</a>
				<a 
					href="/docs/disclaimer" 
					className="btn btn-primary btn-documentation"
				>
					Docs
				</a>
			</div>
			<div className="description">
				Welsh Street is the world's first dedicated Meme Rewards project dedicated to Welsh, the first dog coin built on Bitcoin. The Welsh Street Decentralized Exchange is an automated market maker (AMM) designed to the activate and grow the Welsh community and economy. This comprehensive documentation covers the design, architecture, contracts, tokenomics, and terms of service for the decentralized application.
			</div>
		</div>
	)
}
