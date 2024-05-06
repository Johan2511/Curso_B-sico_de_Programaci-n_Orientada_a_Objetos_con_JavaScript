export default function Widget() {
    return (
        <body className="bg-black text-white">
          <div className="relative min-h-screen flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50" style="background-image: url('https://placehold.co/1040x695');"></div>
            
            <div className="p-8 bg-black bg-opacity-75 rounded-lg shadow-lg z-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
              <form action="#" method="POST">
                <div className="mb-4">
                  <input type="text" placeholder="Email or phone number" className="w-full p-3 rounded bg-zinc-800 text-white placeholder-zinc-400"/>
                </div>
                <div className="mb-6">
                  <input type="password" placeholder="Password" className="w-full p-3 rounded bg-zinc-800 text-white placeholder-zinc-400"/>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
                <div className="flex items-center justify-between mt-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-red-600"/>
                    <span className="ml-2">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-zinc-400 hover:text-zinc-300">Need help?</a>
                </div>
                <div className="mt-4">
                  <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login with Facebook</button>
                </div>
              </form>
            </div>
          </div>
        </body>
        
    )
}