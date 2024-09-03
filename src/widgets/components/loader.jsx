import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

export default function PageLoader({ active, children }) {
  return (
    <LoadingOverlay active={active} spinner={<BounceLoader color="blue" />}>
      {children}
    </LoadingOverlay>
  );
}
