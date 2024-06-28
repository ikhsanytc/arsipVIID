function generateRotate() {
  const rotations = ["rotate-12", "-rotate-12", "rotate-0"];
  const randomIndex = Math.floor(Math.random() * rotations.length);
  return rotations[randomIndex];
}

export default generateRotate;
