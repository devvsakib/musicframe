const MFTitle = ({ title, tagline }) => {
  return (
    <div className="mb-10 text-center">
      <h3 className="text-2xl mb-5">{title}</h3>
      <p className="text-base w-auto sm:w-6/12 mx-auto">{tagline}</p>
    </div>
  )
}
export default MFTitle