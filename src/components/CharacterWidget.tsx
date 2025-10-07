//https://swapi.info/api/people/${count}

export default function CharacterWidget() {
  return (
    <>
      <button>Count</button>
      <pre>{JSON.stringify("", null, 2)}</pre>
    </>
  );
}
