import { Link } from "react-router-dom";
import Container from "../components/container";
import generateRotate from "../libs/generateRotate";
import getUniqueRandomNumbers from "../libs/random";
function Home() {
  let numbers = getUniqueRandomNumbers(48, 1, 48);
  return (
    <>
      <div className="bg-white w-full">
        <div className="p-3"></div>
        <img
          src="/logo.jpg"
          className="w-64 mx-auto mb-3 rounded-lg border-[5px] border-gray-500"
          alt=""
        />
        <h1 className="text-center font-bold text-3xl">Foto Foto VIIID</h1>
        <p className="text-center font-medium text-gray-500">
          Klik foto untuk mendownload!
        </p>
        <div className="p-2"></div>
      </div>
      <Container>
        <div className="p-10"></div>
        <div className="p-10 flex flex-col gap-16">
          {numbers.map((number, idx) => {
            if (
              number === 40 ||
              number === 48 ||
              number === 37 ||
              number === 45
            ) {
              return (
                <Link to={`/detail/${number}`} key={idx}>
                  <div
                    className={`bg-white w-full md:w-1/2 p-2 mx-auto rounded-lg shadow rotate-0`}
                  >
                    <img
                      src={`/img${number}.webp`}
                      loading="lazy"
                      className="border-[4px] border-gray-500 mx-auto"
                      alt=""
                    />
                  </div>
                </Link>
              );
            }
            return (
              <Link to={`/detail/${number}`} key={idx}>
                <div
                  className={`bg-white w-full md:w-1/2 p-2 mx-auto rounded-lg shadow ${generateRotate()}`}
                >
                  <img
                    src={`/img${number}.webp`}
                    loading="lazy"
                    className="border-[4px] border-gray-500 mx-auto"
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
      <div className="bg-white w-full p-3">
        <h1 className="font-semibold text-center">VIIID The Best 😁👍</h1>
      </div>
    </>
  );
}

export default Home;
