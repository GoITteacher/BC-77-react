export default async function Sidebar() {
  await new Promise((r) => setTimeout(r, 1000));

  return <div>Main Sidebar</div>;
}
