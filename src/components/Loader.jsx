
export default function Loader() {

    return (
        <div className="fixed inset-0 h-full z-50 flex flex-col items-center justify-center bg-white">

            <img
                src="/loader.gif"
                alt="Loading..."
                width={210}
                className="object-contain"
            />

            <h2 className="ml-6 text-3xl font-extralight tracking-widest text-blue-500 animate-pulse">
                LOADING
            </h2>
        </div>
    );
}