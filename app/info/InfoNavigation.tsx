import Link from "next/link";

export default function InfoNavigation() {
  return (
    <ul
      style={{
        backgroundColor: "teal",
      }}
    >
      <li>
        <Link href="/info/user">User</Link>
      </li>
      <li>
        <Link href="/info/site">Site</Link>
      </li>
      <li>
        <Link href="/info/world">World</Link>
      </li>
    </ul>
  );
}
