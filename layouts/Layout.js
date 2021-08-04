export default function Layout({ children }) {

  return (
    <>
      <section className="flex justify-between flex-col min-h-screen min-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex-grow justify-center mt-16 sm:mt-32 container mx-auto max-w-3xl">
          <div className="sm:bg-white sm:bg-opacity-5 rounded-xl sm:p-10">
            <img className="m-auto mb-8 w-40" src="/logo.svg" alt="" />
            {children}
          </div>
        </div>
        <footer className="text-gray-500 text-sm text-center py-8">
          <p>Technical Test Hiberus Javascript</p>
        </footer>
      </section>
    </>
  )
}