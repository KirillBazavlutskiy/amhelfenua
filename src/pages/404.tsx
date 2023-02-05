import Link from "next/link";

const FourOhFour = () => {
    return (
        <div className={
            "text-center w-full h-screen " +
            "flex flex-col items-center justify-center"
        }>
            <h1 className={"text-xl font-semibold"}>404</h1>
            <h2 className={"text-lg font-semibold"}>Ця сторінка не існує</h2>
            <Link href='/'>
                <p className={
                    "text-lg font-semibold transition-colors " +
                    "hover:text-blue-500"
                }>
                    Головна
                </p>
            </Link>
        </div>
    );
};

export default FourOhFour;