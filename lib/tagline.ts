export function buildTagline(subject: string) {
  const trimmed = subject.trim();
  if (!trimmed) {
    throw new Error("subject must not be empty");
  }
  return `${trimmed} · test, learn, repeat`;
}
