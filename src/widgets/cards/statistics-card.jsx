import { Card, CardBody } from "@material-tailwind/react";
import PropTypes from "prop-types";
import TextStatisticCard from "../components/textStatisticCard";

export function StatisticsCard({ color, icon, title, value, footer }) {
  return (
    <Card className="border border-blue-gray-100 shadow-md">
      {/* <div className="ml-12 pt-2">
        <p className="text-sm font-bold">Packing Data:</p>
      </div> */}
      <CardBody className="flex flex-col justify-between p-4 text-right">
        <TextStatisticCard title={"Bin from"} value={"BP230, BP230"} />
        <TextStatisticCard title={"Counter Start"} value={"50 Bag"} />
        <TextStatisticCard title={"Counter Finish"} value={"900 Bag"} />
        <TextStatisticCard title={"Status"} value={"Feeding"} />
      </CardBody>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
