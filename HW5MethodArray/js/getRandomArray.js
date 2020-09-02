export const getRandomArray = (length, min, max) => {
    const randomArray = Array.from({ length: length });
    const rndMap = randomArray.map((el) =>
      (Math.random() * (min - max) + max).toFixed(0)
    );
    return rndMap;
  };

