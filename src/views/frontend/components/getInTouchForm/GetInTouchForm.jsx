import Button from "../buttonComponent/Button";

const GetInTouchForm = () => {
  return (
    <div className="getInTouch__form aside__cards-border ">
      <h4>Get in Touch</h4>
      <form action="#">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
        <Button
          title="Send"
          type="submit"
          svgBackgroundColor="#000"
          icon="solar:arrow-right-broken"
          borderColor="#FB9100"
        />
      </form>
    </div>
  );
};

export default GetInTouchForm;
