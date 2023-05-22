import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("KiddToY | Blog");
  return (
    <div className="w-full md:w-11/12 my-5 md:mx-auto px-3 md:px-0">
      {/* ALL Blog Question Answers  */}
      <div>
        <h3 className="font-bold text-2xl my-5 text-center md:mb-16 md:mt-16 text-violet-500">
          BLOGS{" "}
        </h3>
        <hr className="mb-16" />
        <div className="px-5 mb-32">
          <h3 className="font-bold text-2xl mb-2 text-violet-700">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: Access tokens are short-lived tokens that are used to access
            protected resources. Refresh tokens are long-lived tokens that are
            used to generate new access tokens. Access tokens and refresh tokens
            should be stored securely on the client-side.
          </p>
          <h3 className="font-bold text-2xl mb-2 text-violet-700">
            Compare SQL and NoSQL databases?
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: SQL and NoSQL are two different types of databases. SQL
            databases are relational, while NoSQL databases are non-relational.
            SQL databases use SQL to store and retrieve data, while NoSQL
            databases use a variety of different data models. SQL databases are
            typically used for applications that require a lot of data
            manipulation, while NoSQL databases are typically used for
            applications that require a lot of flexibility and scalability.
          </p>
          <h3 className="font-bold text-2xl mb-2 text-violet-700">
            What is express js? What is Nest JS?
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: Express.js and Nest.js are both JavaScript frameworks used to
            build web applications. Express.js is a lightweight framework with a
            minimal set of features, while Nest.js is a more robust framework
            with a more opinionated architecture.
          </p>
          <h3 className="font-bold text-2xl mb-2 text-violet-700">
            What is MongoDB aggregate and how does it work?
          </h3>
          <p className="text-xl text-gray-500 mb-6">
            Ans: MongoDB aggregate is a feature that allows us to perform
            complex operations on our data using a pipeline of stages. Each
            stage in the pipeline performs a specific operation on the data,
            such as filtering, grouping, or calculating values. The output of
            one stage is passed to the next stage, and so on. The final stage in
            the pipeline returns the results of the aggregation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
