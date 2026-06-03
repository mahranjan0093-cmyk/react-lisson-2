

function products(props) {
  return (
    <div>
      <div className="flex justify-around items-center p-4">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <button className="bg-cyan-900 size-8 rounded-md" onClick={() => { props.setBgColor("bg-cyan-900"); }}></button>
      </div>
      <hr />
    </div>
  )
}

export default products
