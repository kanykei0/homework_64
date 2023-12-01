import "./About.css";
import tyan from "../../assets/tyan.jpeg";

const About = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">About</h2>

      <div className="row">
        <div className="col-md-8">
          <div className="about-us-card">
            <h4>Hello! My name is #*@*@_</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eligendi aperiam quae atque laboriosam assumenda nemo
              officia? Mollitia, doloribus fugiat architecto velit incidunt
              veniam, porro temporibus repellendus consequatur quam iusto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa
              recusandae iste natus at sapiente doloremque consectetur possimus
              architecto? Sint, unde voluptas tempore quia ipsam praesentium
              temporibus, in, consequuntur similique aliquam commodi sequi ipsa
              vero perspiciatis itaque. Ducimus saepe totam odio debitis
              perspiciatis repellat dolor alias, illo, facere quasi quam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              fugit aliquam assumenda perspiciatis saepe nulla veniam temporibus
              autem consequatur sed. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Distinctio delectus et enim voluptatum fugit.
              Magni repellat unde eos veniam suscipit, perferendis quo . Rem
              voluptatem quisquam sapiente nisi, asperiores cumque optio nobis
              sunt minus consectetur, corporis magni inventore quibusdam, quos
              alias necessitatibus delectus rerum beatae voluptates eveniet!
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={tyan} alt="alien" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
