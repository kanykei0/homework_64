import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 pt-5">Контакты</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="contact-card">
            <h5>Адрес</h5>
            <p>Кыргызстан, Бишкек</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-card">
            <h5>Email</h5>
            <p>duishenalievak@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="contact-card">
            <h5>Телефон</h5>
            <p>+996 (776) 84-96-62</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-card">
            <h5>Ссылки</h5>
            <p>
              <a href="https://github.com/kanykei0/homework_62.git">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
