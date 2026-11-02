# Security Rules

- Never commit secrets. `.env*` files are gitignored; only `NEXT_PUBLIC_`/`VITE_`-prefixed values reach the client, and those must be non-sensitive.
- Never render untrusted HTML; avoid `dangerouslySetInnerHTML`/`innerHTML`. If unavoidable, sanitize with DOMPurify.
- Contact forms: validate on client and server, rate-limit, add spam protection (honeypot or captcha), never expose the destination email or API keys client-side.
- Set security headers: Content-Security-Policy, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, HSTS.
- External links with `target="_blank"` use `rel="noopener noreferrer"`.
- Load third-party scripts only when necessary; pin versions and use SRI where possible.
- Run `npm audit` before deploying; fix high/critical issues.
- Don't expose personal data beyond what is intended for the public portfolio.
