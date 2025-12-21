export default function isValidEmail(email: string) {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
