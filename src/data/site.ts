/**
 * All copy lives here. Edit this file, not the components.
 *
 * This page is public. Keep it general: no employers, no dates, no internal
 * process or programme names. Specifics belong in the resume you send directly.
 */

export const site = {
  name: 'Soufiane Kheddaoui',
  /** Compact wordmark for the header. */
  initials: 'SK',
  url: 'https://soufianekh.space',

  role: 'Aerospace Industrial Engineer',
  location: 'Los Angeles, California',

  /** One sentence. The whole pitch. */
  statement:
    'I deploy, test, and optimize the robotic systems behind modern ' +
    'manufacturing.',

  /** Optional credibility marker. Set to null to hide it entirely. */
  yearsExperience: 6,

  /** Three capability areas. Categories of work, never specific employers. */
  capabilities: [
    {
      title: 'Robotics Integration',
      body:
        'Bringing robotic cells online and keeping them there — parameter ' +
        'tuning, fault diagnosis, and the hands-on troubleshooting that turns ' +
        'a specification into a working line.',
    },
    {
      title: 'Process Optimization',
      body:
        'Finding the time and quality left on the table. Cycle-time ' +
        'reduction, method standardization, and operator training that makes ' +
        'improvements hold across shifts.',
    },
    {
      title: 'Systems Testing',
      body:
        'Validation before deployment and diagnosis after it — simulation, ' +
        'regression and functional testing, and the documentation that makes ' +
        'results reproducible.',
    },
  ],

  /**
   * Side project. Public repo, so linking it is fine — but keep the write-up
   * about the work, not about you.
   */
  project: {
    name: 'Vaultless',
    tagline: 'A password manager with no vault.',
    body:
      'Passwords are derived on demand from a passphrase and an oracle — an ' +
      'ESP32 device or a printed QR square. Nothing is stored, so there is ' +
      'nothing to sync or leak.',
    points: [
      'Two-party OPRF over ristretto255 — the oracle never sees the passphrase.',
      'A DLEQ proof and a pinned key reject a swapped device.',
      'A printed sheet backs up a device byte-for-byte.',
    ],
    stack: ['ristretto255', 'OPRF', 'HKDF-SHA256', 'ESP32', 'WebSerial'],
    repo: 'https://github.com/Ak1ra00/SK',
    /**
     * Live-site link. Empty hides the "Visit site" button.
     *
     * Disabled: vaultless.space currently redirect-loops. The apex carries a
     * stray Namecheap forwarding A record (192.64.119.220) alongside GitHub's
     * four Pages IPs, so the apex 302s to www while GitHub 301s www back to
     * the apex. Remove that A record and any URL-forwarding rule at the
     * registrar, let GitHub issue the certificate, then set this to
     * 'https://vaultless.space/'.
     */
    site: '',
    note: 'Applied cryptography and hardware security are a standing interest.',
  },

  /**
   * Contact form delivery. Your email address is never written into the page —
   * it lives with the provider, and the form posts to them.
   *
   * Pick ONE provider and fill in `key`. Until then the form stays inert and
   * says so on the page.
   *
   *   web3forms  — no account needed. Enter your email at
   *                https://web3forms.com and they email you an access key
   *                (a UUID). Paste that key below. Unlimited submissions.
   *
   *   formspree  — create a free form at https://formspree.io, then paste the
   *                whole endpoint URL (https://formspree.io/f/xxxxxxxx).
   *                Free tier allows 50 submissions per month.
   */
  form: {
    provider: 'web3forms' as '' | 'web3forms' | 'formspree',
    key: 'ad30ab59-627f-4b1a-92c6-99c59ea59115',
  },
};
