const Popup = () => {
  return (
    <div>
      <div className="box">
        <div className="left">
          <img src="./email.png" alt="email" />
        </div>
        <div className="right">
          <form className="form">
            <input type="text" placeholder="First Name" maxLength="15" />
            <input type="text" placeholder="Last name" maxLength="15" />
            <input type="email" placeholder="your email" />
            <textarea maxLength="100">Your questions...</textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
