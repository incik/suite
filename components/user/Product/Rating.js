import { useContext } from "react";
import { useNode } from "@craftjs/core";
import { ProductContext } from "./ProductContext";
import { Text } from "../Text";
import { Label } from "../../ui/form/Label";
import { Select } from "../../ui/form/Select";
import { ProductContainer } from "./Container";
import { StarIcon as EmptyStarIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { Toggle } from "../../ui/form/Toggle";

export const ProductRating = ({ showStarStats, showTotalVotes }) => {
  const {
    connectors: { connect },
  } = useNode();

  const productData = useContext(ProductContext);
  const { averageScore, totalVotes, star1, star2, star3, star4, star5 } =
    productData.data.product.rating;

  console.log("showStarStats", showStarStats);

  return (
    <div ref={connect}>
      <p>{averageScore}</p>
      {showTotalVotes && <p>{totalVotes}</p>}
      {showStarStats && (
        <ul>
          <li>
            <StarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            {star1}
          </li>
          <li>
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            {star2}
          </li>
          <li>
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            {star3}
          </li>
          <li>
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <EmptyStarIcon className="w-4 inline-block" />
            {star4}
          </li>
          <li>
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            <StarIcon className="w-4 inline-block" />
            {star5}
          </li>
        </ul>
      )}
    </div>
  );
};

const ProductRatingSettings = () => {
  const {
    actions: { setProp },
    showStarStats,
    showTotalVotes,
  } = useNode((node) => ({
    showTotalVotes: node.data.props.showTotalVotes,
    showStarStats: node.data.props.showStarStats,
  }));
  return (
    <>
      <Label label="Show total votes">
        <Toggle
          defaultValue={showTotalVotes}
          onChange={(e) =>
            setProp((props) => (props.showTotalVotes = e.target.checked), 1000)
          }
        ></Toggle>
      </Label>
      <Label label="Show star stats">
        <Toggle
          defaultValue={showStarStats}
          onChange={(e) =>
            setProp((props) => (props.showStarStats = e.target.checked), 1000)
          }
        ></Toggle>
      </Label>
    </>
  );
};

const ProductRatingDefaultProps = {
  showTotalVotes: false,
  showStarStats: false,
};

ProductRating.craft = {
  props: ProductRatingDefaultProps,
  related: {
    settings: ProductRatingSettings,
  },
  rules: {
    canDrop: (dropTarget, _, helper) => {
      const targetNode = helper(dropTarget.id);
      const hasAncestorContainer = targetNode
        .ancestors()
        .map((nodeId) => helper(nodeId).get().data.type === ProductContainer);

      return hasAncestorContainer.reduce((a, b) => a || b, false);
    },
  },
};
