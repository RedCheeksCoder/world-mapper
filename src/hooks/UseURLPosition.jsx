import { useSearchParams } from "react-router-dom";

function UseURLPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}

export default UseURLPosition;
