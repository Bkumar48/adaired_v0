import JsonData from "./SingleBlog.json";
import DOMPurify from "dompurify";
import React from "react";
import Advertisement from "../../components/advertisementCard/Advertisement";

const RenderHtml = React.memo(({ data }) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
});

RenderHtml.displayName = "RenderHtml";

const formatDate = (inputDate) => {
  // Convert the input date string to a Date object
  const date = new Date(inputDate);

  // Options for formatting the date
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Format the date using the options
  return date.toLocaleDateString("en-US", options);
};

const SingleBlog = () => {
  const data = JsonData[0];

  return (
    <>
      <section className="single__blog-section">
        <div className="container pad100 d-flex">
          <div className="single__blog-card">
            <div className="single__blog-img">
              <img src={data.mainImg} alt="image" loading="lazy" />
            </div>
            <div className="single__blog-title mt25">
              <h2>{data.title}</h2>
            </div>
            <div className="single__blog-date">
              <p>{formatDate(data.createdAt)}</p>
            </div>
            <div className="single__blog-content">
              <RenderHtml data={data.content} />
            </div>

            <div className="single__blog-questions">
              {data.questionsAndAnswers.map((item, index) => (
                <div key={index} className="single__blog-questions-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="single__blog-extra-content">
              <RenderHtml data={data.extraContent} />
            </div>
          </div>
          <Advertisement />
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
