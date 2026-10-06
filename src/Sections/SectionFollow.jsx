const socials = [
  {
    name: "Instagram",
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>
  },
  {
    name: "Facebook",
    icon: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8Z" />
  },
  {
    name: "X",
    icon: <path d="M4 4l16 16M20 4L4 20" />
  },
  {
    name: "LinkedIn",
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>
  },
  {
    name: "YouTube",
    icon: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3Z" fill="currentColor" /></>
  },
  {
    name: "TikTok",
    icon: <path d="M14 3v11a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4.5 5 4.5" />
  }
];

function SectionFollow() {
  return (
    <section className="follow">
      <h2 className="follow-title cond">Sigue a Autos Web</h2>
      <ul className="follow-list">
        {socials.map((s) => (
          <li key={s.name}>
            <a href="#top" aria-label={s.name}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{s.icon}</svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SectionFollow;
