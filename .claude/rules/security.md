# Security Rules

- Never commit secrets. `.env*` files are gitignored, except `.env.example` (variable names only, no real values). In Next.js (D4), `NEXT_PUBLIC_`-prefixed variables are automatically exposed to browser code; their values are built into the public JavaScript bundle, so they must be non-sensitive. Use the prefix only when browser code needs the value. Keep secrets unprefixed, and never render them or pass them to Client Components.
- Never render untrusted HTML; avoid `dangerouslySetInnerHTML`/`innerHTML`. If unavoidable, sanitize with DOMPurify.
- Contact forms: validate on client and server, rate-limit, add spam protection (honeypot or captcha), never expose the destination email or API keys client-side.
- Set security headers: Content-Security-Policy, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, HSTS.
- External links with `target="_blank"` use `rel="noopener noreferrer"`.
- Load third-party scripts only when necessary; pin versions and use SRI where possible.
- Run `npm audit` before deploying; fix high/critical issues.
- Don't expose personal data beyond what is intended for the public portfolio.
