# Troubleshooting Welsh Street Docs

## Current Status
- **App State**: ✅ **RESTORED** - Back to working state from git
- **Documentation Pages**: ✅ Working - All `/docs/*` routes load properly
- **Search Issue**: ❌ **CRITICAL** - Primary problem persists

## Primary Issue: Search Index Loading Error

### Error Details
- **Error**: "Failed to load search index - TypeError: Failed to fetch dynamically imported module: https://docs.welshstreet.com/_pagefind/pagefind.js"
- **Location**: When typing in search bar on deployed site (docs.welshstreet.com)
- **Status**: ❌ **UNRESOLVED**

### Root Cause Analysis (From Nextra Docs)
Based on official Nextra documentation, the issue is that you're missing the **pagefind setup** for search functionality.

**What's happening:**
1. Your app has `contentDirBasePath: '/docs'` in next.config.mjs
2. This correctly routes `/docs/disclaimer` to `src/content/disclaimer.mdx`  
3. **BUT** - Nextra uses **Pagefind** for search, which requires additional setup
4. Without pagefind setup, the `_pagefind/pagefind.js` file doesn't exist

### Current Working Structure  
✅ **CORRECT NEXTRA STRUCTURE** (confirmed from official docs):
```
src/
  content/                     # ✅ Content directory (correct)
    _meta.js                   # ✅ Navigation config
    core/                      # ✅ Core documentation  
      _meta.js                 # ✅ Core navigation config
    events/
      _meta.js
  app/
    docs/[[...mdxPath]]/page.jsx  # ✅ Route handler (correct)
    layout.jsx                   # ✅ Root layout
    page.jsx                     # ✅ Index page

next.config.mjs:
  contentDirBasePath: '/docs'    # ✅ CORRECT - maps content to /docs/* routes
```

### The Missing Piece: Pagefind Setup

According to Nextra docs, search requires **pagefind** to be installed and configured:

**Required Steps:**
1. Install pagefind: `npm i -D pagefind` 
2. Add postbuild script to package.json:
   ```json
   {
     "scripts": {
       "postbuild": "pagefind --site .next/server/app --output-path public/_pagefind"
     }
   }
   ```
3. Add `_pagefind/` to .gitignore
4. The `_pagefind/pagefind.js` file will be generated during build

### Why Removing contentDirBasePath Breaks Routes
- ❌ Without `contentDirBasePath: '/docs'`: `/docs/disclaimer` → 404 (can't find content)
- ✅ With `contentDirBasePath: '/docs'`: `/docs/disclaimer` → `src/content/disclaimer.mdx` ✅

**Key Insight**: The contentDirBasePath is REQUIRED for your routing to work. The search issue is separate and needs pagefind setup.

## Next Steps for Search Fix
1. ✅ Install pagefind: `npm i -D pagefind`
2. ✅ Add postbuild script to package.json 
3. ✅ Add `_pagefind/` to .gitignore
4. 🔧 Build and verify _pagefind directory is created: `npm run build`
5. 🚀 Deploy and test search functionality

## Implementation Details
**✅ COMPLETED**: Pagefind has been properly configured:

1. **Dependency**: Added `pagefind: "^1.1.1"` to devDependencies
2. **Build Script**: Added `"postbuild": "pagefind --site .next/server/app --output-path public/_pagefind"`
3. **Git Ignore**: Added `_pagefind/` to .gitignore
4. **Next Step**: Run `npm run build` to generate search index

**How it works:**
- After `npm run build`, the `postbuild` script automatically runs
- Pagefind scans `.next/server/app` for HTML files 
- Generates search index in `public/_pagefind/`
- Nextra will now be able to load `_pagefind/pagefind.js` successfully

## Previous Misdiagnosis
- ❌ **WRONG**: "contentDirBasePath is causing search issues"
- ✅ **CORRECT**: "Missing pagefind setup is causing search issues"
- ✅ **LESSON**: Don't modify working routing - focus on missing dependencies