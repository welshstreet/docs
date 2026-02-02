/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './docs.css'

export const metadata = {
  metadataBase: new URL('https://docs.welshstreet.com/'),
  title: {
    template: '%s'
  },
  description: 'Welsh Street Documentation',
  applicationName: 'Welsh Street',
  twitter: {
    site: 'https://x.com/welshstreet'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Welsh</b>{' '}
          <span style={{ opacity: '60%' }}>Street</span>
        </div>
      }
      logoLink="https://docs.welshstreet.com/"  // Custom logo link
      // chatLink="https://discord.gg/zWzvtVrPeJ"
      chatLink={false} 
      projectLink={false}  // Hide project link
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="dark">
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={
            <Banner storageKey="genesisEventBanner" className="banner-outer">
              <div className="banner-inner">
                <a href="https://events.welshtest.net/genesis" target="_blank" rel="noopener">
                  🔥 Genesis is Live - Contribute to the LGE Now 🔥
                </a>
              </div>
            </Banner>
          }
          copyPageButton={false}
          docsRepositoryBase="https://github.com/welshstreet/docs/tree/main"
          editLink="View on GitHub"
          feedback={{ content:"Contribute" }}
          footer={<Footer className="custom-footer">
              <a href="https://github.com/enjoywithouthey" target="_blank" rel="noopener" className="footer-link">Made with 🧡 by @enjoywithouthey</a>
            </Footer>}
          navbar={navbar}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          darkMode={false}
          nextThemes={{
            defaultTheme: 'dark',
            forcedTheme: 'dark',
            storageKey: 'theme'
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
