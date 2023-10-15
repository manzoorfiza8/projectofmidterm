import useFetch from "../../Hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  console.log(data)

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kashmir </h1>
              <h2>{data[0]} Logs </h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://guidetopakistan.pk/wp-content/uploads/2021/04/Naran-26.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Abbotabad </h1>
              <h2>{data[1]} Logs </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://thumbs.dreamstime.com/b/sonamarg-view-kashmir-india-27947889.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Swat</h1>
              <h2>{data[2]} Logs </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
