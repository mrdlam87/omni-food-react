import "./CtaForm.scss";

const CtaForm = () => {
  return (
    <form className="cta-form" name="sign-up" netlify>
      <div>
        <label for="full-name">Full Name</label>
        <input
          id="full-name"
          name="full-name"
          type="text"
          placeholder="John Smith"
          required
        />
      </div>

      <div>
        <label for="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="me@example.com"
          required
        />
      </div>

      <div>
        <label for="select-where">Where did you hear from us?</label>
        <select name="select-where" id="select-where" required>
          <option value="">Please choose one option:</option>
          <option value="friends">Friends and family</option>
          <option value="youtube">YouTube video</option>
          <option value="podcast">Podcast</option>
          <option value="ad">Facebook ad</option>
          <option value="others">Others</option>
        </select>
      </div>

      <button className="btn btn--form">Sign up now</button>
    </form>
  );
};

export default CtaForm;
