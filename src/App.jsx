import { useApi } from "./hooks/useApi";
function App() {
  const {user} = useApi();
  return (
    <div className='gap-5 px-5 py-10 w-screen h-screen' style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))'}}>
      {user.map(item => (
        <div className='w-full h-[280px] rounded-2xl shadow-2xl' key={item.id}>
          <img className='w-full h-[190px] rounded-t-2xl' src={`https://picsum.photos/200/300?random=${item.id}`}></img>
          <p className='w-full h-[30px] pl-2 text-[#333333] text-[20px]'>{item.name}</p>
          <p className='w-full h-[20px] pl-2 text-[#909FB9] text-[15px]'>@{item.username}</p>
          <p className='w-full h-[20px] pl-2 text-[#909FB9] text-[15px]'>{item.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
