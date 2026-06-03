

function Home(props) {
  return (
    <div>
      <div className="flex justify-around items-center p-4">
        <h1 className="text-4xl font-bold mb-4">Home</h1>
        <button className="bg-orange-600 size-8 rounded-md" onClick={() => { props.setBgColor("bg-orange-600") }}></button>
      </div>
      <hr />
    </div>
  )
}

export default Home
