interface StoreProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Store({ params }: StoreProps) {
  const { slug } = await params;

  const marka = slug[0];
  const model = slug[1];
  const engine = slug[2];

  return (
    <div>
      <h3>Car Info:</h3>
      <p>Marka: {marka}</p>
      <p>Model: {model}</p>
      <p>Engine: {engine}</p>
    </div>
  );
}

// info/audi
// info/audi/a1-8x1-8xk-z-05-2010-do-10-2018
// info/audi/a1-8x1-8xk-z-05-2010-do-10-2018/1-0-tfsi

// info/chevrolet
// info/chevrolet/aveo-55-s-06-2006-po-do-n-v
// info/chevrolet/aveo-55-s-06-2006-po-do-n-v/1-2

// /info/{marka}/{model}/{eng}
