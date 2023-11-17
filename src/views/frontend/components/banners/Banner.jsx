const Banner = (props) => {
  return (
    <>
      <div className="inner-banner">
        <div className="container">
            <h1 className="inner-banner-head">{props.title}</h1>
        </div>
      </div>
    </>
  )
}

export default Banner
