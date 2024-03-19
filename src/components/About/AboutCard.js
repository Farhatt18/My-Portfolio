import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Farhat Sumaiya </span>
            living in <span className="purple"> New York, NY. </span> I am a
            full-stack developer with a unique journey. I have completed
            Bachelors in Accounting at Baruch College.
            <br />
            <br />
            With a background in accounting, I transitioned into the dynamic
            world of coding and web development where I found my true passion.
            <br />
            <br />
            Outside of software development, I find fulfillment in{" "}
            <span className="purple">
              helping those in need and cherishing moments with family
            </span>
            . I believe in continuous learning and strive to make a positive
            impact both professionally and within my community.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
