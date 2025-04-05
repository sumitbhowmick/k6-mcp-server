import http from "k6/http";
import { sleep } from "k6";

//default options
export const options = {
  vus: 10,
  duration: "30s",
};

//function
export default function () {
  http.get("https://test.k6.io/");
  sleep(1);
}
