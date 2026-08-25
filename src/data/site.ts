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

  role: 'Robotics & Automation Technician',
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
   * Formspree endpoint. Create a free form at https://formspree.io and paste
   * the endpoint here. Until then the form shows a friendly notice instead of
   * submitting. Your address is never exposed on the page.
   */
  formEndpoint: '',
};
