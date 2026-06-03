
function AboutUS(props) {
  return (
    <div>
      <div className="flex justify-around items-center p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <button className="bg-green-600 size-8 rounded-md" onClick={() => { props.setBgColor("bg-green-600"); }}></button>
      </div>
      <hr />
    </div>
  )
}

export default AboutUS
