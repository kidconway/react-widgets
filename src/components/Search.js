import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: query
        }
      });
      setResults(data.query.search);
    };
    if (query && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (query) {
          search();
        }
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [query, results.length]);

  const renderedResults = results.map(result => {
    return (
      <Fragment key={result.pageid}>
        <div className="item">
          <div className="right floated content">
            <a
              className="ui primary button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
          <div className="content">
            <a
              className="header"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              {result.title}
            </a>
            <div className="description">
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <form className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input
            type="text"
            value={query}
            className="input"
            id="input"
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="ui divider"></div>
      <div className="ui celled list">{renderedResults}</div>
    </Fragment>
  );
};

export default Search;
