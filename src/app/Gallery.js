import { getImageUrl } from './utils.js'

function Profile({name, codeImg, profesion, numPremios, premios, descubrimiento}){
  return(
    <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl({codeImg})}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            {profesion}
          </li>
          <li>
            <b>Premios: {numPremios} </b> 
            ({premios})
          </li>
          <li>
            <b>Descubrió: </b>
            {descubrimiento}
          </li>
        </ul>
      </section>
  );

}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile name="Maria Skłodowska-Curie" codeImg="szV5sdG" profesion="física y química" numPremios={4} premios="Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci" descubrimiento="polonio (elemento químico)"></Profile>
      <Profile name="Katsuko Saruhashi" codeImg="YfeOqp2" profesion="geoquímica" numPremios={2} premios="Premio Miyake de geoquímica, Premio Tanaka" descubrimiento="un método para medir el dióxido de carbono en el agua de mar"></Profile>
    </div>
  );
}