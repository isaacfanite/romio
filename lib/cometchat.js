// Minimal CometChat init wrapper for client usage.
// You will still include CometChat SDK in client pages that need it.
export const COMETCHAT_APP_ID = process.env.NEXT_PUBLIC_COMETCHAT_APP_ID
export const COMETCHAT_API_KEY = process.env.COMETCHAT_API_KEY

// Server-side helper (example) would use CometChat REST APIs to create users or generate auth tokens.
