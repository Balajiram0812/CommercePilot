const InputBox=(text,placeholder)=>{
    return(
      
        <div className="flex items-center border border-gray-200 rounded-lg p-2 bg-gray-50 w-full max-w-md">
      {/* <Search className="w-5 h-5 text-gray-400 mr-2" /> */}
      <input
        type={text}
        placeholder={placeholder}
      
      />
    </div>
    )
}
export default InputBox;