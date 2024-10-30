export default function Profile2() {
    return (
      <div>
        <Card titulo="Foto">
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
        </Card>
        <Card titulo = "Información">
            <p>Aklilu Lemma fue un destacado científico etíope que descubrió un tratamiento natural para la esquistosomiasis.</p>
        </Card>
      </div>
    );
  }

  function Card({children, titulo}){ç
    return (
      <div className="card">
        <div className="card-content">
          <h1>{titulo}</h1>
          {children}
        </div>
      </div>
    );
  }
  