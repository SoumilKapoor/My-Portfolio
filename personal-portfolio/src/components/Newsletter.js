import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) {
      return;
    }

    onValidated({
      EMAIL: email,
    });
  };

  const clearFields = () => {
    setEmail("");
  };

  // ✅ Safely extract message
  const getMessage = () => {
    if (!message) return "";

    // If it's an Error object
    if (typeof message === "object" && message.message) {
      return message.message;
    }

    // If Mailchimp returns HTML string, remove tags
    if (typeof message === "string") {
      return message.replace(/<\/?[^>]+(>|$)/g, "");
    }

    return message;
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter
              <br />
              & Never miss latest updates
            </h3>

            {status === "sending" && (
              <Alert variant="info">Sending...</Alert>
            )}

            {status === "error" && (
              <Alert variant="danger">
                {getMessage()}
              </Alert>
            )}

            {status === "success" && (
              <Alert variant="success">
                {getMessage()}
              </Alert>
            )}
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};