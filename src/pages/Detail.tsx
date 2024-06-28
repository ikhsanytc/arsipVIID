import { Link, useParams } from "react-router-dom";
import Container from "../components/container";

function Detail() {
  const { imgId } = useParams();
  return (
    <Container center>
      <div className="bg-white w-full md:w-1/2 p-2 rounded-lg shadow">
        <div className="flex md:flex-row flex-col gap-4">
          <img
            src={`/img${imgId}.webp`}
            className="w-64 mx-auto border-[5px] border-gray-500 rounded-lg"
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold">Photo {imgId}</h1>
            <p className="text-gray-600 font-medium mb-7">
              jika tertarik dengan foto, anda bisa mendownloadnya di bawah.
            </p>
            <div className="flex gap-2">
              <a
                href={`/img${imgId}.webp`}
                download={`/img${imgId}.webp`}
                className="bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 active:bg-blue-700"
              >
                Download
              </a>
              <Link to="/">
                <button className="py-2 px-5 text-blue-500 bg-white border-2 border-blue-500 rounded-lg hover:border-blue-600 active:border-blue-700">
                  Kembali
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Detail;
