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
    provider: '' as '' | 'web3forms' | 'formspree',
    key: '',
  },
};
