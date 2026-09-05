/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (typeof password !== 'string' || password.length === 0) {
    return 'weak';
  }

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    const element = password[i];

    if (upper.includes(element)) hasUpper = true;
    if (lower.includes(element)) hasLower = true;
    if (digits.includes(element)) hasNumber = true;
    if (special.includes(element)) hasSpecial = true;
  }

  let criteriaMeet = 0;

  if (password.length >= 8) criteriaMeet++;
  if (hasUpper) criteriaMeet += 1;
  if (hasLower) criteriaMeet += 1;
  if (hasNumber) criteriaMeet += 1;
  if (hasSpecial) criteriaMeet += 1;

  if (criteriaMeet <= 1) return 'weak';
  if (criteriaMeet <= 3) return 'medium';
  if (criteriaMeet === 4) return 'strong';
  return 'very strong';
}
