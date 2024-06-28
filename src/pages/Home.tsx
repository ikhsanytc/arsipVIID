import { Link } from "react-router-dom";
import Container from "../components/container";
import generateRotate from "../libs/generateRotate";
import getUniqueRandomNumbers from "../libs/random";
import { motion } from "framer-motion";

function Home() {
  let numbers = getUniqueRandomNumbers(48, 1, 48);
  return (
    <>
      <div className="bg-white w-full">
        <div className="p-3"></div>
        <motion.img
          initial={{
            opacity: 0,
            y: -440,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 1,
            y: -440,
          }}
          transition={{ delay: 0.2, duration: 1.2 }}
          src="/logo.jpg"
          className="w-64 mx-auto mb-3 rounded-lg border-[5px] border-gray-500"
          alt=""
        />
        <motion.h1
          initial={{ opacity: 0, x: 440 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center font-bold text-3xl"
        >
          Foto Foto VIIID
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center font-medium text-gray-500"
        >
          Klik foto untuk mendownload!
        </motion.p>
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
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx, duration: 0.5 }}
                    className={`bg-white w-full md:w-1/2 p-2 mx-auto rounded-lg shadow rotate-0`}
                  >
                    <img
                      src={`/img${number}.webp`}
                      loading="lazy"
                      className="border-[4px] border-gray-500 mx-auto"
                      alt=""
                    />
                  </motion.div>
                </Link>
              );
            }
            return (
              <Link to={`/detail/${number}`} key={idx}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx, duration: 0.5 }}
                  className={`bg-white w-full md:w-1/2 p-2 mx-auto rounded-lg shadow ${generateRotate()}`}
                >
                  <img
                    src={`/img${number}.webp`}
                    loading="lazy"
                    className="border-[4px] border-gray-500 mx-auto"
                    alt=""
                  />
                </motion.div>
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
