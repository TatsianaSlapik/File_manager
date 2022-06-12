import { cpus } from "node:os";

export const getCpus = () => {
  const result = cpus().map((elem) => {
    let { model: model, speed: speed } = elem;
    speed = speed / 1000 < 0.1 ? (speed / 1000) * 100 : speed / 1000;

    return { model: model, speed: speed };
  });
  return result;
};
