import InfoNavigation from "./InfoNavigation";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "50px",
        display: "flex",
        gap: "20px",
      }}
    >
      <InfoNavigation />

      <div
        style={{
          backgroundColor: "silver",
        }}
      >
        {children}
      </div>
    </div>
  );
}
